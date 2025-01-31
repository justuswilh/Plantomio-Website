import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, z as useRoute, a as __nuxt_component_0$1, b as _sfc_main$d } from './server.mjs';
import { useSSRContext, defineComponent, computed, unref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './Footer-DTyGf3Hq.mjs';
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

const _imports_0 = "" + buildAssetsURL("logo_banner.DtdGAUfM.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_UIcon = _sfc_main$d;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 text-black" }, _attrs))} data-v-53873016><nav class="container mx-auto flex text-xl font-bold justify-between text-center items-center py-1 px-6" data-v-53873016><img${ssrRenderAttr("src", _imports_0)} alt="Plantomio Logo" class="h-20" data-v-53873016><ul class="flex items-center space-x-6" data-v-53873016><li data-v-53873016>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    "exact-active-class": "activePath",
    class: "hover px-3 py-2 rounded transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Startseite `);
      } else {
        return [
          createTextVNode(" Startseite ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-53873016>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/automatisierung",
    "exact-active-class": "activePath",
    class: "hover px-3 py-2 rounded transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Automatisierung `);
      } else {
        return [
          createTextVNode(" Automatisierung ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-53873016>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/produkte",
    "exact-active-class": "activePath",
    class: "hover px-3 py-2 rounded transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Produkte `);
      } else {
        return [
          createTextVNode(" Produkte ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-53873016>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/bundle",
    "exact-active-class": "activePath",
    class: "hover px-3 py-2 rounded transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Bundle `);
      } else {
        return [
          createTextVNode(" Bundle ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-53873016>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/plantomio",
    "exact-active-class": "activePath",
    class: "hover px-3 py-2 rounded transition-colors duration-300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Plantomio `);
      } else {
        return [
          createTextVNode(" Plantomio ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-53873016>`);
  _push(ssrRenderComponent(_component_UIcon, {
    name: "i-material-symbols:shopping-bag-outline",
    class: "size-8 hover px-12 py-2 rounded transition-colors duration-300"
  }, null, _parent));
  _push(`</li></ul></nav></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-53873016"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IndividualProdukdetail",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const currentContent = computed(() => {
      switch (route.path) {
        case "/produkte/smartplug":
          return "";
        default:
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(route).path === "/produkte/smartplug") {
        _push(`<div><p>${ssrInterpolate(currentContent.value)}</p></div>`);
      } else if (unref(route).path === "/products") {
        _push(`<div><h2>Produkte</h2><p>Hier findest du die Produkt\xFCbersicht.</p></div>`);
      } else {
        _push(`<div><p>${ssrInterpolate(currentContent.value)}</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndividualProdukdetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_IndividualProdukdetail = _sfc_main$1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-white min-h-screen" }, _attrs))} data-v-3408c375>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="flex flex-col grow max-w-screen text-black" data-v-3408c375>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_IndividualProdukdetail, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3408c375"]]);

export { shop as default };
//# sourceMappingURL=shop-DGIMW6Nw.mjs.map
