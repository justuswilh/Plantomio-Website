import { useSSRContext, defineComponent, mergeModels, useSlots, useModel, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, createVNode, createCommentVNode, renderList, ref, isRef, useId, inject, provide, readonly, resolveDynamicComponent, reactive, watch, shallowRef, watchEffect, getCurrentScope } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { useForwardProps, StepperRoot, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator, StepperTitle, StepperDescription, Primitive, Label, CheckboxRoot, CheckboxIndicator } from 'reka-ui';
import { _ as _export_sfc, c as _appConfig, r as reactivePick, b as _sfc_main$d, f as formBusInjectionKey, d as formInputsInjectionKey, e as formLoadingInjectionKey, g as formOptionsInjectionKey, i as inputIdInjectionKey, h as formFieldInjectionKey, j as useAppConfig, k as useFormField, l as useButtonGroup, m as useComponentIcons, o as _sfc_main$c, s as useLocale, q as _sfc_main$9$1, a as __nuxt_component_0$1, n as noop, p as looseToNumber } from './server.mjs';
import { tv } from 'tailwind-variants';
import * as v from 'valibot';
import useEmblaCarousel from 'embla-carousel-vue';
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
import '@iconify/utils/lib/css/icon';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e, _f;
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = {};
  }
  const {
    lazy = false,
    evaluating = undefined,
    shallow = true,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}
const events = /* @__PURE__ */ new Map();
function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    var _a2;
    const listeners = events.get(key) || /* @__PURE__ */ new Set();
    listeners.add(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a2 = scope == null ? undefined : scope.cleanups) == null ? undefined : _a2.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    listeners.delete(listener);
    if (!listeners.size)
      reset();
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a2;
    (_a2 = events.get(key)) == null ? undefined : _a2.forEach((v2) => v2(event, payload));
  }
  return { on, once, off, emit, reset };
}
const _imports_0 = publicAssetsURL("/Logo.svg");
const _imports_1 = publicAssetsURL("/plantmonitor+plug.png");
const _imports_2 = publicAssetsURL("/showcase/1.png");
const _imports_3 = publicAssetsURL("/showcase/2.png");
const _imports_4 = publicAssetsURL("/showcase/3.png");
const _imports_5 = publicAssetsURL("/climatemonitor+plug.png");
const _imports_6 = publicAssetsURL("/benefit/1.svg");
const _imports_7 = publicAssetsURL("/benefit/2.svg");
const _imports_8 = publicAssetsURL("/benefit/3.svg");
const _imports_9 = publicAssetsURL("/benefit/4.svg");
const _imports_10 = publicAssetsURL("/benefit/5.svg");
const _imports_11 = publicAssetsURL("/benefit/6.svg");
const _imports_12 = publicAssetsURL("/benefit/7.svg");
const _imports_13 = publicAssetsURL("/benefit/8.svg");
const theme$5 = {
  "slots": {
    "root": "flex gap-4",
    "header": "flex",
    "item": "group text-center relative w-full",
    "container": "relative",
    "trigger": "rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-[var(--ui-bg)] group-data-[state=active]:text-[var(--ui-bg)] text-[var(--ui-text-muted)] bg-[var(--ui-bg-elevated)] focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full",
    "icon": "shrink-0",
    "separator": "absolute rounded-full group-data-[disabled]:opacity-75 bg-[var(--ui-border-accented)]",
    "wrapper": "",
    "title": "font-medium text-[var(--ui-text)]",
    "description": "text-[var(--ui-text-muted)] text-wrap",
    "content": "size-full"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "container": "flex justify-center",
        "separator": "top-[calc(50%-2px)] h-0.5",
        "wrapper": "mt-1"
      },
      "vertical": {
        "header": "flex-col gap-4",
        "item": "flex text-start",
        "separator": "start-[calc(50%-1px)] -bottom-[10px] w-0.5"
      }
    },
    "size": {
      "xs": {
        "trigger": "size-6 text-xs",
        "icon": "size-3",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-1.5"
      },
      "sm": {
        "trigger": "size-8 text-sm",
        "icon": "size-4",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-2"
      },
      "md": {
        "trigger": "size-10 text-base",
        "icon": "size-5",
        "title": "text-sm",
        "description": "text-sm",
        "wrapper": "mt-2.5"
      },
      "lg": {
        "trigger": "size-12 text-lg",
        "icon": "size-6",
        "title": "text-base",
        "description": "text-base",
        "wrapper": "mt-3"
      },
      "xl": {
        "trigger": "size-14 text-xl",
        "icon": "size-7",
        "title": "text-lg",
        "description": "text-lg",
        "wrapper": "mt-3.5"
      }
    },
    "color": {
      "primary": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-primary)] group-data-[state=active]:bg-[var(--ui-primary)] focus-visible:outline-[var(--ui-primary)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-primary)]"
      },
      "secondary": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-secondary)] group-data-[state=active]:bg-[var(--ui-secondary)] focus-visible:outline-[var(--ui-secondary)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-secondary)]"
      },
      "success": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-success)] group-data-[state=active]:bg-[var(--ui-success)] focus-visible:outline-[var(--ui-success)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-success)]"
      },
      "info": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-info)] group-data-[state=active]:bg-[var(--ui-info)] focus-visible:outline-[var(--ui-info)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-info)]"
      },
      "warning": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-warning)] group-data-[state=active]:bg-[var(--ui-warning)] focus-visible:outline-[var(--ui-warning)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-warning)]"
      },
      "error": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-error)] group-data-[state=active]:bg-[var(--ui-error)] focus-visible:outline-[var(--ui-error)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-error)]"
      },
      "neutral": {
        "trigger": "group-data-[state=completed]:bg-[var(--ui-bg-inverted)] group-data-[state=active]:bg-[var(--ui-bg-inverted)] focus-visible:outline-[var(--ui-border-inverted)]",
        "separator": "group-data-[state=completed]:bg-[var(--ui-bg-inverted)]"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "separator": "start-[calc(50%+16px)] end-[calc(-50%+16px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "separator": "start-[calc(50%+20px)] end-[calc(-50%+20px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "separator": "start-[calc(50%+28px)] end-[calc(-50%+28px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "separator": "start-[calc(50%+32px)] end-[calc(-50%+32px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "separator": "start-[calc(50%+36px)] end-[calc(-50%+36px)]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "separator": "top-[30px]",
        "item": "gap-1.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "separator": "top-[38px]",
        "item": "gap-2"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "separator": "top-[46px]",
        "item": "gap-2.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "separator": "top-[54px]",
        "item": "gap-3"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "separator": "top-[62px]",
        "item": "gap-3.5"
      }
    }
  ],
  "defaultVariants": {
    "orientation": "horizontal",
    "size": "md",
    "color": "primary"
  }
};
const appConfig$5 = _appConfig;
const stepper = tv({ extend: tv(theme$5), ...((_a = appConfig$5.ui) == null ? undefined : _a.stepper) || {} });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Stepper",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    items: {},
    size: {},
    color: {},
    orientation: {},
    defaultValue: {},
    disabled: { type: Boolean },
    ui: {},
    class: {},
    linear: { type: Boolean, default: true }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["next", "prev"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const rootProps = useForwardProps(reactivePick(props, "as", "orientation", "linear"));
    const ui = computed(() => stepper({
      orientation: props.orientation,
      size: props.size,
      color: props.color
    }));
    const currentStepIndex = computed({
      get() {
        const value = modelValue.value ?? props.defaultValue;
        return (typeof value === "string" ? props.items.findIndex((item) => item.value === value) : value) ?? 0;
      },
      set(value) {
        var _a2, _b2;
        modelValue.value = ((_b2 = (_a2 = props.items) == null ? undefined : _a2[value]) == null ? undefined : _b2.value) ?? value;
      }
    });
    const currentStep = computed(() => {
      var _a2;
      return (_a2 = props.items) == null ? undefined : _a2[currentStepIndex.value];
    });
    const hasNext = computed(() => {
      var _a2;
      return currentStepIndex.value < ((_a2 = props.items) == null ? undefined : _a2.length) - 1;
    });
    const hasPrev = computed(() => currentStepIndex.value > 0);
    __expose({
      next() {
        if (hasNext.value) {
          currentStepIndex.value += 1;
          emits("next", currentStep.value);
        }
      },
      prev() {
        if (hasPrev.value) {
          currentStepIndex.value -= 1;
          emits("prev", currentStep.value);
        }
      },
      hasNext,
      hasPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(StepperRoot), mergeProps(unref(rootProps), {
        modelValue: currentStepIndex.value,
        "onUpdate:modelValue": ($event) => currentStepIndex.value = $event,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? undefined : _a3.header }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, count) => {
              var _a4;
              _push2(ssrRenderComponent(unref(StepperItem), {
                key: item.value ?? count,
                step: count,
                disabled: item.disabled || props.disabled,
                class: ui.value.item({ class: (_a4 = props.ui) == null ? undefined : _a4.item })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a5, _b3, _c3, _d3, _e3, _f3, _g2, _h2, _i2, _j2, _k2, _l2;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass(ui.value.container({ class: (_a5 = props.ui) == null ? undefined : _a5.container }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTrigger), {
                      class: ui.value.trigger({ class: (_b3 = props.ui) == null ? undefined : _b3.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b4;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(StepperIndicator), {
                            class: ui.value.indicator({ class: (_a6 = props.ui) == null ? undefined : _a6.indicator })
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "indicator", { item }, () => {
                                  var _a7;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$d, {
                                      name: item.icon,
                                      class: ui.value.icon({ class: (_a7 = props.ui) == null ? undefined : _a7.indicator })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!--[-->${ssrInterpolate(count + 1)}<!--]-->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.icon({ class: (_a7 = props.ui) == null ? undefined : _a7.indicator })
                                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(count + 1), 1)
                                      ], 64))
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(StepperIndicator), {
                              class: ui.value.indicator({ class: (_b4 = props.ui) == null ? undefined : _b4.indicator })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                  var _a7;
                                  return [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                      key: 0,
                                      name: item.icon,
                                      class: ui.value.icon({ class: (_a7 = props.ui) == null ? undefined : _a7.indicator })
                                    }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createTextVNode(toDisplayString(count + 1), 1)
                                    ], 64))
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (count < _ctx.items.length - 1) {
                      _push3(ssrRenderComponent(unref(StepperSeparator), {
                        class: ui.value.separator({ class: (_c3 = props.ui) == null ? undefined : _c3.separator })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="${ssrRenderClass(ui.value.wrapper({ class: (_d3 = props.ui) == null ? undefined : _d3.wrapper }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTitle), {
                      class: ui.value.title({ class: (_e3 = props.ui) == null ? undefined : _e3.title })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "title", { item: currentStep.value }, () => {
                            _push4(`${ssrInterpolate(item.title)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", { item: currentStep.value }, () => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(StepperDescription), {
                      class: ui.value.description({ class: (_f3 = props.ui) == null ? undefined : _f3.description })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "description", { item: currentStep.value }, () => {
                            _push4(`${ssrInterpolate(item.description)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "description", { item: currentStep.value }, () => [
                              createTextVNode(toDisplayString(item.description), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ui.value.container({ class: (_g2 = props.ui) == null ? undefined : _g2.container })
                      }, [
                        createVNode(unref(StepperTrigger), {
                          class: ui.value.trigger({ class: (_h2 = props.ui) == null ? undefined : _h2.trigger })
                        }, {
                          default: withCtx(() => {
                            var _a6;
                            return [
                              createVNode(unref(StepperIndicator), {
                                class: ui.value.indicator({ class: (_a6 = props.ui) == null ? undefined : _a6.indicator })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.icon({ class: (_a7 = props.ui) == null ? undefined : _a7.indicator })
                                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(count + 1), 1)
                                      ], 64))
                                    ];
                                  })
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]),
                        count < _ctx.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                          key: 0,
                          class: ui.value.separator({ class: (_i2 = props.ui) == null ? undefined : _i2.separator })
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ], 2),
                      createVNode("div", {
                        class: ui.value.wrapper({ class: (_j2 = props.ui) == null ? undefined : _j2.wrapper })
                      }, [
                        createVNode(unref(StepperTitle), {
                          class: ui.value.title({ class: (_k2 = props.ui) == null ? undefined : _k2.title })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "title", { item: currentStep.value }, () => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(unref(StepperDescription), {
                          class: ui.value.description({ class: (_l2 = props.ui) == null ? undefined : _l2.description })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "description", { item: currentStep.value }, () => [
                              createTextVNode(toDisplayString(item.description), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ], 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (((_b2 = currentStep.value) == null ? undefined : _b2.content) || !!slots.content || ((_c2 = currentStep.value) == null ? undefined : _c2.slot) && !!slots[currentStep.value.slot] || ((_d2 = currentStep.value) == null ? undefined : _d2.value) && !!slots[currentStep.value.value]) {
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: (_e2 = props.ui) == null ? undefined : _e2.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, !!slots[((_f2 = currentStep.value) == null ? undefined : _f2.slot) ?? currentStep.value.value] ? currentStep.value.slot ?? currentStep.value.value : "content", { item: currentStep.value }, () => {
                var _a4;
                _push2(`${ssrInterpolate((_a4 = currentStep.value) == null ? undefined : _a4.content)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.header({ class: (_g = props.ui) == null ? undefined : _g.header })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, count) => {
                  var _a4;
                  return openBlock(), createBlock(unref(StepperItem), {
                    key: item.value ?? count,
                    step: count,
                    disabled: item.disabled || props.disabled,
                    class: ui.value.item({ class: (_a4 = props.ui) == null ? undefined : _a4.item })
                  }, {
                    default: withCtx(() => {
                      var _a5, _b3, _c3, _d3, _e3, _f3;
                      return [
                        createVNode("div", {
                          class: ui.value.container({ class: (_a5 = props.ui) == null ? undefined : _a5.container })
                        }, [
                          createVNode(unref(StepperTrigger), {
                            class: ui.value.trigger({ class: (_b3 = props.ui) == null ? undefined : _b3.trigger })
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(unref(StepperIndicator), {
                                  class: ui.value.indicator({ class: (_a6 = props.ui) == null ? undefined : _a6.indicator })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                      var _a7;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                          key: 0,
                                          name: item.icon,
                                          class: ui.value.icon({ class: (_a7 = props.ui) == null ? undefined : _a7.indicator })
                                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(count + 1), 1)
                                        ], 64))
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1032, ["class"]),
                          count < _ctx.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                            key: 0,
                            class: ui.value.separator({ class: (_c3 = props.ui) == null ? undefined : _c3.separator })
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ], 2),
                        createVNode("div", {
                          class: ui.value.wrapper({ class: (_d3 = props.ui) == null ? undefined : _d3.wrapper })
                        }, [
                          createVNode(unref(StepperTitle), {
                            class: ui.value.title({ class: (_e3 = props.ui) == null ? undefined : _e3.title })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", { item: currentStep.value }, () => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(unref(StepperDescription), {
                            class: ui.value.description({ class: (_f3 = props.ui) == null ? undefined : _f3.description })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", { item: currentStep.value }, () => [
                                createTextVNode(toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ], 2)
                      ];
                    }),
                    _: 2
                  }, 1032, ["step", "disabled", "class"]);
                }), 128))
              ], 2),
              ((_h = currentStep.value) == null ? undefined : _h.content) || !!slots.content || ((_i = currentStep.value) == null ? undefined : _i.slot) && !!slots[currentStep.value.slot] || ((_j = currentStep.value) == null ? undefined : _j.value) && !!slots[currentStep.value.value] ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.content({ class: (_k = props.ui) == null ? undefined : _k.description })
              }, [
                renderSlot(_ctx.$slots, !!slots[((_l = currentStep.value) == null ? undefined : _l.slot) ?? currentStep.value.value] ? currentStep.value.slot ?? currentStep.value.value : "content", { item: currentStep.value }, () => {
                  var _a4;
                  return [
                    createTextVNode(toDisplayString((_a4 = currentStep.value) == null ? undefined : _a4.content), 1)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : undefined;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        title: "Interne Entwicklung",
        description: "Erfolgreich abgeschlossen",
        icon: "i-lucide-house"
      },
      {
        title: "Closed Beta",
        description: "Beta Testphase mit ausgew\xE4hlten Nutzern",
        icon: "i-material-symbols:lock-outline"
      },
      {
        title: "Open Beta",
        description: "Beta Testphase offen f\xFCr alle",
        icon: "i-material-symbols:lock-open-right-outline"
      },
      {
        title: "Release",
        description: "Offizielle Ver\xF6ffentlichung",
        icon: "i-material-symbols:package-2-outline"
      }
    ]);
    const active = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UStepper = _sfc_main$9;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_UStepper, {
        modelValue: unref(active),
        "onUpdate:modelValue": ($event) => isRef(active) ? active.value = $event : null,
        items: unref(items),
        size: "lg",
        class: "w-full display"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UStepper, {
        modelValue: unref(active),
        "onUpdate:modelValue": ($event) => isRef(active) ? active.value = $event : null,
        items: unref(items),
        orientation: "vertical",
        class: "w-full display2"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Progress.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-70f18fd5"]]);
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== undefined;
}
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isZodSchema(schema) {
  return schema.parse !== undefined;
}
function isJoiSchema(schema) {
  return schema.validateAsync !== undefined && schema.id !== undefined;
}
function isJoiError(error) {
  return error.isJoi === true;
}
function isValibotSchema(schema) {
  return "_run" in schema || typeof schema === "function" && "schema" in schema;
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandarSchema(state, schema) {
  var _a2;
  const result = await schema["~standard"].validate({
    value: state
  });
  if (result.issues) {
    return {
      errors: ((_a2 = result.issues) == null ? undefined : _a2.map((issue) => {
        var _a3;
        return {
          name: ((_a3 = issue.path) == null ? undefined : _a3.map((item) => typeof item === "object" ? item.key : item).join(".")) || "",
          message: issue.message
        };
      })) || [],
      result: null
    };
  }
  return {
    errors: null,
    result: result.value
  };
}
async function validateYupSchema(state, schema) {
  try {
    const result = await schema.validate(state, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isYupError(error)) {
      const errors = error.inner.map((issue) => ({
        name: issue.path ?? "",
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
async function validateSuperstructSchema(state, schema) {
  const [err, result] = schema.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      name: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
async function validateZodSchema(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    const errors = result.error.issues.map((issue) => ({
      name: issue.path.join("."),
      message: issue.message
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    result: result.data,
    errors: null
  };
}
async function validateJoiSchema(state, schema) {
  try {
    const result = await schema.validateAsync(state, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isJoiError(error)) {
      const errors = error.details.map((issue) => ({
        name: issue.path.join("."),
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
async function validateValibotSchema(state, schema) {
  const result = await ("_run" in schema ? schema._run({ typed: false, value: state }, {}) : schema(state));
  if (!result.issues || result.issues.length === 0) {
    const output = "output" in result ? result.output : "value" in result ? result.value : null;
    return {
      errors: null,
      result: output
    };
  }
  const errors = result.issues.map((issue) => {
    var _a2;
    return {
      name: ((_a2 = issue.path) == null ? undefined : _a2.map((item) => item.key).join(".")) || "",
      message: issue.message
    };
  });
  return {
    errors,
    result: null
  };
}
function parseSchema(state, schema) {
  if (isZodSchema(schema)) {
    return validateZodSchema(state, schema);
  } else if (isJoiSchema(schema)) {
    return validateJoiSchema(state, schema);
  } else if (isValibotSchema(schema)) {
    return validateValibotSchema(state, schema);
  } else if (isYupSchema(schema)) {
    return validateYupSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else if (isStandardSchema(schema)) {
    return validateStandarSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
class FormValidationException extends Error {
  constructor(formId, errors, childErrors) {
    super("Form validation exception");
    __publicField(this, "formId");
    __publicField(this, "errors");
    __publicField(this, "childrens");
    this.formId = formId;
    this.errors = errors;
    this.childrens = childErrors;
    Object.setPrototypeOf(this, FormValidationException.prototype);
  }
}
const theme$4 = {
  "base": ""
};
const appConfig$4 = _appConfig;
const form = tv({ extend: tv(theme$4), ...((_b = appConfig$4.ui) == null ? undefined : _b.form) || {} });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    id: {},
    schema: {},
    state: {},
    validate: {},
    validateOn: { default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean },
    validateOnInputDelay: { default: 300 },
    class: {},
    onSubmit: {}
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const formId = props.id ?? useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = inject(
      formBusInjectionKey,
      undefined
    );
    provide(formBusInjectionKey, bus);
    const nestedForms = ref(/* @__PURE__ */ new Map());
    const errors = ref([]);
    provide("form-errors", errors);
    const inputs = ref({});
    provide(formInputsInjectionKey, inputs);
    function resolveErrorIds(errs) {
      return errs.map((err) => {
        var _a2;
        return {
          ...err,
          id: (_a2 = inputs.value[err.name]) == null ? undefined : _a2.id
        };
      });
    }
    const parsedValue = ref(null);
    async function getErrors() {
      let errs = props.validate ? await props.validate(props.state) ?? [] : [];
      if (props.schema) {
        const { errors: errors2, result } = await parseSchema(props.state, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          parsedValue.value = result;
        }
      }
      return resolveErrorIds(errs);
    }
    async function _validate(opts = { silent: false, nested: true }) {
      const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name;
      const nestedValidatePromises = !names && opts.nested ? Array.from(nestedForms.value.values()).map(
        ({ validate }) => validate().then(() => undefined).catch((error) => {
          if (!(error instanceof FormValidationException)) {
            throw error;
          }
          return error;
        })
      ) : [];
      if (names) {
        const otherErrors = errors.value.filter((error) => !names.some((name) => {
          var _a2, _b2;
          const pattern = (_b2 = (_a2 = inputs.value) == null ? undefined : _a2[name]) == null ? undefined : _b2.pattern;
          return name === error.name || pattern && error.name.match(pattern);
        }));
        const pathErrors = (await getErrors()).filter((error) => names.some((name) => {
          var _a2, _b2;
          const pattern = (_b2 = (_a2 = inputs.value) == null ? undefined : _a2[name]) == null ? undefined : _b2.pattern;
          return name === error.name || pattern && error.name.match(pattern);
        }));
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      const childErrors = (await Promise.all(nestedValidatePromises)).filter((val) => val);
      if (errors.value.length + childErrors.length > 0) {
        if (opts.silent) return false;
        throw new FormValidationException(formId, errors.value, childErrors);
      }
      return props.state;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      var _a2;
      loading.value = true;
      const event = payload;
      try {
        await _validate({ nested: true });
        event.data = props.schema ? parsedValue.value : props.state;
        await ((_a2 = props.onSubmit) == null ? void 0 : _a2.call(props, event));
      } catch (error) {
        if (!(error instanceof FormValidationException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: error.errors,
          childrens: error.childrens
        };
        emits("error", errorEvent);
      }
      loading.value = false;
    }
    const disabled = computed(() => props.disabled || loading.value);
    provide(formOptionsInjectionKey, computed(() => ({
      disabled: disabled.value,
      validateOnInputDelay: props.validateOnInputDelay
    })));
    __expose({
      validate: _validate,
      errors,
      setErrors(errs, name) {
        if (name) {
          errors.value = errors.value.filter((error) => error.name !== name).concat(resolveErrorIds(errs));
        } else {
          errors.value = resolveErrorIds(errs);
        }
      },
      async submit() {
        await onSubmitWrapper(new Event("submit"));
      },
      getErrors(name) {
        if (name) {
          return errors.value.filter((err) => err.name === name);
        }
        return errors.value;
      },
      clear(name) {
        if (name) {
          errors.value = errors.value.filter((err) => err.name !== name);
        } else {
          errors.value = [];
        }
      },
      disabled
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        class: unref(form)({ class: props.class }),
        onSubmit: onSubmitWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const theme$3 = {
  "slots": {
    "root": "",
    "wrapper": "",
    "labelWrapper": "flex content-center items-center justify-between",
    "label": "block font-medium text-[var(--ui-text)]",
    "container": "mt-1 relative",
    "description": "text-[var(--ui-text-muted)]",
    "error": "mt-2 text-[var(--ui-error)]",
    "hint": "text-[var(--ui-text-muted)]",
    "help": "mt-2 text-[var(--ui-text-muted)]"
  },
  "variants": {
    "size": {
      "xs": {
        "root": "text-xs"
      },
      "sm": {
        "root": "text-xs"
      },
      "md": {
        "root": "text-sm"
      },
      "lg": {
        "root": "text-sm"
      },
      "xl": {
        "root": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const appConfig$3 = _appConfig;
const formField = tv({ extend: tv(theme$3), ...((_c = appConfig$3.ui) == null ? undefined : _c.formField) || {} });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FormField",
  __ssrInlineRender: true,
  props: {
    as: {},
    name: {},
    errorPattern: {},
    label: {},
    description: {},
    help: {},
    error: { type: [String, Boolean] },
    hint: {},
    size: {},
    required: { type: Boolean },
    eagerValidation: { type: Boolean },
    validateOnInputDelay: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => formField({
      size: props.size,
      required: props.required
    }));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a2, _b2;
      return props.error || ((_b2 = (_a2 = formErrors == null ? undefined : formErrors.value) == null ? undefined : _a2.find((error2) => error2.name === props.name || props.errorPattern && error2.name.match(props.errorPattern))) == null ? undefined : _b2.message);
    });
    const id = ref(useId());
    provide(inputIdInjectionKey, id);
    provide(formFieldInjectionKey, computed(() => ({
      error: error.value,
      name: props.name,
      size: props.size,
      eagerValidation: props.eagerValidation,
      validateOnInputDelay: props.validateOnInputDelay,
      errorPattern: props.errorPattern
    })));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? undefined : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.label || !!slots.label) {
              _push2(`<div class="${ssrRenderClass(ui.value.labelWrapper({ class: (_b2 = props.ui) == null ? undefined : _b2.labelWrapper }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Label), {
                for: id.value,
                class: ui.value.label({ class: (_c2 = props.ui) == null ? undefined : _c2.label })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
                      _push3(`${ssrInterpolate(_ctx.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (_ctx.hint || !!slots.hint) {
                _push2(`<span class="${ssrRenderClass(ui.value.hint({ class: (_d2 = props.ui) == null ? undefined : _d2.hint }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "hint", { hint: _ctx.hint }, () => {
                  _push2(`${ssrInterpolate(_ctx.hint)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_e2 = props.ui) == null ? undefined : _e2.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([(_ctx.label || !!slots.label || _ctx.description || !!slots.description) && ui.value.container({ class: (_f2 = props.ui) == null ? undefined : _f2.container })])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (typeof error.value === "string" && error.value || !!slots.error) {
              _push2(`<p class="${ssrRenderClass(ui.value.error({ class: (_g = props.ui) == null ? undefined : _g.error }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`${ssrInterpolate(error.value)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else if (_ctx.help || !!slots.help) {
              _push2(`<p class="${ssrRenderClass(ui.value.help({ class: (_h = props.ui) == null ? undefined : _h.help }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => {
                _push2(`${ssrInterpolate(_ctx.help)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? undefined : _i.wrapper })
              }, [
                _ctx.label || !!slots.label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.labelWrapper({ class: (_j = props.ui) == null ? undefined : _j.labelWrapper })
                }, [
                  createVNode(unref(Label), {
                    for: id.value,
                    class: ui.value.label({ class: (_k = props.ui) == null ? undefined : _k.label })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["for", "class"]),
                  _ctx.hint || !!slots.hint ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.hint({ class: (_l = props.ui) == null ? undefined : _l.hint })
                  }, [
                    renderSlot(_ctx.$slots, "hint", { hint: _ctx.hint }, () => [
                      createTextVNode(toDisplayString(_ctx.hint), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.description({ class: (_m = props.ui) == null ? undefined : _m.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              createVNode("div", {
                class: [(_ctx.label || !!slots.label || _ctx.description || !!slots.description) && ui.value.container({ class: (_n = props.ui) == null ? undefined : _n.container })]
              }, [
                renderSlot(_ctx.$slots, "default", { error: error.value }),
                typeof error.value === "string" && error.value || !!slots.error ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: ui.value.error({ class: (_o = props.ui) == null ? undefined : _o.error })
                }, [
                  renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ])
                ], 2)) : _ctx.help || !!slots.help ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.help({ class: (_p = props.ui) == null ? undefined : _p.help })
                }, [
                  renderSlot(_ctx.$slots, "help", { help: _ctx.help }, () => [
                    createTextVNode(toDisplayString(_ctx.help), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/FormField.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const theme$2 = {
  "slots": {
    "root": "relative flex items-start",
    "base": "shrink-0 flex items-center justify-center rounded-[var(--ui-radius)] text-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)] focus-visible:outline-2 focus-visible:outline-offset-2",
    "container": "flex items-center",
    "wrapper": "ms-2",
    "icon": "shrink-0 size-full",
    "label": "block font-medium text-[var(--ui-text)]",
    "description": "text-[var(--ui-text-muted)]"
  },
  "variants": {
    "color": {
      "primary": "focus-visible:outline-[var(--ui-primary)]",
      "secondary": "focus-visible:outline-[var(--ui-secondary)]",
      "success": "focus-visible:outline-[var(--ui-success)]",
      "info": "focus-visible:outline-[var(--ui-info)]",
      "warning": "focus-visible:outline-[var(--ui-warning)]",
      "error": "focus-visible:outline-[var(--ui-error)]",
      "neutral": "focus-visible:outline-[var(--ui-border-inverted)]"
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75",
        "description": "cursor-not-allowed opacity-75"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-primary)] bg-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-secondary)] bg-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-success)] bg-[var(--ui-success)]"
    },
    {
      "color": "info",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-info)] bg-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-warning)] bg-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-error)] bg-[var(--ui-error)]"
    },
    {
      "color": "neutral",
      "checked": true,
      "class": "ring-2 ring-[var(--ui-border-inverted)] bg-[var(--ui-bg-inverted)]"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};
const appConfig$2 = _appConfig;
const checkbox = tv({ extend: tv(theme$2), ...((_d = appConfig$2.ui) == null ? undefined : _d.checkbox) || {} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    label: {},
    description: {},
    color: {},
    size: {},
    icon: {},
    indeterminateIcon: {},
    class: {},
    ui: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    defaultValue: { type: [Boolean, String] }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: undefined } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue");
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const appConfig2 = useAppConfig();
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => checkbox({
      size: size.value,
      color: color.value,
      required: props.required,
      disabled: disabled.value,
      checked: Boolean(modelValue.value ?? props.defaultValue)
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.container({ class: (_a3 = props.ui) == null ? undefined : _a3.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, unref(rootProps), {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              class: ui.value.base({ class: (_b2 = props.ui) == null ? undefined : _b2.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), { "as-child": "" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3, _c3, _d3;
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$d, {
                            name: _ctx.indeterminateIcon || unref(appConfig2).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? undefined : _a4.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$d, {
                            name: _ctx.icon || unref(appConfig2).ui.icons.check,
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? undefined : _b3.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$d, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig2).ui.icons.minus,
                            class: ui.value.icon({ class: (_c3 = props.ui) == null ? undefined : _c3.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig2).ui.icons.check,
                            class: ui.value.icon({ class: (_d3 = props.ui) == null ? undefined : _d3.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a4, _b3;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$d, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig2).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? undefined : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig2).ui.icons.check,
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? undefined : _b3.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.label || !!slots.label || (_ctx.description || !!slots.description)) {
              _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_c2 = props.ui) == null ? undefined : _c2.wrapper }))}"${_scopeId}>`);
              if (_ctx.label || !!slots.label) {
                _push2(ssrRenderComponent(unref(Label), {
                  for: unref(id),
                  class: ui.value.label({ class: (_d2 = props.ui) == null ? undefined : _d2.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => {
                        _push3(`${ssrInterpolate(_ctx.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                          createTextVNode(toDisplayString(_ctx.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.description || !!slots.description) {
                _push2(`<p class="${ssrRenderClass(ui.value.description({ class: (_e2 = props.ui) == null ? undefined : _e2.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
                  _push2(`${ssrInterpolate(_ctx.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.container({ class: (_f2 = props.ui) == null ? undefined : _f2.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, unref(rootProps), {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  class: ui.value.base({ class: (_g = props.ui) == null ? undefined : _g.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => [
                    createVNode(unref(CheckboxIndicator), { "as-child": "" }, {
                      default: withCtx(() => {
                        var _a4, _b3;
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$d, {
                            key: 0,
                            name: _ctx.indeterminateIcon || unref(appConfig2).ui.icons.minus,
                            class: ui.value.icon({ class: (_a4 = props.ui) == null ? undefined : _a4.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                            key: 1,
                            name: _ctx.icon || unref(appConfig2).ui.icons.check,
                            class: ui.value.icon({ class: (_b3 = props.ui) == null ? undefined : _b3.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              _ctx.label || !!slots.label || (_ctx.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.wrapper({ class: (_h = props.ui) == null ? undefined : _h.wrapper })
              }, [
                _ctx.label || !!slots.label ? (openBlock(), createBlock(unref(Label), {
                  key: 0,
                  for: unref(id),
                  class: ui.value.label({ class: (_i = props.ui) == null ? undefined : _i.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: _ctx.label }, () => [
                      createTextVNode(toDisplayString(_ctx.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: ui.value.description({ class: (_j = props.ui) == null ? undefined : _j.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const theme$1 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-[var(--ui-text-dimmed)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-[var(--ui-text-dimmed)]",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-[var(--ui-text-dimmed)]"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-[var(--ui-text-highlighted)] bg-[var(--ui-bg)] ring ring-inset ring-[var(--ui-border-accented)]",
      "soft": "text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)]/50 hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg-elevated)]/50",
      "subtle": "text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-elevated)] ring ring-inset ring-[var(--ui-border-accented)]",
      "ghost": "text-[var(--ui-text-highlighted)] bg-transparent hover:bg-[var(--ui-bg-elevated)] focus:bg-[var(--ui-bg-elevated)] disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-[var(--ui-text-highlighted)] bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-[var(--ui-text-muted)] file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-success)]"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-error)]"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-[var(--ui-border-inverted)]"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const appConfig$1 = _appConfig;
const input = tv({ extend: tv(theme$1), ...((_e = appConfig$1.ui) == null ? undefined : _e.input) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Input",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    id: {},
    name: {},
    type: { default: "text" },
    placeholder: {},
    color: {},
    variant: {},
    size: {},
    required: { type: Boolean },
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    autofocusDelay: { default: 0 },
    disabled: { type: Boolean },
    highlight: { type: Boolean },
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {},
    loading: { type: Boolean },
    loadingIcon: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "blur", "change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const [modelValue, modelModifiers] = useModel(__props, "modelValue");
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const ui = computed(() => input({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize == null ? undefined : inputSize.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
    const inputRef = ref(null);
    function updateInput(value) {
      if (modelModifiers.trim) {
        value = value.trim();
      }
      if (modelModifiers.number || props.type === "number") {
        value = looseToNumber(value);
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!modelModifiers.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (modelModifiers.lazy) {
        updateInput(value);
      }
      if (modelModifiers.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: _ctx.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: _ctx.placeholder,
              class: ui.value.base({ class: (_a3 = props.ui) == null ? undefined : _a3.base }),
              disabled: unref(disabled),
              required: _ctx.required,
              autocomplete: _ctx.autocomplete
            }, _ctx.$attrs))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!_ctx.avatar || !!slots.leading) {
              _push2(`<span class="${ssrRenderClass(ui.value.leading({ class: (_b2 = props.ui) == null ? undefined : _b2.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b3, _c3;
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$d, {
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? undefined : _a4.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!_ctx.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                    size: ((_b3 = props.ui) == null ? undefined : _b3.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c3 = props.ui) == null ? undefined : _c3.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span class="${ssrRenderClass(ui.value.trailing({ class: (_c2 = props.ui) == null ? undefined : _c2.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a4;
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$d, {
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? undefined : _a4.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: _ctx.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: _ctx.placeholder,
                class: ui.value.base({ class: (_d2 = props.ui) == null ? undefined : _d2.base }),
                disabled: unref(disabled),
                required: _ctx.required,
                autocomplete: _ctx.autocomplete
              }, _ctx.$attrs, {
                onInput,
                onBlur,
                onChange
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete"]),
              renderSlot(_ctx.$slots, "default"),
              unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.leading({ class: (_e2 = props.ui) == null ? undefined : _e2.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a4, _b3, _c3;
                  return [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                      key: 0,
                      name: unref(leadingIconName),
                      class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? undefined : _a4.leadingIcon })
                    }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                      key: 1,
                      size: ((_b3 = props.ui) == null ? undefined : _b3.leadingAvatarSize) || ui.value.leadingAvatarSize()
                    }, _ctx.avatar, {
                      class: ui.value.leadingAvatar({ class: (_c3 = props.ui) == null ? undefined : _c3.leadingAvatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                class: ui.value.trailing({ class: (_f2 = props.ui) == null ? undefined : _f2.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", {}, () => {
                  var _a4;
                  return [
                    unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                      key: 0,
                      name: unref(trailingIconName),
                      class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? undefined : _a4.trailingIcon })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = v.object({
      newsletter: v.boolean(),
      betaProgram: v.boolean(),
      name: v.pipe(v.string(), v.minLength(1, "Name ist erforderlich")),
      familyName: v.pipe(v.string(), v.minLength(1, "Nachname ist erforderlich")),
      email: v.pipe(v.string(), v.email("Ung\xFCltige E-Mail-Adresse"))
    });
    const form2 = reactive({
      newsletter: true,
      betaProgram: false,
      name: "",
      familyName: "",
      email: ""
    });
    const errors = reactive({
      newsletter: null,
      betaProgram: null,
      name: null,
      familyName: null,
      email: null
    });
    const confirmationMessage = reactive({
      text: null
    });
    async function onSubmit(event) {
      try {
        console.log("Empfangene Daten:", event.data);
        const emailResponse = await fetch("/api/validate-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: form2.email })
        });
        const emailResult = await emailResponse.json();
        if (!emailResponse.ok) {
          errors.email = emailResult.message || "Ung\xFCltige E-Mail-Domain.";
          return;
        }
        Object.keys(errors).forEach((key) => {
          errors[key] = null;
        });
        const sendFormResponse = await fetch("/api/send-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form2)
          // Sende genau die Felder: newsletter, betaProgram, name, familyName, email
        });
        const sendFormResult = await sendFormResponse.json();
        if (!sendFormResponse.ok) {
          console.error("Fehler beim Versenden des Formulars:", sendFormResult);
          errors.text = sendFormResult.statusMessage || "Fehler beim Senden der E-Mail.";
          return;
        }
        console.log("Formular abgesendet (sendFormResult):", sendFormResult);
        confirmationMessage.text = sendFormResult.message;
        form2.newsletter = true;
        form2.betaProgram = false;
        form2.name = "";
        form2.familyName = "";
        form2.email = "";
      } catch (error) {
        console.error("Ein unerwarteter Fehler ist aufgetreten:", error);
        errors.email = "Ein Fehler ist aufgetreten. Bitte versuche es sp\xE4ter erneut.";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Progress = __nuxt_component_0;
      const _component_UForm = _sfc_main$7;
      const _component_UFormField = _sfc_main$6;
      const _component_UCheckbox = _sfc_main$5;
      const _component_UInput = _sfc_main$4;
      const _component_UButton = _sfc_main$9$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex flex-col mx-auto overflow-hidden rounded-xl border-1 border-green-600 m-6 justify-center" }, _attrs))} data-v-22260d87><div class="flex flex-col bg-primary text-white" data-v-22260d87><p class="sm:text-4xl text-xl font-semibold mt-3 mb-4 text-center justify-top" data-v-22260d87> Newsletter und Beta Phase </p></div>`);
      _push(ssrRenderComponent(_component_Progress, null, null, _parent));
      _push(`<p class="md:text-xl leading-loose font-semibold mt-4 mb-4 text-center justify-top" data-v-22260d87> Unsere Beta Phase hat begonnen! <br data-v-22260d87> Interessierte k\xF6nnen bereits jetzt die Vorteile smarter Pflanzenversorgung erfahren. <br data-v-22260d87> Unser Newsletter h\xE4lt dich auf dem Laufenden ohne zu stressen. <br data-v-22260d87> Wir schreiben dir nur bei relevanten Fortschritten. </p><div class="flex flex-col justify-center mb-6 mx-auto" data-v-22260d87>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: v.safeParser(unref(schema)),
        state: form2,
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex mx-4 flex-row gap-6 justify-center" data-v-22260d87${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, { name: "newsletter" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: form2.newsletter,
                    "onUpdate:modelValue": ($event) => form2.newsletter = $event,
                    label: "Newsletter abonnieren",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCheckbox, {
                      modelValue: form2.newsletter,
                      "onUpdate:modelValue": ($event) => form2.newsletter = $event,
                      label: "Newsletter abonnieren",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { name: "betaProgram" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: form2.betaProgram,
                    "onUpdate:modelValue": ($event) => form2.betaProgram = $event,
                    label: "Interesse am Beta-Programm",
                    size: "xl"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UCheckbox, {
                      modelValue: form2.betaProgram,
                      "onUpdate:modelValue": ($event) => form2.betaProgram = $event,
                      label: "Interesse am Beta-Programm",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (errors.text) {
              _push2(`<p class="text-red-500 text-sm text-center mt-1" data-v-22260d87${_scopeId}>${ssrInterpolate(errors.text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="text-inpust-fields gap-6 mt-6" data-v-22260d87${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Name",
              name: "name",
              size: "xl",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form2.name,
                    "onUpdate:modelValue": ($event) => form2.name = $event,
                    placeholder: "Ihr Vorname"
                  }, null, _parent3, _scopeId2));
                  if (errors.name) {
                    _push3(`<p class="text-red-500 static text-sm mt-1" data-v-22260d87${_scopeId2}>${ssrInterpolate(errors.name)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form2.name,
                      "onUpdate:modelValue": ($event) => form2.name = $event,
                      placeholder: "Ihr Vorname"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    errors.name ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 static text-sm mt-1"
                    }, toDisplayString(errors.name), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "Nachname",
              size: "xl",
              name: "familyName",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form2.familyName,
                    "onUpdate:modelValue": ($event) => form2.familyName = $event,
                    placeholder: "Ihr Nachname"
                  }, null, _parent3, _scopeId2));
                  if (errors.familyName) {
                    _push3(`<p class="text-red-500 text-sm mt-1" data-v-22260d87${_scopeId2}>${ssrInterpolate(errors.familyName)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form2.familyName,
                      "onUpdate:modelValue": ($event) => form2.familyName = $event,
                      placeholder: "Ihr Nachname"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    errors.familyName ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 text-sm mt-1"
                    }, toDisplayString(errors.familyName), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: "E-Mail",
              name: "email",
              size: "xl",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form2.email,
                    "onUpdate:modelValue": ($event) => form2.email = $event,
                    type: "email",
                    placeholder: "Ihre E-Mail-Adresse"
                  }, null, _parent3, _scopeId2));
                  if (errors.email) {
                    _push3(`<p class="text-red-500 text-sm mt-1" data-v-22260d87${_scopeId2}>${ssrInterpolate(errors.email)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form2.email,
                      "onUpdate:modelValue": ($event) => form2.email = $event,
                      type: "email",
                      placeholder: "Ihre E-Mail-Adresse"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    errors.email ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 text-sm mt-1"
                    }, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center mt-10" data-v-22260d87${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              color: "primary",
              size: "xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Absenden `);
                } else {
                  return [
                    createTextVNode(" Absenden ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (confirmationMessage.text) {
              _push2(`<p class="text-primary text-xl mt-4 text-center" data-v-22260d87${_scopeId}>${ssrInterpolate(confirmationMessage.text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="text-center mx-4 mt-8" data-v-22260d87${_scopeId}> Mit dem Absenden des Formulars erkl\xE4re ich mich mit den `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/datenschutz",
              class: "font-medium hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Datenschutzbestimmungen `);
                } else {
                  return [
                    createTextVNode(" Datenschutzbestimmungen ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` einverstanden. </p>`);
          } else {
            return [
              createVNode("div", { class: "flex mx-4 flex-row gap-6 justify-center" }, [
                createVNode(_component_UFormField, { name: "newsletter" }, {
                  default: withCtx(() => [
                    createVNode(_component_UCheckbox, {
                      modelValue: form2.newsletter,
                      "onUpdate:modelValue": ($event) => form2.newsletter = $event,
                      label: "Newsletter abonnieren",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { name: "betaProgram" }, {
                  default: withCtx(() => [
                    createVNode(_component_UCheckbox, {
                      modelValue: form2.betaProgram,
                      "onUpdate:modelValue": ($event) => form2.betaProgram = $event,
                      label: "Interesse am Beta-Programm",
                      size: "xl"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              errors.text ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-red-500 text-sm text-center mt-1"
              }, toDisplayString(errors.text), 1)) : createCommentVNode("", true),
              createVNode("div", { class: "text-inpust-fields gap-6 mt-6" }, [
                createVNode(_component_UFormField, {
                  label: "Name",
                  name: "name",
                  size: "xl",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form2.name,
                      "onUpdate:modelValue": ($event) => form2.name = $event,
                      placeholder: "Ihr Vorname"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    errors.name ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 static text-sm mt-1"
                    }, toDisplayString(errors.name), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "Nachname",
                  size: "xl",
                  name: "familyName",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form2.familyName,
                      "onUpdate:modelValue": ($event) => form2.familyName = $event,
                      placeholder: "Ihr Nachname"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    errors.familyName ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 text-sm mt-1"
                    }, toDisplayString(errors.familyName), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "E-Mail",
                  name: "email",
                  size: "xl",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form2.email,
                      "onUpdate:modelValue": ($event) => form2.email = $event,
                      type: "email",
                      placeholder: "Ihre E-Mail-Adresse"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    errors.email ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-red-500 text-sm mt-1"
                    }, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-center mt-10" }, [
                createVNode(_component_UButton, {
                  type: "submit",
                  color: "primary",
                  size: "xl"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Absenden ")
                  ]),
                  _: 1
                })
              ]),
              confirmationMessage.text ? (openBlock(), createBlock("p", {
                key: 1,
                class: "text-primary text-xl mt-4 text-center"
              }, toDisplayString(confirmationMessage.text), 1)) : createCommentVNode("", true),
              createVNode("p", { class: "text-center mx-4 mt-8" }, [
                createTextVNode(" Mit dem Absenden des Formulars erkl\xE4re ich mich mit den "),
                createVNode(_component_NuxtLink, {
                  to: "/datenschutz",
                  class: "font-medium hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Datenschutzbestimmungen ")
                  ]),
                  _: 1
                }),
                createTextVNode(" einverstanden. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-22260d87"]]);
const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-[var(--ui-border-accented)] rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "-start-12 top-1/2 -translate-y-1/2",
        "next": "-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "bg-[var(--ui-border-inverted)]"
      }
    }
  },
  "defaultVariants": {
    "orientation": "horizontal"
  }
};
const appConfig = _appConfig;
const carousel = tv({ extend: tv(theme), ...((_f = appConfig.ui) == null ? undefined : _f.carousel) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    as: {},
    prev: {},
    prevIcon: {},
    next: {},
    nextIcon: {},
    arrows: { type: Boolean, default: false },
    dots: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    items: {},
    autoplay: { type: [Boolean, Object], default: false },
    autoScroll: { type: [Boolean, Object], default: false },
    autoHeight: { type: [Boolean, Object], default: false },
    classNames: { type: [Boolean, Object], default: false },
    fade: { type: [Boolean, Object], default: false },
    wheelGestures: { type: Boolean, default: false },
    class: {},
    ui: {},
    align: { type: [String, Function], default: "center" },
    containScroll: { type: [Boolean, String], default: "trimSnaps" },
    slidesToScroll: { default: 1 },
    dragFree: { type: Boolean, default: false },
    dragThreshold: { default: 10 },
    inViewThreshold: { default: 0 },
    loop: { type: Boolean, default: false },
    skipSnaps: { type: Boolean, default: false },
    duration: { default: 25 },
    startIndex: { default: 0 },
    watchDrag: { type: [Boolean, Function], default: true },
    watchResize: { type: [Boolean, Function], default: true },
    watchSlides: { type: [Boolean, Function], default: true },
    watchFocus: { type: [Boolean, Function], default: true },
    active: { type: Boolean, default: true },
    breakpoints: { default: () => ({}) }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const appConfig2 = useAppConfig();
    const { dir, t } = useLocale();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig2.ui.icons.arrowRight : appConfig2.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig2.ui.icons.arrowLeft : appConfig2.ui.icons.arrowRight));
    const ui = computed(() => carousel({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = computedAsync(async () => {
      const plugins2 = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        plugins2.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        plugins2.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        plugins2.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        plugins2.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        plugins2.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('embla-carousel-wheel-gestures');
        plugins2.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      return plugins2;
    });
    const [emblaRef, emblaApi] = useEmblaCarousel(options.value, plugins.value);
    watch([options, plugins], () => {
      var _a2;
      (_a2 = emblaApi.value) == null ? undefined : _a2.reInit(options.value, plugins.value);
    });
    function scrollPrev() {
      var _a2;
      (_a2 = emblaApi.value) == null ? undefined : _a2.scrollPrev();
    }
    function scrollNext() {
      var _a2;
      (_a2 = emblaApi.value) == null ? undefined : _a2.scrollNext();
    }
    function scrollTo(index2) {
      var _a2;
      (_a2 = emblaApi.value) == null ? undefined : _a2.scrollTo(index2);
    }
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0",
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.viewport({ class: (_a3 = props.ui) == null ? undefined : _a3.viewport }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: (_b2 = props.ui) == null ? undefined : _b2.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, index2) => {
              var _a4;
              _push2(`<div role="group" aria-roledescription="slide" class="${ssrRenderClass(ui.value.item({ class: (_a4 = props.ui) == null ? undefined : _a4.item }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index: index2
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (_ctx.arrows || _ctx.dots) {
              _push2(`<div class="${ssrRenderClass(ui.value.controls({ class: (_c2 = props.ui) == null ? undefined : _c2.controls }))}"${_scopeId}>`);
              if (_ctx.arrows) {
                _push2(`<div class="${ssrRenderClass(ui.value.arrows({ class: (_d2 = props.ui) == null ? undefined : _d2.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  size: "md",
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof _ctx.prev === "object" ? _ctx.prev : undefined, {
                  class: ui.value.prev({ class: (_e2 = props.ui) == null ? undefined : _e2.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$9$1, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  size: "md",
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof _ctx.next === "object" ? _ctx.next : undefined, {
                  class: ui.value.next({ class: (_f2 = props.ui) == null ? undefined : _f2.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.dots) {
                _push2(`<div class="${ssrRenderClass(ui.value.dots({ class: (_g = props.ui) == null ? undefined : _g.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index2) => {
                  var _a4;
                  _push2(`<button${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index2 + 1 }))} class="${ssrRenderClass(ui.value.dot({ class: (_a4 = props.ui) == null ? undefined : _a4.dot, active: selectedIndex.value === index2 }))}"${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                class: ui.value.viewport({ class: (_h = props.ui) == null ? undefined : _h.viewport })
              }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_i = props.ui) == null ? undefined : _i.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index2) => {
                    var _a4;
                    return openBlock(), createBlock("div", {
                      key: index2,
                      role: "group",
                      "aria-roledescription": "slide",
                      class: ui.value.item({ class: (_a4 = props.ui) == null ? undefined : _a4.item })
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index: index2
                      })
                    ], 2);
                  }), 128))
                ], 2)
              ], 2),
              _ctx.arrows || _ctx.dots ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.controls({ class: (_j = props.ui) == null ? undefined : _j.controls })
              }, [
                _ctx.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.arrows({ class: (_k = props.ui) == null ? undefined : _k.arrows })
                }, [
                  createVNode(_sfc_main$9$1, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    size: "md",
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof _ctx.prev === "object" ? _ctx.prev : undefined, {
                    class: ui.value.prev({ class: (_l = props.ui) == null ? undefined : _l.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$9$1, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    size: "md",
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof _ctx.next === "object" ? _ctx.next : undefined, {
                    class: ui.value.next({ class: (_m = props.ui) == null ? undefined : _m.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                _ctx.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.dots({ class: (_n = props.ui) == null ? undefined : _n.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index2) => {
                    var _a4;
                    return openBlock(), createBlock("button", {
                      key: index2,
                      "aria-label": unref(t)("carousel.goto", { slide: index2 + 1 }),
                      class: ui.value.dot({ class: (_a4 = props.ui) == null ? undefined : _a4.dot, active: selectedIndex.value === index2 }),
                      onClick: ($event) => scrollTo(index2)
                    }, null, 10, ["aria-label", "onClick"]);
                  }), 128))
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ShowcaseCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "/usecase/1.png",
      "/usecase/2.png",
      "/usecase/3.png",
      "/usecase/4.png",
      "/usecase/5.png",
      "/usecase/6.png",
      "/usecase/7.png"
    ];
    const texts = [
      "Immergr\xFCnes Wohnzimmer? Auch nach deinem Urlaub!",
      "Bestens versorgt. Dein kleiner Garten in der vierten Etage.",
      "Regionales Gem\xFCse? Regionaler gehts nicht!",
      "Komfortabel und automatisiert. Wo bleibt da die M\xFChe?",
      "Wenig Ahnung aber dein HomeGrow gelingt immer? Gern geschehen!",
      "Sessional oder Ganzj\xE4hrig? Deine Entscheidung.",
      "Hol alles Raus! Bis zu 30% beschleunigtes Wachstum."
    ];
    const currentIndex = ref(0);
    const carouselRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "showcaseCarousel",
        class: "section"
      }, _attrs))} data-v-18595934>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        ref_key: "carouselRef",
        ref: carouselRef,
        loop: "",
        arrows: "",
        autoplay: { delay: 4e3 },
        items,
        ui: { item: "basis-full md:basis-1/3" },
        class: "settings"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", item)} width="900" height="" class="flex rounded-lg picture" data-v-18595934${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: item,
                width: "900",
                height: "",
                class: "flex rounded-lg picture"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-container font-bold" data-v-18595934><p data-v-18595934>${ssrInterpolate(texts[currentIndex.value])}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShowcaseCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const ShowcaseCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18595934"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head data-v-50d3a599><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" data-v-50d3a599></head><div class="scroll-container" data-v-50d3a599><div id="black-overlay" class="black-overlay" data-v-50d3a599></div><section id="image-section" class="hero-section" data-v-50d3a599><div class="hero-image-container" data-v-50d3a599><img id="hero-image"${ssrRenderAttr("src", _imports_0)} alt="Hero" class="hero-image" data-v-50d3a599></div></section><section id="pinned-heading-section" class="pinned-heading-section mobil-invisible" data-v-50d3a599><h1 id="pinned-heading" class="pinned-heading" data-v-50d3a599> Automatische Versorgung f\xFCr deine Pflanzen!<br data-v-50d3a599> Aber wie? </h1></section><section id="word-section" class="word-section text-black z-50" data-v-50d3a599><div id="word-section1" class="word-section" data-v-50d3a599><div id="effekt-word1" class="effekt-word" data-v-50d3a599> Smarthome </div></div><div id="word-section2" class="word-section" data-v-50d3a599><div id="effekt-word2" class="effekt-word" data-v-50d3a599> Trifft </div></div><div id="word-section3" class="word-section" data-v-50d3a599><div id="effekt-word3" class="effekt-word" data-v-50d3a599> Botanik </div></div></section><div spacer class="spacer" data-v-50d3a599></div><section id="showcase-section" class="showcase-section" data-v-50d3a599><div id="showcase-content1" class="showcase-content" data-v-50d3a599><div id="showcase-info1" class="showcase-info bg-secondary" data-v-50d3a599><div id="showcase-info-text1" class="showcase-info-text" data-v-50d3a599><p class="text-large pb-6 text-white font-semibold" data-v-50d3a599> Zielgenaue<br data-v-50d3a599>Bew\xE4sserung </p><img${ssrRenderAttr("src", _imports_1)} alt="Showcase Image" class="device-image" data-v-50d3a599><div class="flex flex-col" data-v-50d3a599><p class="text-base text-white pb-4 font-semibold" data-v-50d3a599> Reduziert Sorgen und Wasserbedarf </p><p class="text-base text-white font-normal whitespace-normal" data-v-50d3a599> Dank Monitoring und intelligenter Steuerung schlie\xDFt du nicht nur Unterversorgung aus, sondern profitierst auch vom Wasser-Sparpotential einer bedarfsgerechten Tr\xF6pfchenbew\xE4sserung. </p></div></div></div><div class="image-container" data-v-50d3a599><img${ssrRenderAttr("src", _imports_2)} alt="Showcase Image" class="showcase-image" data-v-50d3a599><img id="step2"${ssrRenderAttr("src", _imports_3)} alt="Showcase Image" class="showcase-image-hidden mobil-invisible" data-v-50d3a599><img id="step3"${ssrRenderAttr("src", _imports_4)} alt="Showcase Image" class="showcase-image-hidden mobil-invisible" data-v-50d3a599><div class="flex w-full gap-3 flex-col mb-4 z-50 mobil-invisible mt-auto" data-v-50d3a599><div class="flex w-full text-lg font-semibold flex-col" data-v-50d3a599><p class="font-normal uppercase py-1 tracking-widest px-10" data-v-50d3a599> Monitoring </p><div class="flex flex-row font-medium gap-4 py-2 px-10 bg-lightblue text-white" data-v-50d3a599><div class="flex flex-col w-1/3" data-v-50d3a599><p class="" data-v-50d3a599> Feuchtigkeit im Pflanzsubstrat </p></div><div id="step2" class="flex flex-col invisible w-1/3" data-v-50d3a599><p data-v-50d3a599>F\xFCllstand, Wassertemperatur, EC-Wert, Ph-Wert</p></div><div id="step3" class="flex flex-col invisible w-1/3" data-v-50d3a599><p data-v-50d3a599>Temperatur, Luftfeuchtigkeit, Optisch, VPD (Dampfdruckdefizit)</p></div></div></div><div class="flexd text-lg w-full font-semibold flex-col" data-v-50d3a599><p class="font-normal tracking-widest py-1 uppercase px-10" data-v-50d3a599> Automatisierung </p><div class="flex flex-row font-medium gap-4 py-2 px-10 bg-lightblue text-white" data-v-50d3a599><div class="flex flex-col w-1/3" data-v-50d3a599><p class="" data-v-50d3a599> Bew\xE4sserung </p></div><div id="step2" class="flex flex-col w-1/3 invisible" data-v-50d3a599><p data-v-50d3a599>N\xE4hrstoffversorgung, Ph-Management, Wasserbezug</p></div><div id="step3" class="flex flex-col w-1/3 invisible" data-v-50d3a599><p data-v-50d3a599>Klimamanagement</p></div></div></div></div></div></div><div id="showcase-content2" class="showcase-content" data-v-50d3a599><div id="showcase-info2" class="showcase-info bg-secondary" data-v-50d3a599><div id="showcase-info-text2" class="showcase-info-text" data-v-50d3a599><p class="text-large pb-6 text-white font-semibold" data-v-50d3a599> N\xE4hrstoffversorgung<br data-v-50d3a599>ohne Kompromisse </p><div class="flex flex-col" data-v-50d3a599><p class="text-base text-white pb-4 font-semibold" data-v-50d3a599> Tankmonitor </p><p class="text-base text-white font-normal whitespace-normal" data-v-50d3a599> Um sichere Automatisierung zu gew\xE4hrleisten, wird der N\xE4hrstofftank zu jeder Zeit durch Radar und Messsonden \xFCberwacht. </p></div><div class="flex flex-col" data-v-50d3a599><p class="text-base text-white pb-4 font-semibold" data-v-50d3a599> N\xE4hrstoffcontroller </p><p class="text-base text-white font-normal whitespace-normal" data-v-50d3a599> Drei Komponenten eines D\xFCngemittelsystems und Zwei Ph-Korrerkturl\xF6sungen werden bei Bedarf automatisch infundiert. </p></div></div></div><div class="image-container-invisible" data-v-50d3a599><img${ssrRenderAttr("src", _imports_3)} alt="Showcase Image" class="showcase-image" data-v-50d3a599></div></div><div id="showcase-content3" class="showcase-content" data-v-50d3a599><div id="showcase-info3" class="showcase-info bg-secondary" data-v-50d3a599><div id="showcase-info-text3" class="showcase-info-text" data-v-50d3a599><p class="text-large pb-6 text-white font-semibold" data-v-50d3a599> Volle Kontrolle?<br data-v-50d3a599>Kein Problem! </p><img${ssrRenderAttr("src", _imports_5)} alt="Showcase Image" class="device-image max-w-sm" data-v-50d3a599><div class="flex flex-col" data-v-50d3a599><p class="text-base text-white pb-4 font-semibold" data-v-50d3a599> Ganzj\xE4hrig bestes Klima </p><p class="text-base text-white font-normal whitespace-normal" data-v-50d3a599> Ob Indoor oder im isolierten Gew\xE4chshaus, unser System \xFCbernimmt die Regulierung des Klimas, abgestimmt auf deine Pflanzen. Unsere SmartPlugs erm\xF6glichen das Einbinden analoger Ger\xE4te. Au\xDFerdem k\xF6nnen smarte Ger\xE4te wie Thermostate oder Abluftventilatoren eingebunden werden. </p></div></div></div><div class="image-container-invisible" data-v-50d3a599><img${ssrRenderAttr("src", _imports_4)} alt="Showcase Image" class="showcase-image mobil-padding" data-v-50d3a599><div class="flex w-full gap-3 flex-col mb-4 z-50 mt-auto" data-v-50d3a599><div class="flex w-full text-lg font-semibold flex-col" data-v-50d3a599><p class="font-normal uppercase py-1 tracking-widest text-2xl px-10" data-v-50d3a599> Monitoring </p><div class="flex flex-row font-medium gap-4 py-2 px-10 text-lg bg-lightblue text-white" data-v-50d3a599><div class="flex flex-col" data-v-50d3a599><p data-v-50d3a599>Substratfeuchtigkeit</p><p data-v-50d3a599>F\xFCllstand</p><p data-v-50d3a599>Wassertemperatur</p><p data-v-50d3a599>EC-Wert</p><p data-v-50d3a599>PH-Wert</p><p data-v-50d3a599>Temperatur</p><p data-v-50d3a599>Luftfeuchtigkeit</p><p data-v-50d3a599>VPD</p><p data-v-50d3a599>Optisch</p></div></div></div><div class="flexd text-lg w-full font-semibold flex-col" data-v-50d3a599><p class="font-normal tracking-widest py-1 uppercase text-2xl px-10" data-v-50d3a599> Automatisierung </p><div class="flex flex-row font-medium gap-4 py-2 px-10 text-xl bg-lightblue text-white" data-v-50d3a599><div class="flex flex-col w-1/3" data-v-50d3a599><p data-v-50d3a599>Bew\xE4sserung</p><p data-v-50d3a599>N\xE4hrstoffversorgung</p><p data-v-50d3a599>Ph-Management</p><p data-v-50d3a599>Wasserbezug</p><p data-v-50d3a599>Klimamanagement</p></div></div></div></div></div></div></section><section data-v-50d3a599>`);
      _push(ssrRenderComponent(ShowcaseCarousel, null, null, _parent));
      _push(`</section><section id="benefits" class="flex flex-col text-primary min-h-screen" data-v-50d3a599><div class="flex flex-col bg-secondary text-white" data-v-50d3a599><p class="text-large font-semibold mt-6 mb-8 text-center justify-top" data-v-50d3a599> Vorteile auf einen Blick </p></div><div class="benefits-grid" data-v-50d3a599><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_6)} alt="Benefit 1 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Hybrides Monitoring </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Messung und Auswertung aller relevanten Einflussfaktoren </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_7)} alt="Benefit 2 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Automatische Versorgung </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Kabellose, modulare Plug and Play Automatisierung </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_8)} alt="Benefit 3 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Intelligente Gartenassistenz </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Interaktiv angeleitet, ohne Vorwissen, erfolgreich kultivieren </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_9)} alt="Benefit 4 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Smarthome Prinzip </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Kabellos, flexibel, unkompliziert, erweiterbar, g\xFCnstig </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_10)} alt="Benefit 5 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Zeitersparnis </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Weniger Zeit und M\xFChe, daf\xFCr mehr Zeit zum genie\xDFen </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_11)} alt="Benefit 6 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Mehr Ertrag </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Egal was du ernten willst, wir machen einfach mehr daraus </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_12)} alt="Benefit 7 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Versorgung in Abwesenheit </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Erfolgreich im Garten, trotz flexiblen Lebensstil </p></div><div class="flex flex-col" data-v-50d3a599><div class="benefit" data-v-50d3a599><img${ssrRenderAttr("src", _imports_13)} alt="Benefit 8 Image" class="benefit-image" data-v-50d3a599></div><p class="text-base mt-4 font-bold" data-v-50d3a599> Keine Sorgen mehr </p><p class="text-base2 mt-1 font-medium" data-v-50d3a599> Nichts im Leben ist sicher aber deine Pflanzen sind nah dran </p></div></div></section>`);
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50d3a599"]]);

export { index as default };
//# sourceMappingURL=index-DL0cjMiU.mjs.map
