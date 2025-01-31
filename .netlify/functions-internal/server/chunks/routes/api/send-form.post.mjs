import process from 'node:process';
import { createClient } from '@supabase/supabase-js';
import { d as defineEventHandler, r as readBody, s as sendError, c as createError } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const sendForm_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { newsletter, betaProgram, name, familyName, email } = body;
    if (!name || !familyName || !email) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "Name, Nachname und E-Mail sind erforderlich." })
      );
    }
    if (!newsletter && !betaProgram) {
      return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "Mindestens eine Checkbox (Newsletter oder Beta Programm) muss aktiviert sein." })
      );
    }
    let emailSent = false;
    let dbSaved = false;
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number.parseInt(process.env.SMTP_PORT || "587", 10),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
      const mailOptions = {
        from: '"Plantomio Kontaktformular" <no-reply@plantomio.de>',
        to: "justus@plantomio.de",
        subject: "Neues Formular Submission",
        text: `
          Newsletter: ${newsletter ? "Ja" : "Nein"}
          Beta Programm: ${betaProgram ? "Ja" : "Nein"}
          Name: ${name}
          Nachname: ${familyName}
          E-Mail: ${email}
        `,
        html: `
          <h2>Neues Formular Submission</h2>
          <p><strong>Newsletter:</strong> ${newsletter ? "Ja" : "Nein"}</p>
          <p><strong>Beta Programm:</strong> ${betaProgram ? "Ja" : "Nein"}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Nachname:</strong> ${familyName}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
        `
      };
      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log("E-Mail erfolgreich gesendet.");
    } catch (emailError) {
      console.error("Fehler beim Senden der E-Mail:", emailError);
    }
    try {
      const { data, error } = await supabase.from("interested_user").insert([
        {
          name,
          family_name: familyName,
          email,
          newsletter,
          beta_program: betaProgram
        }
      ]);
      if (error) {
        throw error;
      }
      dbSaved = true;
      console.log("Daten erfolgreich in der Datenbank gespeichert.");
    } catch (dbError) {
      console.error("Fehler beim Speichern in der Datenbank:", JSON.stringify(dbError, null, 2));
      if (dbError.message) {
        console.error("Fehlermeldung:", dbError.message);
      }
      if (dbError.details) {
        console.error("Details:", dbError.details);
      }
    }
    if (!emailSent && !dbSaved) {
      return sendError(
        event,
        createError({ statusCode: 500, statusMessage: "Ups!? Leider ist etwas schief gegangen. Bitte schreib uns stattdessen eine kurze Mail oder versuche es sp\xE4ter erneut." })
      );
    }
    let message = "Vielen Dank f\xFCr dein Interesse!";
    if (newsletter && betaProgram) {
      message += " Wir werden dich umgehend kontaktieren, um eine Teilnahme am Beta Programm zu besprechen.";
    } else if (betaProgram) {
      message += " Wir werden dich umgehend kontaktieren, um eine Teilnahme am Beta Programm zu besprechen.";
    } else if (newsletter) {
      message = "Vielen Dank f\xFCr dein Interesse am Newsletter!";
    }
    return { message };
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Anfrage:", error);
    return sendError(event, createError({ statusCode: 500, statusMessage: "Fehler beim Verarbeiten der Anfrage." }));
  }
});

export { sendForm_post as default };
//# sourceMappingURL=send-form.post.mjs.map
