<script>
export default {
  name: 'DatenschutzPage',
}
</script>

<template>
  <div class="container">
    <h1>Datenschutzerklärung</h1>

    <h2>1. Verantwortliche Stelle</h2>
    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
    <p>
      <strong>Plantomio UG</strong><br>
      Melscher Str. 20<br>
      04299 Leipzig<br>
      Deutschland<br>
      E-Mail: team@plantomio.de<br>
      Telefon: +49 157 87351403
    </p>

    <h2>2. Hosting bei Netlify</h2>
    <p>Unsere Website wird von Netlify gehostet, einem US-amerikanischen Unternehmen mit Sitz in 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.</p>
    <p>Netlify verarbeitet personenbezogene Daten auch in den USA und ist Teilnehmer des EU-US Data Privacy Frameworks. Weitere Informationen finden Sie hier: <a href="https://commission.europa.eu/document/fa09cba4-d7d7-4684-ae60-be03fcb0fddf_en" target="_blank">EU-Kommission - Datenschutzrahmen</a>.</p>
    <p>Netlify verwendet Standardvertragsklauseln gemäß Art. 46 DSGVO, um den Schutz Ihrer Daten sicherzustellen. Details dazu finden Sie hier: <a href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank">Netlify DPA</a>.</p>

    <h2>3. Nutzung von Google Analytics</h2>
    <p>Wir verwenden Google Analytics, um das Nutzungsverhalten auf unserer Website zu analysieren und zu verbessern. Google Analytics speichert Cookies auf Ihrem Gerät, um Informationen über Ihre Nutzung der Website zu sammeln (z. B. besuchte Seiten, Verweildauer, Geräteinformationen).</p>
    <p>Die erfassten Daten werden anonymisiert und nicht mit anderen Daten zusammengeführt. Sie können die Speicherung von Cookies durch eine entsprechende Einstellung in Ihrem Browser verhindern. Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy" target="_blank">Datenschutzerklärung von Google</a>.</p>

    <h2>4. Newsletter und Kontaktformular</h2>
    <p>Wir bieten Ihnen die Möglichkeit, sich über ein Kontaktformular für unseren Newsletter anzumelden. Dabei erheben wir folgende Daten:</p>
    <ul>
      <li>Name</li>
      <li>Nachname</li>
      <li>E-Mail-Adresse</li>
    </ul>
    <p>Mit dem Absenden des Formulars erklären Sie sich mit der Speicherung Ihrer Daten einverstanden. Ihre Daten werden ausschließlich zur Versendung unseres Newsletters verwendet und auf unserem Server gespeichert. Sie können den Newsletter jederzeit abbestellen, indem Sie uns kontaktieren oder den Abmeldelink in der E-Mail verwenden.</p>

    <h2>5. Ihre Rechte</h2>
    <p>Sie haben jederzeit das Recht auf:</p>
    <ul>
      <li>Auskunft über die von uns gespeicherten Daten</li>
      <li>Berichtigung oder Löschung Ihrer Daten</li>
      <li>Einschränkung der Verarbeitung</li>
      <li>Widerspruch gegen die Verarbeitung</li>
      <li>Datenübertragbarkeit</li>
    </ul>
    <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten.</p>

    <h2>6. Änderungen der Datenschutzerklärung</h2>
    <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Bitte überprüfen Sie diese Seite regelmäßig, um über Änderungen informiert zu bleiben.</p>
  </div>
</template>

  <style scoped>
  .body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
  }
  .container {
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 3px rgba(0, 0, 0, 0.1);
  }
  h1, h2 {
    color: #298407;
    padding: 10px 0;
  }
  a {
    color: #298407;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
