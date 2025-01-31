import { useSSRContext, defineComponent, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { P as ProductCard } from './ProductCard-BzScJKxl.mjs';
import { u as useProducts } from './useProducts-CazszxWs.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { products, error, isLoading, fetchProducts } = useProducts();
    const ALLOWED_HANDLES = ["bundle"];
    const filteredProducts = computed(
      () => products.value.filter((product) => {
        var _a;
        return ((_a = product.collection) == null ? undefined : _a.handle) && ALLOWED_HANDLES.includes(product.collection.handle);
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b40fab3e>`);
      if (unref(isLoading)) {
        _push(`<div class="loading" data-v-b40fab3e> Lade Produkte... </div>`);
      } else if (unref(error)) {
        _push(`<div class="error" data-v-b40fab3e> Fehler beim Laden der Produkte: ${ssrInterpolate(unref(error).message)}</div>`);
      } else {
        _push(`<div class="product-grid" data-v-b40fab3e><!--[-->`);
        ssrRenderList(filteredProducts.value, (product) => {
          _push(ssrRenderComponent(ProductCard, {
            key: product.id,
            product,
            class: "content"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bundle/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b40fab3e"]]);

export { index as default };
//# sourceMappingURL=index-Cor3UpFI.mjs.map
