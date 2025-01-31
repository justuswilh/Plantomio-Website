import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:text-lg text-gray-300 bg-footer md:mt-12 pt-6" }, _attrs))}><div class="flex flex-col md:flex-row justify-center gap-4 md:gap-20 mb-4"><div class="flex grow"></div><div class="flex flex-col grow items-center"><div class="flex flex-col items-start w-60"><span class="mb-2 uppercase text-sm">Rechtliches</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/impressum",
    class: "mb-2 hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Impressum `);
      } else {
        return [
          createTextVNode(" Impressum ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "/datenschutz",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Datenschutz `);
      } else {
        return [
          createTextVNode(" Datenschutz ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col grow items-center"><div class="flex flex-col items-start w-60"><span class="mb-2 uppercase text-sm">Kontakt</span><a href="mailto:team@plantomio.de" class="mb-2 hover:underline">team@plantomio.de</a><a class="">+49 157 87351403</a></div></div><div class="flex grow"></div></div><p class="text-center"> \xA9 2025 Plantomio UG </p></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Footer-DTyGf3Hq.mjs.map
