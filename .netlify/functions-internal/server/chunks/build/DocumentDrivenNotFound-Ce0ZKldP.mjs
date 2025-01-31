import { defineComponent, h, useSSRContext } from 'vue';

const _sfc_main = defineComponent({
  name: "DocumentDrivenNotFound",
  render() {
    return h("div", "Document not found");
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.2.3_ioredis@5.4.2_magicast@0.3.5_nuxt@3.15.4_@parcel+watcher@2.5.1_rbptlerdqqjyqw7dm5paeonxa4/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=DocumentDrivenNotFound-Ce0ZKldP.mjs.map
