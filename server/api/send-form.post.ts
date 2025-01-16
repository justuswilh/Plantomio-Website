// server/api/send-form.post.ts

import { defineEventHandler, readBody, sendError, createError } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { newsletter, betaProgram, name, nachname, email } = body

    // Grundlegende Validierung (optional, da bereits clientseitig validiert)
    if (!name || !nachname || !email) {
      return sendError(event, createError({ statusCode: 400, statusMessage: 'Name, Nachname und E-Mail sind erforderlich.' }))
    }

    // SMTP-Konfiguration aus Umgebungsvariablen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_PORT === '465', // true für Port 465, sonst false
      auth: {
        user: process.env.SMTP_USER_NO_REPLY,
        pass: process.env.SMTP_PASS_NO_REPLY,
      },
    })

    // E-Mail-Inhalt erstellen
    const mailOptions = {
      from: '"Plantomio Kontaktformular" <no-reply@plantomio.de>', // Absender
      to: 'justus@plantomio.de', // Empfänger
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

    // E-Mail senden
    await transporter.sendMail(mailOptions)

    // Erfolgsantwort senden
    return { message: 'Formular erfolgreich gesendet.' }
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Fehler beim Senden der E-Mail.' }))
  }
})
