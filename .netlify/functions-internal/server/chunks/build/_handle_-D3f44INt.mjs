import { useSSRContext, defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode, Fragment, renderList, watch, ref } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useHead } from '@vueuse/head';
import { useRoute as useRoute$1 } from 'vue-router';
import { Primitive } from 'reka-ui';
import { _ as _export_sfc, c as _appConfig, s as useLocale, j as useAppConfig, v as _sfc_main$a, w as pickLinkProps, x as _sfc_main$b, b as _sfc_main$d, o as _sfc_main$c, y as get, z as useRoute, t as useRuntimeConfig } from './server.mjs';
import { tv } from 'tailwind-variants';
import { P as ProductCard } from './ProductCard-BzScJKxl.mjs';
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
import 'fetch-event-stream';
import 'qs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

var _a;
const theme = {
  "slots": {
    "root": "relative min-w-0",
    "list": "flex items-center gap-1.5",
    "item": "flex min-w-0",
    "link": "group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-[var(--ui-primary)]",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLabel": "truncate",
    "separator": "flex",
    "separatorIcon": "shrink-0 size-5 text-[var(--ui-text-muted)]"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-[var(--ui-primary)] font-semibold"
      },
      "false": {
        "link": "text-[var(--ui-text-muted)] font-medium"
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "disabled": false,
      "active": false,
      "to": true,
      "class": {
        "link": [
          "hover:text-[var(--ui-text)]",
          "transition-colors"
        ]
      }
    }
  ]
};
const appConfig = _appConfig;
const breadcrumb = tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? undefined : _a.breadcrumb) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    as: { default: "nav" },
    items: {},
    separatorIcon: {},
    labelKey: { default: "label" },
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { dir } = useLocale();
    const appConfig2 = useAppConfig();
    const separatorIcon = computed(() => props.separatorIcon || (dir.value === "rtl" ? appConfig2.ui.icons.chevronLeft : appConfig2.ui.icons.chevronRight));
    const ui = breadcrumb();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "aria-label": "breadcrumb",
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(`<ol class="${ssrRenderClass(unref(ui).list({ class: (_a3 = props.ui) == null ? undefined : _a3.list }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, index) => {
              var _a4, _b2;
              _push2(`<!--[--><li class="${ssrRenderClass(unref(ui).item({ class: (_a4 = props.ui) == null ? undefined : _a4.item }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$a, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }, _push3, _parent3, _scopeId2) => {
                  var _a5, _b3;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$b, mergeProps({ ref_for: true }, slotProps, {
                      as: "span",
                      "aria-current": active && index === _ctx.items.length - 1 ? "page" : undefined,
                      class: unref(ui).link({ class: [(_a5 = props.ui) == null ? undefined : _a5.link, item.class], active: index === _ctx.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                    }), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            var _a6;
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                              item,
                              active: index === _ctx.items.length - 1,
                              index
                            }, () => {
                              var _a7, _b4, _c;
                              if (item.icon) {
                                _push4(ssrRenderComponent(_sfc_main$d, {
                                  name: item.icon,
                                  class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? undefined : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                }, null, _parent4, _scopeId3));
                              } else if (item.avatar) {
                                _push4(ssrRenderComponent(_sfc_main$c, mergeProps({
                                  size: ((_b4 = props.ui) == null ? undefined : _b4.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? undefined : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                }), null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                            }, _push4, _parent4, _scopeId3);
                            if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
                              _push4(`<span class="${ssrRenderClass(unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? undefined : _a6.linkLabel }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                item,
                                active: index === _ctx.items.length - 1,
                                index
                              }, () => {
                                _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                              item,
                              active: index === _ctx.items.length - 1,
                              index
                            }, null, _push4, _parent4, _scopeId3);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, item.slot || "item", {
                              item,
                              index
                            }, () => {
                              var _a6;
                              return [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                  item,
                                  active: index === _ctx.items.length - 1,
                                  index
                                }, () => {
                                  var _a7, _b4, _c;
                                  return [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                      key: 0,
                                      name: item.icon,
                                      class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? undefined : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                      key: 1,
                                      size: ((_b4 = props.ui) == null ? undefined : _b4.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                      ref_for: true
                                    }, item.avatar, {
                                      class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? undefined : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                  ];
                                }),
                                unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? undefined : _a6.linkLabel })
                                }, [
                                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                    item,
                                    active: index === _ctx.items.length - 1,
                                    index
                                  }, () => [
                                    createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                  ])
                                ], 2)) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                  item,
                                  active: index === _ctx.items.length - 1,
                                  index
                                })
                              ];
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$b, mergeProps({ ref_for: true }, slotProps, {
                        as: "span",
                        "aria-current": active && index === _ctx.items.length - 1 ? "page" : undefined,
                        class: unref(ui).link({ class: [(_b3 = props.ui) == null ? undefined : _b3.link, item.class], active: index === _ctx.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index
                          }, () => {
                            var _a6;
                            return [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                item,
                                active: index === _ctx.items.length - 1,
                                index
                              }, () => {
                                var _a7, _b4, _c;
                                return [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                    key: 0,
                                    name: item.icon,
                                    class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? undefined : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                  }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                    key: 1,
                                    size: ((_b4 = props.ui) == null ? undefined : _b4.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                    ref_for: true
                                  }, item.avatar, {
                                    class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? undefined : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                ];
                              }),
                              unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? undefined : _a6.linkLabel })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                  item,
                                  active: index === _ctx.items.length - 1,
                                  index
                                }, () => [
                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                item,
                                active: index === _ctx.items.length - 1,
                                index
                              })
                            ];
                          })
                        ]),
                        _: 2
                      }, 1040, ["aria-current", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
              if (index < _ctx.items.length - 1) {
                _push2(`<li role="presentation" aria-hidden="true" class="${ssrRenderClass(unref(ui).separator({ class: (_b2 = props.ui) == null ? undefined : _b2.separator }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "separator", {}, () => {
                  var _a5;
                  _push2(ssrRenderComponent(_sfc_main$d, {
                    name: separatorIcon.value,
                    class: unref(ui).separatorIcon({ class: (_a5 = props.ui) == null ? undefined : _a5.separatorIcon })
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</li>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></ol>`);
          } else {
            return [
              createVNode("ol", {
                class: unref(ui).list({ class: (_b = props.ui) == null ? undefined : _b.list })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  var _a4, _b2;
                  return openBlock(), createBlock(Fragment, { key: index }, [
                    createVNode("li", {
                      class: unref(ui).item({ class: (_a4 = props.ui) == null ? undefined : _a4.item })
                    }, [
                      createVNode(_sfc_main$a, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
                        default: withCtx(({ active, ...slotProps }) => {
                          var _a5;
                          return [
                            createVNode(_sfc_main$b, mergeProps({ ref_for: true }, slotProps, {
                              as: "span",
                              "aria-current": active && index === _ctx.items.length - 1 ? "page" : undefined,
                              class: unref(ui).link({ class: [(_a5 = props.ui) == null ? undefined : _a5.link, item.class], active: index === _ctx.items.length - 1, disabled: !!item.disabled, to: !!item.to })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot || "item", {
                                  item,
                                  index
                                }, () => {
                                  var _a6;
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                                      item,
                                      active: index === _ctx.items.length - 1,
                                      index
                                    }, () => {
                                      var _a7, _b3, _c;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                          key: 0,
                                          name: item.icon,
                                          class: unref(ui).linkLeadingIcon({ class: (_a7 = props.ui) == null ? undefined : _a7.linkLeadingIcon, active: index === _ctx.items.length - 1 })
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                          key: 1,
                                          size: ((_b3 = props.ui) == null ? undefined : _b3.linkLeadingAvatarSize) || unref(ui).linkLeadingAvatarSize(),
                                          ref_for: true
                                        }, item.avatar, {
                                          class: unref(ui).linkLeadingAvatar({ class: (_c = props.ui) == null ? undefined : _c.linkLeadingAvatar, active: index === _ctx.items.length - 1 })
                                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: unref(ui).linkLabel({ class: (_a6 = props.ui) == null ? undefined : _a6.linkLabel })
                                    }, [
                                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                                        item,
                                        active: index === _ctx.items.length - 1,
                                        index
                                      }, () => [
                                        createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                      ])
                                    ], 2)) : createCommentVNode("", true),
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                                      item,
                                      active: index === _ctx.items.length - 1,
                                      index
                                    })
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["aria-current", "class"])
                          ];
                        }),
                        _: 2
                      }, 1040)
                    ], 2),
                    index < _ctx.items.length - 1 ? (openBlock(), createBlock("li", {
                      key: 0,
                      role: "presentation",
                      "aria-hidden": "true",
                      class: unref(ui).separator({ class: (_b2 = props.ui) == null ? undefined : _b2.separator })
                    }, [
                      renderSlot(_ctx.$slots, "separator", {}, () => {
                        var _a5;
                        return [
                          createVNode(_sfc_main$d, {
                            name: separatorIcon.value,
                            class: unref(ui).separatorIcon({ class: (_a5 = props.ui) == null ? undefined : _a5.separatorIcon })
                          }, null, 8, ["name", "class"])
                        ];
                      })
                    ], 2)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const items = computed(() => {
      switch (route.path) {
        case "/produkte/plantcare-bundle":
          return [
            {
              label: "Bundle",
              to: "/bundle"
            },
            {
              label: props.product.title
            }
          ];
        default:
          return [
            {
              label: "Produkte",
              to: "/produkte"
            },
            {
              label: props.product.title
            }
          ];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBreadcrumb = _sfc_main$3;
      _push(ssrRenderComponent(_component_UBreadcrumb, mergeProps({ items: items.value }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6f9b9e96"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductDetail",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-detail" }, _attrs))} data-v-a06ee2c4><div class="images" data-v-a06ee2c4><img src="https://placehold.co/600x400" alt="Platzhalterbild" data-v-a06ee2c4></div><div class="details" data-v-a06ee2c4><h1 data-v-a06ee2c4>${ssrInterpolate(_ctx.product.title)}</h1>`);
      if (_ctx.product.subtitle) {
        _push(`<p class="subtitle" data-v-a06ee2c4>${ssrInterpolate(_ctx.product.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="description" data-v-a06ee2c4>${ssrInterpolate(_ctx.product.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const ProductDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a06ee2c4"]]);
function useProduct(productHandle) {
  const product = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const fetchProduct = async () => {
    if (!productHandle) {
      error.value = new Error("Kein Produkt-Handle angegeben.");
      return;
    }
    isLoading.value = true;
    try {
      const config = useRuntimeConfig();
      console.log("Medusa API URL:", config.public.medusaApiUrl);
      console.log("Medusa Publishable Key:", config.public.medusaPublishableKey);
      console.log("Suchparameter (Handle):", productHandle);
      const response = await $fetch(`${config.public.medusaApiUrl}/store/products`, {
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey
        },
        params: { handle: productHandle },
        // Verwenden Sie 'handle' als Suchparameter
        credentials: "include"
      });
      console.log("API Response:", response);
      if (!response || !Array.isArray(response.products)) {
        throw new Error('Ung\xFCltige API-Antwort: "products" nicht gefunden oder kein Array.');
      }
      console.log("Gefundene Produkte:", response.products);
      const matchedProduct = response.products.find(
        (p) => p.handle && p.handle.toLowerCase() === productHandle.toLowerCase()
      );
      if (matchedProduct) {
        product.value = matchedProduct;
        console.log("Gefundenes Produkt:", matchedProduct);
      } else {
        product.value = null;
        console.warn(`Kein Produkt mit dem Handle "${productHandle}" gefunden.`);
      }
    } catch (err) {
      error.value = err;
      console.error("Fehler beim Laden des Produkts:", err);
    } finally {
      isLoading.value = false;
    }
  };
  return { product, error, isLoading, fetchProduct };
}
function useRelatedProducts(currentProductId) {
  const relatedProducts = ref([]);
  const error = ref(null);
  const isLoading = ref(false);
  const fetchRelatedProducts = async (tags) => {
    if (!tags.length)
      return;
    isLoading.value = true;
    try {
      const config = useRuntimeConfig();
      const response = await $fetch(`${config.public.medusaApiUrl}/store/products`, {
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey
        },
        params: { tags: tags.join(",") },
        // Passen Sie die Parameter entsprechend Ihrer API an
        credentials: "include"
      });
      relatedProducts.value = response.products.filter(
        (p) => p.id !== currentProductId && p.tags.some((tag) => tags.includes(tag))
      );
    } catch (err) {
      error.value = err;
      console.error("Fehler beim Laden der verwandten Produkte:", err);
    } finally {
      isLoading.value = false;
    }
  };
  return {
    relatedProducts,
    error,
    isLoading,
    fetchRelatedProducts
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[handle]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const productHandle = route.params.handle;
    console.log("Route params:", route.params);
    const { product, error, isLoading, fetchProduct } = useProduct(productHandle);
    const { relatedProducts, error: relatedError, isLoading: relatedLoading, fetchRelatedProducts } = useRelatedProducts();
    watch(product, (newProduct) => {
      var _a2;
      console.log("New product:", newProduct);
      if (newProduct) {
        fetchRelatedProducts(newProduct.tags);
        useHead({
          title: newProduct.title,
          meta: [
            {
              name: "description",
              content: newProduct.description
            },
            {
              property: "og:title",
              content: newProduct.title
            },
            {
              property: "og:description",
              content: newProduct.description
            },
            {
              property: "og:image",
              content: ((_a2 = newProduct.images[0]) == null ? undefined : _a2.url) || ""
            }
          ]
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7ce9e19f>`);
      if (unref(isLoading)) {
        _push(`<div class="loading" data-v-7ce9e19f> Lade Produkt... </div>`);
      } else if (unref(error)) {
        _push(`<div class="error" data-v-7ce9e19f> Fehler beim Laden des Produkts: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (unref(product)) {
        _push(`<div class="product-detail" data-v-7ce9e19f>`);
        _push(ssrRenderComponent(Breadcrumb, { product: unref(product) }, null, _parent));
        _push(ssrRenderComponent(ProductDetail, { product: unref(product) }, null, _parent));
        if (unref(relatedProducts).length) {
          _push(`<div class="related-products" data-v-7ce9e19f><h3 data-v-7ce9e19f>\xC4hnliche Produkte</h3><!--[-->`);
          ssrRenderList(unref(relatedProducts), (relatedProduct) => {
            _push(ssrRenderComponent(ProductCard, {
              key: relatedProduct.id,
              product: relatedProduct,
              "show-details": false
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="not-found" data-v-7ce9e19f> Produkt nicht gefunden. </div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/produkte/[handle].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _handle_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ce9e19f"]]);

export { _handle_ as default };
//# sourceMappingURL=_handle_-D3f44INt.mjs.map
