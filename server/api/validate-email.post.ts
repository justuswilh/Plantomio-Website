// server/api/validate-email.post.ts

import { defineEventHandler, readBody, sendError } from 'h3'
import dns from 'dns/promises'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email } = body

    if (!email) {
      return sendError(event, createError({ statusCode: 400, statusMessage: 'E-Mail-Adresse ist erforderlich.' }))
    }

    // Überprüfe das Format der E-Mail-Adresse
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return sendError(event, createError({ statusCode: 400, statusMessage: 'Ungültiges E-Mail-Format.' }))
    }

    // Extrahiere die Domain aus der E-Mail-Adresse
    const domain = email.split('@')[1]

    // Überprüfe die MX-Records der Domain
    try {
      const mxRecords = await dns.resolveMx(domain)
      if (mxRecords && mxRecords.length > 0) {
        return { message: 'E-Mail-Domain ist gültig.' }
      } else {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Die E-Mail-Domain kann keine E-Mails empfangen.' }))
      }
    } catch (error) {
      console.error('Fehler beim Auflösen der MX-Records:', error)
      return sendError(event, createError({ statusCode: 400, statusMessage: 'Die E-Mail-Domain kann keine E-Mails empfangen.' }))
    }
  } catch (error) {
    console.error('Ein unerwarteter Fehler ist aufgetreten:', error)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Interner Serverfehler.' }))
  }
})
