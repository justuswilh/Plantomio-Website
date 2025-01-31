import { d as defineEventHandler, r as readBody, s as sendError, c as createError } from '../../nitro/nitro.mjs';
import dns from 'node:dns/promises';
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

const validateEmail_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email } = body;
    if (!email) {
      return sendError(event, createError({ statusCode: 400, statusMessage: "E-Mail-Adresse ist erforderlich." }));
    }
    const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return sendError(event, createError({ statusCode: 400, statusMessage: "Ung\xFCltiges E-Mail-Format." }));
    }
    const domain = email.split("@")[1];
    try {
      const mxRecords = await dns.resolveMx(domain);
      if (mxRecords && mxRecords.length > 0) {
        return { message: "E-Mail-Domain ist g\xFCltig." };
      } else {
        return sendError(event, createError({ statusCode: 400, statusMessage: "Die E-Mail-Domain kann keine E-Mails empfangen." }));
      }
    } catch (error) {
      console.error("Fehler beim Aufl\xF6sen der MX-Records:", error);
      return sendError(event, createError({ statusCode: 400, statusMessage: "Die E-Mail-Domain kann keine E-Mails empfangen." }));
    }
  } catch (error) {
    console.error("Ein unerwarteter Fehler ist aufgetreten:", error);
    return sendError(event, createError({ statusCode: 500, statusMessage: "Interner Serverfehler." }));
  }
});

export { validateEmail_post as default };
//# sourceMappingURL=validate-email.post.mjs.map
