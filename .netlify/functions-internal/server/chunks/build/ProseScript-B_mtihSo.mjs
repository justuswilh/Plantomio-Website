import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseScript",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const isDev = false;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isDev)) {
        _push(`<div${ssrRenderAttrs(_attrs)}> Rendering the <code>script</code> element is dangerous and is disabled by default. Consider implementing your own <code>ProseScript</code> element to have control over script rendering. </div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5_rollup@4.32.1/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseScript-B_mtihSo.mjs.map
