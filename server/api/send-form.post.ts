import process from 'node:process'
import { createClient } from '@supabase/supabase-js' // Supabase-Import hinzufügen
import { createError, defineEventHandler, readBody, sendError } from 'h3'
import nodemailer from 'nodemailer'

// Supabase-Client initialisieren
const supabaseUrl = 'https://zjyvmawmznpzarynvcyw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { newsletter, betaProgram, name, familyName, email } = body

    // 1) Validierung
    if (!name || !familyName || !email) {
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

    // Flags zur Überwachung des Erfolgs der Operationen
    let emailSent = false
    let dbSaved = false

    // 2) E-Mail versenden (unabhängig von der DB-Speicherung)
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
          Nachname: ${familyName}
          E-Mail: ${email}
        `,
        html: `
          <h2>Neues Formular Submission</h2>
          <p><strong>Newsletter:</strong> ${newsletter ? 'Ja' : 'Nein'}</p>
          <p><strong>Beta Programm:</strong> ${betaProgram ? 'Ja' : 'Nein'}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Nachname:</strong> ${familyName}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
        `,
      }

      await transporter.sendMail(mailOptions)
      emailSent = true
      console.log('E-Mail erfolgreich gesendet.')
    }
    catch (emailError) {
      console.error('Fehler beim Senden der E-Mail:', emailError)
      // E-Mail senden ist fehlgeschlagen, aber wir fahren fort
    }

    // 3) Daten in Supabase speichern
    try {
      const { data, error } = await supabase
        .from('interested_user') // Tabellenname in Supabase
        .insert([
          {
            name,
            family_name: familyName,
            email,
            newsletter,
            beta_program: betaProgram,
          },
        ])

      if (error) {
        throw error
      }

      dbSaved = true
      console.log('Daten erfolgreich in der Datenbank gespeichert.')
    }
    catch (dbError) {
      console.error('Fehler beim Speichern in der Datenbank:', JSON.stringify(dbError, null, 2))
      if (dbError.message) {
        console.error('Fehlermeldung:', dbError.message)
      }
      if (dbError.details) {
        console.error('Details:', dbError.details)
      }
      // DB speichern ist fehlgeschlagen, aber wir fahren fort
    }

    // 4) Überprüfen, ob beide Operationen fehlgeschlagen sind
    if (!emailSent && !dbSaved) {
      return sendError(
        event,
        createError({ statusCode: 500, statusMessage: 'Ups!? Leider ist etwas schief gegangen. Bitte schreib uns stattdessen eine kurze Mail oder versuche es später erneut.' }),
      )
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
