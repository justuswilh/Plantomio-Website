// server/api/send-form.post.ts
import { defineEventHandler, readBody, sendError, createError } from 'h3'
import nodemailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { newsletter, betaProgram, name, nachname, email } = body

    // 1) Validierung
    if (!name || !nachname || !email) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'Name, Nachname und E-Mail sind erforderlich.' })
      )
    }

    // **Neue Validierung**: Mindestens eine Checkbox muss true sein
    if (!newsletter && !betaProgram) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: 'Mindestens eine Checkbox (Newsletter oder Beta Programm) muss aktiviert sein.' })
      )
    }

    // 2) E-Mail versenden
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
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

    // 3) Daten in DB speichern
    await prisma.submission.create({
      data: {
        name,
        nachname,
        email,
        newsletter: !!newsletter,
        betaProgram: !!betaProgram,
      },
    })

    let message = 'Vielen Dank für dein Interesse!'

    if (newsletter && betaProgram) {
      message += ' Wir werden dich umgehend kontaktieren, um eine Teilnahme am Beta Programm zu besprechen.'
    } else if (betaProgram) {
      message += ' Wir werden dich umgehend kontaktieren, um eine Teilnahme am Beta Programm zu besprechen.'
    } else if (newsletter) {
      message = 'Vielen Dank für dein Interesse am Newsletter!'
    }

    return { message }
  } catch (error) {
    console.error('Fehler beim Senden oder Speichern:', error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Fehler beim Senden oder Speichern.' }))
  }
})