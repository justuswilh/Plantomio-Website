import process from 'node:process'
import { PrismaClient } from '@prisma/client'
// server/api/send-form.post.ts
import { createError, defineEventHandler, readBody, sendError } from 'h3'
import nodemailer from 'nodemailer'
import fs from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

// Funktion zum Schreiben in fallback.json
const writeToFallback = async (submission: {
  name: string
  nachname: string
  email: string
  newsletter: boolean
  betaProgram: boolean
}) => {
  const fallbackPath = path.join(process.cwd(), 'fallback.json')

  try {
    // Versuche, die bestehende fallback.json zu lesen
    const data = await fs.readFile(fallbackPath, 'utf-8')
    const submissions = JSON.parse(data)

    if (!Array.isArray(submissions)) {
      throw new Error('fallback.json ist kein gültiges Array.')
    }

    // Füge die neue Submission hinzu
    submissions.push({
      ...submission,
      timestamp: new Date().toISOString(),
    })

    // Schreibe die aktualisierte Liste zurück
    await fs.writeFile(fallbackPath, JSON.stringify(submissions, null, 2), 'utf-8')
  }
  catch (error: any) {
    if (error.code === 'ENOENT') {
      // fallback.json existiert nicht, erstelle eine neue Datei mit der ersten Submission
      const initialData = [
        {
          ...submission,
          timestamp: new Date().toISOString(),
        },
      ]
      await fs.writeFile(fallbackPath, JSON.stringify(initialData, null, 2), 'utf-8')
    }
    else {
      // Andere Fehler
      console.error('Fehler beim Schreiben in fallback.json:', error)
      throw error // Optional: Re-throw, wenn du weitere Maßnahmen ergreifen möchtest
    }
  }
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { newsletter, betaProgram, name, nachname, email } = body

    // 1) Validierung
    if (!name || !nachname || !email) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'Name, Nachname und E-Mail sind erforderlich.' }),
      )
    }

    // **Neue Validierung**: Mindestens eine Checkbox muss true sein
    if (!newsletter && !betaProgram) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'Mindestens eine Checkbox (Newsletter oder Beta Programm) muss aktiviert sein.' }),
      )
    }

    // 2) E-Mail versenden (unabhängig von der DB-Speicherung)
    let emailSent = false
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number.parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const mailOptions = {
        from: '"Plantomio Kontaktformular" <no-reply@plantomio.de>',
        to: 'justus@plantomio.de',
        subject: 'Neues Formular Submission',
        text: `
          Newsletter: ${newsletter ? 'Ja' : 'Nein'}
          Beta Programm: ${betaProgram ? 'Ja' : 'Nein'}
          Name: ${name}
          Nachname: ${nachname}
          E-Mail: ${email}
        `,
        html: `
          <h2>Neues Formular Submission</h2>
          <p><strong>Newsletter:</strong> ${newsletter ? 'Ja' : 'Nein'}</p>
          <p><strong>Beta Programm:</strong> ${betaProgram ? 'Ja' : 'Nein'}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Nachname:</strong> ${nachname}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
        `,
      }

      await transporter.sendMail(mailOptions)
      emailSent = true
    }
    catch (emailError) {
      console.error('Fehler beim Senden der E-Mail:', emailError)
      // E-Mail senden ist fehlgeschlagen, aber wir fahren fort
    }

    // 3) Daten in DB speichern
    let dbSaved = false
    try {
      await prisma.submission.create({
        data: {
          name,
          nachname,
          email,
          newsletter: !!newsletter,
          betaProgram: !!betaProgram,
        },
      })
      dbSaved = true
    }
    catch (dbError) {
      console.error('Fehler beim Speichern in der Datenbank:', dbError)
      // DB speichern ist fehlgeschlagen, aber wir fahren fort
    }

    // 4) Fallback, wenn sowohl E-Mail als auch DB speichern fehlschlagen
    if (emailSent) {
      try {
        await writeToFallback({
          name,
          nachname,
          email,
          newsletter: !!newsletter,
          betaProgram: !!betaProgram,
        })
        console.warn('Daten wurden in fallback.json gespeichert.')
      }
      catch (fallbackError) {
        console.error('Fehler beim Speichern in fallback.json:', fallbackError)
        // Optional: Weitere Maßnahmen, z.B. Benachrichtigungen an Admins
        return sendError(
          event,
          createError({ statusCode: 500, statusMessage: 'Fehler beim Speichern der Daten.' }),
        )
      }
    }

    // 5) Antwortnachricht erstellen
    let message = 'Vielen Dank für dein Interesse!'

    if (newsletter && betaProgram) {
      message += ' Wir werden dich umgehend kontaktieren, um eine Teilnahme am Beta Programm zu besprechen.'
    }
    else if (betaProgram) {
      message += ' Wir werden dich umgehend kontaktieren, um eine Teilnahme am Beta Programm zu besprechen.'
    }
    else if (newsletter) {
      message = 'Vielen Dank für dein Interesse am Newsletter!'
    }

    return { message }
  }
  catch (error) {
    console.error('Fehler beim Verarbeiten der Anfrage:', error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Fehler beim Verarbeiten der Anfrage.' }))
  }
})
