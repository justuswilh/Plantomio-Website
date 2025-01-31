import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {},
    showDetails: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (!_ctx.showDetails && _ctx.product.handle) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: `/produkte/${encodeURIComponent(_ctx.product.handle)}`,
          class: "product-link"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="product-card" data-v-64aff69a${_scopeId}><div class="product-images" data-v-64aff69a${_scopeId}><img src="https://placehold.co/600x400" alt="Platzhalterbild" data-v-64aff69a${_scopeId}></div><div class="product-details" data-v-64aff69a${_scopeId}><h2 data-v-64aff69a${_scopeId}>${ssrInterpolate(_ctx.product.title)}</h2>`);
              if (_ctx.product.subtitle) {
                _push2(`<p class="subtitle" data-v-64aff69a${_scopeId}>${ssrInterpolate(_ctx.product.subtitle)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="description" data-v-64aff69a${_scopeId}>${ssrInterpolate(_ctx.product.description)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "product-card" }, [
                  createVNode("div", { class: "product-images" }, [
                    createVNode("img", {
                      src: "https://placehold.co/600x400",
                      alt: "Platzhalterbild"
                    })
                  ]),
                  createVNode("div", { class: "product-details" }, [
                    createVNode("h2", null, toDisplayString(_ctx.product.title), 1),
                    _ctx.product.subtitle ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "subtitle"
                    }, toDisplayString(_ctx.product.subtitle), 1)) : createCommentVNode("", true),
                    createVNode("p", { class: "description" }, toDisplayString(_ctx.product.description), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64aff69a"]]);

export { ProductCard as P };
//# sourceMappingURL=ProductCard-BzScJKxl.mjs.map
