import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'fetch-event-stream';
import 'qs';
import '@iconify/vue';
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const _sfc_main = {
  name: "DatenschutzPage"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-1df5286c><h1 data-v-1df5286c>Datenschutzerkl\xE4rung</h1><h2 data-v-1df5286c>1. Verantwortliche Stelle</h2><p data-v-1df5286c>Die verantwortliche Stelle f\xFCr die Datenverarbeitung auf dieser Website ist:</p><p data-v-1df5286c><strong data-v-1df5286c>Plantomio UG</strong><br data-v-1df5286c> Melscher Str. 20<br data-v-1df5286c> 04299 Leipzig<br data-v-1df5286c> Deutschland<br data-v-1df5286c> E-Mail: team@plantomio.de<br data-v-1df5286c> Telefon: +49 157 87351403 </p><h2 data-v-1df5286c>2. Hosting bei Netlify</h2><p data-v-1df5286c>Unsere Website wird von Netlify gehostet, einem US-amerikanischen Unternehmen mit Sitz in 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.</p><p data-v-1df5286c>Netlify verarbeitet personenbezogene Daten auch in den USA und ist Teilnehmer des EU-US Data Privacy Frameworks. Weitere Informationen finden Sie hier: <a href="https://commission.europa.eu/document/fa09cba4-d7d7-4684-ae60-be03fcb0fddf_en" target="_blank" data-v-1df5286c>EU-Kommission - Datenschutzrahmen</a>.</p><p data-v-1df5286c>Netlify verwendet Standardvertragsklauseln gem\xE4\xDF Art. 46 DSGVO, um den Schutz Ihrer Daten sicherzustellen. Details dazu finden Sie hier: <a href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank" data-v-1df5286c>Netlify DPA</a>.</p><h2 data-v-1df5286c>3. Nutzung von Google Analytics</h2><p data-v-1df5286c>Wir verwenden Google Analytics, um das Nutzungsverhalten auf unserer Website zu analysieren und zu verbessern. Google Analytics speichert Cookies auf Ihrem Ger\xE4t, um Informationen \xFCber Ihre Nutzung der Website zu sammeln (z. B. besuchte Seiten, Verweildauer, Ger\xE4teinformationen).</p><p data-v-1df5286c>Die erfassten Daten werden anonymisiert und nicht mit anderen Daten zusammengef\xFChrt. Sie k\xF6nnen die Speicherung von Cookies durch eine entsprechende Einstellung in Ihrem Browser verhindern. Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" data-v-1df5286c>Datenschutzerkl\xE4rung von Google</a>.</p><h2 data-v-1df5286c>4. Newsletter und Kontaktformular</h2><p data-v-1df5286c>Wir bieten Ihnen die M\xF6glichkeit, sich \xFCber ein Kontaktformular f\xFCr unseren Newsletter anzumelden. Dabei erheben wir folgende Daten:</p><ul data-v-1df5286c><li data-v-1df5286c>Name</li><li data-v-1df5286c>Nachname</li><li data-v-1df5286c>E-Mail-Adresse</li></ul><p data-v-1df5286c>Mit dem Absenden des Formulars erkl\xE4ren Sie sich mit der Speicherung Ihrer Daten einverstanden. Ihre Daten werden ausschlie\xDFlich zur Versendung unseres Newsletters verwendet und auf unserem Server gespeichert. Sie k\xF6nnen den Newsletter jederzeit abbestellen, indem Sie uns kontaktieren oder den Abmeldelink in der E-Mail verwenden.</p><h2 data-v-1df5286c>5. Ihre Rechte</h2><p data-v-1df5286c>Sie haben jederzeit das Recht auf:</p><ul data-v-1df5286c><li data-v-1df5286c>Auskunft \xFCber die von uns gespeicherten Daten</li><li data-v-1df5286c>Berichtigung oder L\xF6schung Ihrer Daten</li><li data-v-1df5286c>Einschr\xE4nkung der Verarbeitung</li><li data-v-1df5286c>Widerspruch gegen die Verarbeitung</li><li data-v-1df5286c>Daten\xFCbertragbarkeit</li></ul><p data-v-1df5286c>Zur Aus\xFCbung Ihrer Rechte kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten.</p><h2 data-v-1df5286c>6. \xC4nderungen der Datenschutzerkl\xE4rung</h2><p data-v-1df5286c>Wir behalten uns vor, diese Datenschutzerkl\xE4rung bei Bedarf anzupassen. Bitte \xFCberpr\xFCfen Sie diese Seite regelm\xE4\xDFig, um \xFCber \xC4nderungen informiert zu bleiben.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/datenschutz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const datenschutz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1df5286c"]]);

export { datenschutz as default };
//# sourceMappingURL=datenschutz-CUFBmPfT.mjs.map
