import { reactive, hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, defineAsyncComponent, shallowRef, toRef as toRef$1, onServerPrefetch, isRef, defineComponent, computed, h, mergeProps, unref, useSSRContext, withCtx, renderSlot, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, toValue, useSlots, provide, shallowReactive, Suspense, Fragment, resolveComponent, effectScope, toRefs, createTextVNode, withModifiers, renderList, resolveDynamicComponent, useId, nextTick, createApp, getCurrentScope, onScopeDispose, readonly, customRef, onErrorCaptured, isReadonly, isShallow, isReactive, toRaw } from 'vue';
import { $ as $fetch$1, C as baseURL, D as defuFn, E as klona, F as parseQuery, A as defu, G as isEqual, H as getContext, I as createHooks, c as createError$1, J as hasProtocol, o as joinURL, K as diff, L as isScriptProtocol, M as withQuery, N as sanitizeStatusCode, O as withTrailingSlash, x as withoutTrailingSlash, P as toRouteMatcher, Q as createRouter$1 } from '../nitro/nitro.mjs';
import { CapoPlugin, getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { events } from 'fetch-event-stream';
import qs from 'qs';
import { Icon, getIcon, loadIcon as loadIcon$1, _api, disableCache, addAPIProvider, setCustomIconsLoader } from '@iconify/vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrRenderAttrs, ssrRenderSuspense } from 'vue/server-renderer';
import { useForwardProps, AvatarRoot, AvatarImage, AvatarFallback, Primitive, useForwardPropsEmits, ToastRoot, ToastTitle, ToastDescription, ToastAction, ToastClose, ToastProvider, ToastPortal, ToastViewport, ConfigProvider, TooltipProvider } from 'reka-ui';
import { getIconCSS } from '@iconify/utils/lib/css/icon';
import { tv } from 'tailwind-variants';
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

/**
 * Vue3 Cookies v1.0.0
 *
 * Forked from
 * https://github.com/cmp-cc/vue-cookies
 * And changed format to support Vue.js 3
 *
 */
var defaultConfig = {
    expireTimes: "1d",
    path: "; path=/",
    domain: "",
    secure: false,
    sameSite: "; SameSite=Lax",
};
var VueCookiesManager = /** @class */ (function () {
    function VueCookiesManager() {
        this.current_default_config = defaultConfig;
    }
    VueCookiesManager.prototype.config = function (config) {
        for (var propertyName in this.current_default_config) {
            this.current_default_config[propertyName] = config[propertyName]
                ? config[propertyName]
                : defaultConfig[propertyName];
        }
    };
    VueCookiesManager.prototype.get = function (keyName) {
        var value = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" +
            encodeURIComponent(keyName).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        if (value &&
            value.substring(0, 1) === "{" &&
            value.substring(value.length - 1, value.length) === "}") {
            try {
                value = JSON.parse(value);
            }
            catch (e) {
                return value;
            }
        }
        return value;
    };
    VueCookiesManager.prototype.set = function (keyName, value, expireTimes, path, domain, secure, sameSite) {
        if (!keyName) {
            throw new Error("Cookie name is not found in the first argument.");
        }
        else if (/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(keyName)) {
            throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: ' +
                keyName);
        }
        // support json object
        if (value && value.constructor === Object) {
            value = JSON.stringify(value);
        }
        var _expires = "";
        if (expireTimes == undefined) {
            expireTimes = this.current_default_config.expireTimes
                ? this.current_default_config.expireTimes
                : "";
        }
        if (expireTimes && expireTimes != 0) {
            switch (expireTimes.constructor) {
                case Number:
                    if (expireTimes === Infinity || expireTimes === -1)
                        _expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                    else
                        _expires = "; max-age=" + expireTimes;
                    break;
                case String:
                    if (/^(?:\d+(y|m|d|h|min|s))$/i.test(expireTimes)) {
                        // get capture number group
                        var _expireTime = expireTimes.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
                        // get capture type group , to lower case
                        switch (expireTimes
                            .replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1")
                            .toLowerCase()) {
                            // Frequency sorting
                            case "m":
                                _expires = "; max-age=" + +_expireTime * 2592000;
                                break; // 60 * 60 * 24 * 30
                            case "d":
                                _expires = "; max-age=" + +_expireTime * 86400;
                                break; // 60 * 60 * 24
                            case "h":
                                _expires = "; max-age=" + +_expireTime * 3600;
                                break; // 60 * 60
                            case "min":
                                _expires = "; max-age=" + +_expireTime * 60;
                                break; // 60
                            case "s":
                                _expires = "; max-age=" + _expireTime;
                                break;
                            case "y":
                                _expires = "; max-age=" + +_expireTime * 31104000;
                                break; // 60 * 60 * 24 * 30 * 12
                        }
                    }
                    else {
                        _expires = "; expires=" + expireTimes;
                    }
                    break;
                case Date:
                    _expires = "; expires=" + expireTimes.toUTCString();
                    break;
            }
        }
        document.cookie =
            encodeURIComponent(keyName) +
                "=" +
                encodeURIComponent(value) +
                _expires +
                (domain
                    ? "; domain=" + domain
                    : this.current_default_config.domain
                        ? this.current_default_config.domain
                        : "") +
                (path
                    ? "; path=" + path
                    : this.current_default_config.path
                        ? this.current_default_config.path
                        : "; path=/") +
                (secure == undefined
                    ? this.current_default_config.secure
                        ? "; Secure"
                        : ""
                    : secure
                        ? "; Secure"
                        : "") +
                (sameSite == undefined
                    ? this.current_default_config.sameSite
                        ? "; SameSute=" + this.current_default_config.sameSite
                        : ""
                    : sameSite
                        ? "; SameSite=" + sameSite
                        : "");
        return this;
    };
    VueCookiesManager.prototype.remove = function (keyName, path, domain) {
        if (!keyName || !this.isKey(keyName)) {
            return false;
        }
        document.cookie =
            encodeURIComponent(keyName) +
                "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
                (domain
                    ? "; domain=" + domain
                    : this.current_default_config.domain
                        ? this.current_default_config.domain
                        : "") +
                (path
                    ? "; path=" + path
                    : this.current_default_config.path
                        ? this.current_default_config.path
                        : "; path=/") +
                "; SameSite=Lax";
        return true;
    };
    VueCookiesManager.prototype.isKey = function (keyName) {
        return new RegExp("(?:^|;\\s*)" +
            encodeURIComponent(keyName).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=").test(document.cookie);
    };
    VueCookiesManager.prototype.keys = function () {
        if (!document.cookie)
            return [];
        var _keys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (var _index = 0; _index < _keys.length; _index++) {
            _keys[_index] = decodeURIComponent(_keys[_index]);
        }
        return _keys;
    };
    return VueCookiesManager;
}());
var GLOBAL_COOKIES_MANAGER = null;
function useCookies() {
    if (GLOBAL_COOKIES_MANAGER == null) {
        GLOBAL_COOKIES_MANAGER = new VueCookiesManager();
    }
    var cookies = reactive(GLOBAL_COOKIES_MANAGER);
    return { cookies: cookies };
}

var _a, _b, _c, _d, _e;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a2;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: undefined,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a2 = options.ssrContext) == null ? undefined : _a2.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b2, _c2, _d2;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a3;
    const unresolvedPluginsForThisPlugin = ((_a3 = plugin2.dependsOn) == null ? undefined : _a3.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? undefined : _a2.islandContext) && ((_b2 = plugin2.env) == null ? undefined : _b2.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c2 = nuxtApp.ssrContext) == null ? undefined : _c2.islandContext) && ((_d2 = plugin2.env) == null ? undefined : _d2.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? undefined : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? undefined : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? undefined : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? undefined : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? undefined : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : undefined);
        return to;
      }
      return redirect(!inMiddleware ? undefined : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? undefined : options.replace) {
      (undefined).replace(toPath);
    } else {
      (undefined).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? undefined : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef$1(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
[CapoPlugin({ track: true })];
const unhead_Uk13qZHRya = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== undefined) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === undefined) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = undefined;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = undefined;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : undefined;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? undefined : _a2.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? undefined : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? undefined : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const __nuxt_page_meta$4 = {
  layout: "shop"
  // hier den Dateinamen ohne .vue
};
const __nuxt_page_meta$3 = {
  layout: "shop"
  // hier den Dateinamen ohne .vue
};
const __nuxt_page_meta$2 = {
  layout: "shop"
  // hier den Dateinamen ohne .vue
};
const __nuxt_page_meta$1 = {
  layout: "shop"
  // hier den Dateinamen ohne .vue
};
const __nuxt_page_meta = {
  layout: "shop"
  // hier den Dateinamen ohne .vue
};
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "automatisierung",
    path: "/automatisierung",
    meta: __nuxt_page_meta$4,
    component: () => import('./automatisierung-f6Vfjme6.mjs')
  },
  {
    name: "bundle",
    path: "/bundle",
    meta: __nuxt_page_meta$3,
    component: () => import('./index-Cor3UpFI.mjs')
  },
  {
    name: "datenschutz",
    path: "/datenschutz",
    component: () => import('./datenschutz-CUFBmPfT.mjs')
  },
  {
    name: "impressum",
    path: "/impressum",
    component: () => import('./impressum-BKSe5cn1.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-DL0cjMiU.mjs')
  },
  {
    name: "plantomio",
    path: "/plantomio",
    meta: __nuxt_page_meta$2,
    component: () => import('./plantomio-DUr_ECvR.mjs')
  },
  {
    name: "produkte-handle",
    path: "/produkte/:handle()",
    meta: __nuxt_page_meta$1,
    component: () => import('./_handle_-D3f44INt.mjs')
  },
  {
    name: "produkte",
    path: "/produkte",
    meta: __nuxt_page_meta,
    component: () => import('./index-C13XRlwn.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a2;
    return (_a2 = children.default) == null ? undefined : _a2.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? undefined : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? undefined : _a2.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index2) => {
      var _a2, _b2;
      return comp.components && comp.components.default === ((_b2 = (_a2 = from.matched[index2]) == null ? undefined : _a2.components) == null ? undefined : _b2.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? undefined : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || undefined;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? undefined : _a2.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b2, _c2;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a2 = routerOptions.history) == null ? undefined : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (undefined).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (undefined).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b3, _c3, _d2;
      if (((_b3 = (_a3 = to.matched[0]) == null ? undefined : _a3.components) == null ? undefined : _b3.default) === ((_d2 = (_c3 = from.matched[0]) == null ? undefined : _c3.components) == null ? undefined : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b2 = nuxtApp.ssrContext) == null ? undefined : _b2.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? undefined : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c2 = nuxtApp.ssrContext) == null ? undefined : _c2.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a3, _b3;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? undefined : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? undefined : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_KNCP7Zgt8H = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const LazyContentDoc = defineAsyncComponent(() => import('./ContentDoc-BZpQsc3x.mjs').then((r) => r["default"] || r.default || r));
const LazyContentList = defineAsyncComponent(() => import('./ContentList-DOIbhUvu.mjs').then((r) => r["default"] || r.default || r));
const LazyContentNavigation = defineAsyncComponent(() => import('./ContentNavigation-C1jGPf7W.mjs').then((r) => r["default"] || r.default || r));
const LazyContentQuery = defineAsyncComponent(() => import('./ContentQuery-CoQhK3qZ.mjs').then((r) => r["default"] || r.default || r));
const LazyContentRenderer = defineAsyncComponent(() => import('./ContentRenderer-CYZiivOv.mjs').then((r) => r["default"] || r.default || r));
const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./ContentRendererMarkdown-BhITc0WN.mjs').then((r) => r["default"] || r.default || r));
const LazyContentSlot = defineAsyncComponent(() => import('./ContentSlot-CmPJABNJ.mjs').then((r) => r["default"] || r.default || r));
const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./DocumentDrivenEmpty-DLcFqaGU.mjs').then((r) => r["default"] || r.default || r));
const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./DocumentDrivenNotFound-Ce0ZKldP.mjs').then((r) => r["default"] || r.default || r));
const LazyMarkdown = defineAsyncComponent(() => import('./Markdown-CSiQmimn.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCode = defineAsyncComponent(() => import('./ProseCode-DHG_vBB9.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCodeInline = defineAsyncComponent(() => import('./ProseCodeInline-Cc6Nq55B.mjs').then((r) => r["default"] || r.default || r));
const LazyProsePre = defineAsyncComponent(() => import('./ProsePre-Da7HFMZ7.mjs').then((r) => r["default"] || r.default || r));
const LazyProseA = defineAsyncComponent(() => import('./ProseA-CN-VqOKM.mjs').then((r) => r["default"] || r.default || r));
const LazyProseBlockquote = defineAsyncComponent(() => import('./ProseBlockquote-i3ovEvyJ.mjs').then((r) => r["default"] || r.default || r));
const LazyProseEm = defineAsyncComponent(() => import('./ProseEm-BwKl88gV.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH1 = defineAsyncComponent(() => import('./ProseH1-6jEP8HfR.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH2 = defineAsyncComponent(() => import('./ProseH2-YK6c7wjC.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH3 = defineAsyncComponent(() => import('./ProseH3-EGztcdPU.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH4 = defineAsyncComponent(() => import('./ProseH4-BR0zt9yd.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH5 = defineAsyncComponent(() => import('./ProseH5-BX5kUA5s.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH6 = defineAsyncComponent(() => import('./ProseH6-BE1uLLc9.mjs').then((r) => r["default"] || r.default || r));
const LazyProseHr = defineAsyncComponent(() => import('./ProseHr-_T4Esz5V.mjs').then((r) => r["default"] || r.default || r));
const LazyProseImg = defineAsyncComponent(() => import('./ProseImg-CTj4l6PI.mjs').then((r) => r["default"] || r.default || r));
const LazyProseLi = defineAsyncComponent(() => import('./ProseLi-CGIjluj_.mjs').then((r) => r["default"] || r.default || r));
const LazyProseOl = defineAsyncComponent(() => import('./ProseOl-DfNtLxL_.mjs').then((r) => r["default"] || r.default || r));
const LazyProseP = defineAsyncComponent(() => import('./ProseP-B4gSUHp8.mjs').then((r) => r["default"] || r.default || r));
const LazyProseScript = defineAsyncComponent(() => import('./ProseScript-B_mtihSo.mjs').then((r) => r["default"] || r.default || r));
const LazyProseStrong = defineAsyncComponent(() => import('./ProseStrong-4x3nVpVK.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTable = defineAsyncComponent(() => import('./ProseTable-BaE96cTY.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTbody = defineAsyncComponent(() => import('./ProseTbody-ClYOsLle.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTd = defineAsyncComponent(() => import('./ProseTd-Ci2Qd2-f.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTh = defineAsyncComponent(() => import('./ProseTh-aBOi3IrX.mjs').then((r) => r["default"] || r.default || r));
const LazyProseThead = defineAsyncComponent(() => import('./ProseThead-kV_kCqom.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTr = defineAsyncComponent(() => import('./ProseTr-LpuRwzog.mjs').then((r) => r["default"] || r.default || r));
const LazyProseUl = defineAsyncComponent(() => import('./ProseUl-bfeMYVx1.mjs').then((r) => r["default"] || r.default || r));
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return index;
}).then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["ContentDoc", LazyContentDoc],
  ["ContentList", LazyContentList],
  ["ContentNavigation", LazyContentNavigation],
  ["ContentQuery", LazyContentQuery],
  ["ContentRenderer", LazyContentRenderer],
  ["ContentRendererMarkdown", LazyContentRendererMarkdown],
  ["MDCSlot", LazyContentSlot],
  ["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
  ["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
  ["Markdown", LazyMarkdown],
  ["ProseCode", LazyProseCode],
  ["ProseCodeInline", LazyProseCodeInline],
  ["ProsePre", LazyProsePre],
  ["ProseA", LazyProseA],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseEm", LazyProseEm],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProseScript", LazyProseScript],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl],
  ["Icon", LazyIcon]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _b2;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : undefined;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b2 = nuxtApp.payload._errors)[key] ?? (_b2[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef$1(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = undefined;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = undefined;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = undefined;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : undefined;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== undefined && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef$1(nuxtApp.payload.state, key);
  if (state.value === undefined && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== undefined);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link2) {
    return typeof link2 === "string" && link2.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== undefined ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: undefined,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : undefined;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link2 = isExternal.value ? undefined : useBuiltinLink == null ? undefined : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a2;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a2 = router.resolve(to.value)) == null ? undefined : _a2.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link2 == null ? undefined : link2.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link2 == null ? undefined : link2.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link2 == null ? undefined : link2.route) ?? computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: undefined,
        required: false
      },
      href: {
        type: [String, Object],
        default: undefined,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: undefined,
        required: false
      },
      rel: {
        type: String,
        default: undefined,
        required: false
      },
      noRel: {
        type: Boolean,
        default: undefined,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: undefined,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: undefined,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: undefined,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: undefined,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: undefined,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: undefined,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: undefined,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: undefined,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: undefined,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: undefined,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = undefined;
      const elRef = undefined;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a2;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || undefined;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return undefined;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: undefined,
                matched: [],
                redirectedFrom: undefined,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a2 = slots.default) == null ? undefined : _a2.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const inlineConfig = {
  "nuxt": {},
  "ui": {
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    },
    "icons": {
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "ellipsis": "i-lucide-ellipsis",
      "external": "i-lucide-arrow-up-right",
      "loading": "i-lucide-refresh-cw",
      "minus": "i-lucide-minus",
      "plus": "i-lucide-plus",
      "search": "i-lucide-search"
    }
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "cssLayer": "components",
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};
const _appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(_appConfig);
  }
  return nuxtApp._appConfig;
}
var __awaiter$H = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ApiKey {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This methods retrieves a paginated list of API keys. It sends a request to the
   * [List API Keys](https://docs.medusajs.com/api/admin#api-keys_getapikeys) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of API keys.
   *
   * @example
   * To retrieve the list of API keys:
   *
   * ```ts
   * sdk.admin.apiKey.list()
   * .then(({ api_keys, count, limit, offset }) => {
   *   console.log(api_keys)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.apiKey.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ api_keys, count, limit, offset }) => {
   *   console.log(api_keys)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each API key:
   *
   * ```ts
   * sdk.admin.apiKey.list({
   *   fields: "id,*sales_channels"
   * })
   * .then(({ api_keys, count, limit, offset }) => {
   *   console.log(api_keys)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method creates an API key. It sends a request to the [Create API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeys)
   * API route.
   *
   * @param body - The API key's details.
   * @param query - Configure the fields to retrieve in the created API key.
   * @param headers - Headers to pass in the request
   * @returns The created API key
   *
   * @example
   * sdk.admin.apiKey.create({
   *   title: "Development",
   *   type: "publishable"
   * })
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  create(body, query, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method revokes an API key. It sends a request to the
   * [Revoke API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysidrevoke) API route.
   *
   * @param id - The API key's ID.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.revoke("apk_123")
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  revoke(id, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}/revoke`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method retrieves an API key's details. It sends a request to the
   * [Get API key](https://docs.medusajs.com/api/admin#api-keys_getapikeysid) API route.
   *
   * @param id - The API key's ID.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.retrieve("apk_123")
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  retrieve(id, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}`, {
        headers
      });
    });
  }
  /**
   * This method updates an API key's details. It sends a request to the
   * [Update API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysid) API route.
   *
   * @param id - The API key's ID.
   * @param body - The data to update in the API key.
   * @param query - Configure the fields to retrieve in the API key.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.update("apk_123", {
   *   title: "Development"
   * })
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes an API key by its ID. It sends a request to the
   * [Delete API Key](https://docs.medusajs.com/api/admin#api-keys_deleteapikeysid) API route.
   *
   * @param id - The API key's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.apiKey.delete("apk_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the sales channels associated with a publishable API key to either add
   * or remove associations. It sends a request to the [Manage Sales Channels](https://docs.medusajs.com/api/admin#api-keys_postapikeysidsaleschannels)
   * API route.
   *
   * @param id - The API key's ID.
   * @param body - The sales channels to add or remove from the API key.
   * @param headers - Headers to pass in the request.
   * @returns The API key's details.
   *
   * @example
   * sdk.admin.apiKey.batchSalesChannels("apk_123", {
   *   add: ["sc_123"],
   *   remove: ["sc_321"]
   * })
   * .then(({ api_key }) => {
   *   console.log(api_key)
   * })
   */
  batchSalesChannels(id, body, headers) {
    return __awaiter$H(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/api-keys/${id}/sales-channels`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$G = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Campaign {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a campaign by its ID. It sends a request to the
   * [Get Campaign](https://docs.medusajs.com/api/admin#campaigns_getcampaignsid) API route.
   *
   * @param id - The campaign's ID.
   * @param query - Configure the fields to retrieve in the campaign.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * To retrieve a campaign by its ID:
   *
   * ```ts
   * sdk.admin.campaign.retrieve("procamp_123")
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.campaign.retrieve("procamp_123", {
   *   fields: "id,*budget"
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$G(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of campaigns. It sends a request to the
   * [List Campaigns](https://docs.medusajs.com/api/admin#campaigns_getcampaigns) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of campaigns.
   *
   * @example
   * To retrieve the list of campaigns:
   *
   * ```ts
   * sdk.admin.campaign.list()
   * .then(({ campaigns, count, limit, offset }) => {
   *   console.log(campaigns)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.campaign.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ campaigns, count, limit, offset }) => {
   *   console.log(campaigns)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each campaign:
   *
   * ```ts
   * sdk.admin.campaign.list({
   *   fields: "id,*budget"
   * })
   * .then(({ campaigns, count, limit, offset }) => {
   *   console.log(campaigns)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$G(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/campaigns`, {
        headers,
        query
      });
    });
  }
  /**
   * This method creates a campaign. It sends a request to the
   * [Create Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaigns) API route.
   *
   * @param payload - The details of the campaign to create.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * sdk.admin.campaign.create({
   *   name: "Summer Campaign"
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   */
  create(payload, headers) {
    return __awaiter$G(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/campaigns`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  /**
   * This method updates a campaign. It sends a request to the
   * [Update Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaignsid) API route.
   *
   * @param id - The campaign's ID.
   * @param payload - The data to update in the campaign.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   *
   * @example
   * sdk.admin.campaign.update("procamp_123", {
   *   name: "Summer Campaign"
   * })
   * .then(({ campaign }) => {
   *   console.log(campaign)
   * })
   */
  update(id, payload, headers) {
    return __awaiter$G(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  /**
   * This method deletes a campaign by its ID. It sends a request to the
   * [Delete Campaign](https://docs.medusajs.com/api/admin#campaigns_deletecampaignsid) API route.
   *
   * @param id - The campaign's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.campaign.delete("procamp_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$G(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the promotions of a campaign to either add or remove the association between them.
   * It sends a request to the [Manage Promotions](https://docs.medusajs.com/api/admin#campaigns_postcampaignsidpromotions)
   * API route.
   *
   * @param id - The campaign's ID.
   * @param payload - The promotions to add or remove associations to them.
   * @param headers - Headers to pass in the request
   * @returns The campaign's details.
   */
  batchPromotions(id, payload, headers) {
    return __awaiter$G(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/campaigns/${id}/promotions`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
}
var __awaiter$F = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Claim {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of claims. It sends a request to the
   * [List Claims](https://docs.medusajs.com/api/admin#claims_getclaims) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of claims.
   *
   * @example
   * To retrieve the list of claims:
   *
   * ```ts
   * sdk.admin.claim.list()
   * .then(({ claims, count, limit, offset }) => {
   *   console.log(claims)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.claim.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ claims, count, limit, offset }) => {
   *   console.log(claims)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each claim:
   *
   * ```ts
   * sdk.admin.claim.list({
   *   fields: "id,*additional_items"
   * })
   * .then(({ claims, count, limit, offset }) => {
   *   console.log(claims)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a claim. It sends a request to the
   * [Get Claim](https://docs.medusajs.com/api/admin#claims_getclaimsid) API route.
   *
   * @param id - The claim's ID.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details.
   *
   * @example
   * To retrieve a claim by its ID:
   *
   * ```ts
   * sdk.admin.claim.retrieve("claim_123")
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.claim.retrieve("claim_123", {
   *   fields: "id,*additional_items"
   * })
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method creates a claim. It sends a request to the
   * [Create Claim](https://docs.medusajs.com/api/admin#claims_postclaims) API route.
   *
   * @param body - The claim's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim and order's details.
   *
   * @example
   * sdk.admin.claim.create({
   *   type: "refund",
   *   order_id: "order_123",
   * })
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  create(body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a claim. It sends a request to the
   * [Cancel Claim](https://docs.medusajs.com/api/admin#claims_postclaimsidcancel) API route.
   *
   * @param id - The claim's ID.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details.
   *
   * @example
   * sdk.admin.claim.cancel("claim_123")
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/cancel`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method adds items to the claim. It sends a request to the
   * [Add Items](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitems) API route.
   *
   * @param id - The ID of the claim to add the items to.
   * @param body - The items' details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addItems("claim_123", {
   *   items: [
   *     {
   *       id: "orli_123",
   *       quantity: 1
   *     }
   *   ]
   * })
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  addItems(id, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/claim-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a claim item by the ID of the item's `WRITE_OFF_ITEM` action. It
   * sends a request to the [Update Claim Item](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitemsaction_id) API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateItem(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   }
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateItem(id, actionId, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes a claim item from a claim by the ID of the item's `WRITE_OFF_ITEM` action.
   * It sends a request to the [Remove Claim Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidclaimitemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The claim's details with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.removeItem(
   *   "claim_123",
   *   "ordchact_123",
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  removeItem(id, actionId, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds inbound (or return) items to the claim. These inbound items will have a `RETURN_ITEM` action.
   *
   * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditems)
   * API route.
   *
   * @param id - The ID of the claim to add the inbound items to.
   * @param body - The inbound items' details.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated with the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addInboundItems(
   *   "claim_123",
   *   {
   *     items: [
   *       {
   *         id: "orli_123",
   *         quantity: 1
   *       }
   *     ]
   *   },
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundItems(id, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an inbound (or return) item of a claim using the ID of the item's `RETURN_ITEM` action.
   * It sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the return item's `RETURN_ITEM` action.
   * @param body - The details to update in the inbound item.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateInboundItem(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   },
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  updateInboundItem(id, actionId, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an inbound (or return) item from a claim using the ID of the item's `RETURN_ITEM` action.
   * It sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The ID of the return item's `RETURN_ITEM` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.removeInboundItem(
   *   "claim_123",
   *   "ordchact_123",
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  removeInboundItem(id, actionId, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an inbound (or return) shipping method to a claim.
   * The inbound shipping method will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethod)
   * API route.
   *
   * @param id - The claim's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addInboundShipping(
   *   "claim_123",
   *   {
   *     shipping_option_id: "so_123",
   *     custom_amount: 10
   *   },
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundShipping(id, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
   * It sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethodaction_id)
   * API route.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details to update in the shipping method
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateInboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     custom_amount: 10
   *   },
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateInboundShipping(id, actionId, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
   * It sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinboundshippingmethodaction_id)
   * API route.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request
   * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.deleteInboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   *   )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  deleteInboundShipping(id, actionId, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds outbound (or new) items to a claim. These outbound items will have an `ITEM_ADD` action.
   * It sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditems)
   * API route.
   *
   * @param id - The ID of the claim to add the outbound items to.
   * @param body - The items' details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.addOutboundItems(
   *   "claim_123",
   *   {
   *     items: [{
   *       id: "orli_123",
   *       quantity: 1
   *     }]
   *   },
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  addOutboundItems(id, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an outbound (or new) item of a claim using the ID of the item's `ITEM_ADD` action.
   * It sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the new claim item's `ITEM_ADD` action.
   * @param body - The item's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateOutboundItem(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   },
   *   )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateOutboundItem(id, actionId, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an outbound (or new) item from a claim using the ID of the item's `ITEM_ADD` action.
   * It sends a request to the [Remove Outbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidoutbounditemsaction_id)
   * API route.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the new claim item's `ITEM_ADD` action.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.removeOutboundItem(
   *   "claim_123",
   *   "ordchact_123",
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  removeOutboundItem(id, actionId, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds outbound an outbound shipping method to a claim.
   * The outbound shipping method will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the
   * [Add Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethod)
   * API route.
   *
   * @param id - The claim's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   *    * sdk.admin.claim.addOutboundShipping(
   *   "claim_123",
   *   {
   *     shipping_option_id: "so_123",
   *     custom_amount: 10
   *   },
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  addOutboundShipping(id, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the shipping method for delivering outbound items in a claim using the ID of the method's `SHIPPING_ADD` action.
   * It sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethodaction_id)
   * API route.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.updateOutboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   *   {
   *     custom_amount: 10
   *   },
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  updateOutboundShipping(id, actionId, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes the shipping method for delivering outbound items in the claim using the ID of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The claim's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.deleteOutboundShipping(
   *   "claim_123",
   *   "ordchact_123",
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  deleteOutboundShipping(id, actionId, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms a claim request, applying its changes on the associated order.
   * It sends a request to the [Confirm Claim Request](https://docs.medusajs.com/api/admin#claims_postclaimsidrequest)
   * API route.
   *
   * @param id - The claim's ID.
   * @param body - The confirmation details.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The details of the claim and its associated return, with a preview of the order when the claim is applied.
   *
   * @example
   * sdk.admin.claim.request(
   *   "claim_123",
   *   {},
   * )
   * .then(({ claim }) => {
   *   console.log(claim)
   * })
   */
  request(id, body, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/request`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a requested claim. It sends a request to the
   * [Cancel Claim Request](https://docs.medusajs.com/api/admin#claims_deleteclaimsidrequest)
   * API route.
   *
   * @param id - The claim's ID.
   * @param query - Configure the fields to retrieve in the claim.
   * @param headers - Headers to pass in the request
   * @returns The cancelation's details.
   *
   * @example
   * sdk.admin.claim.cancelRequest(
   *   "claim_123",
   * )
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter$F(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/claims/${id}/request`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
}
var __awaiter$E = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Currency {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of currencies. It sends a request to the
   * [List Currencies](https://docs.medusajs.com/api/admin#currencies_getcurrencies)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of currencies.
   *
   * @example
   * To retrieve the list of currencies:
   *
   * ```ts
   * sdk.admin.currency.list()
   * .then(({ currencies, count, limit, offset }) => {
   *   console.log(currencies)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.currency.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ currencies, count, limit, offset }) => {
   *   console.log(currencies)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each currency:
   *
   * ```ts
   * sdk.admin.currency.list({
   *   fields: "code,symbol"
   * })
   * .then(({ currencies, count, limit, offset }) => {
   *   console.log(currencies)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$E(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/currencies`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a currency by its code. It sends a request to the
   * [Get Currency](https://docs.medusajs.com/api/admin#currencies_getcurrenciescode) API route.
   *
   * @param code - The currency's code.
   * @param query - Configure the fields to retrieve in the currency.
   * @param headers - Headers to pass in the request
   * @returns The currency's details.
   *
   * @example
   * To retrieve a currency by its code:
   *
   * ```ts
   * sdk.admin.currency.retrieve("usd")
   * .then(({ currency }) => {
   *   console.log(currency)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.currency.retrieve("usd", {
   *   fields: "code,symbol"
   * })
   * .then(({ currency }) => {
   *   console.log(currency)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(code, query, headers) {
    return __awaiter$E(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/currencies/${code}`, {
        headers,
        query
      });
    });
  }
}
var __awaiter$D = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Customer {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a customer. It sends a request to the
   * [Create Customer](https://docs.medusajs.com/api/admin#customers_postcustomers) API route.
   *
   * @param body - The customer's details.
   * @param query - Configure the fields to retrieve in the customer.
   * @param headers - Headers to pass in the request.
   * @returns The customer's details.
   *
   * @example
   * sdk.admin.customer.create({
   *   email: "customer@gmail.com"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  create(body, query, headers) {
    return __awaiter$D(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/customers`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a customer's details. It sends a request to the
   * [Update Customer](https://docs.medusajs.com/api/admin#customers_postcustomersid) API route.
   *
   * @param id - The customer's ID.
   * @param body - The details to update of the customer.
   * @param query - Configure the fields to retrieve in the customer.
   * @param headers - Headers to pass in the request.
   * @returns The customer's details.
   *
   * @example
   * sdk.admin.customer.update("cus_123", {
   *   first_name: "John"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$D(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/customers/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of customers. It sends a request to the
   * [List Customers](https://docs.medusajs.com/api/admin#customers_getcustomers)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of customers.
   *
   * @example
   * To retrieve the list of customers:
   *
   * ```ts
   * sdk.admin.customer.list()
   * .then(({ customers, count, limit, offset }) => {
   *   console.log(customers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.customer.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ customers, count, limit, offset }) => {
   *   console.log(customers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each customer:
   *
   * ```ts
   * sdk.admin.customer.list({
   *   fields: "id,*groups"
   * })
   * .then(({ customers, count, limit, offset }) => {
   *   console.log(customers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter$D(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/customers`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a customer by its ID. It sends a request to the
   * [Get Customer](https://docs.medusajs.com/api/admin#customers_getcustomersid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param query - Configure the fields to retrieve in the customer.
   * @param headers - Headers to pass in the request.
   * @returns The customer's details.
   *
   * @example
   * To retrieve a customer by its ID:
   *
   * ```ts
   * sdk.admin.customer.retrieve("cus_123")
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.customer.retrieve("cus_123", {
   *   fields: "id,*groups"
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$D(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/customers/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a customer by its ID. It sends a request to the
   * [Delete Customer](https://docs.medusajs.com/api/admin#customers_deletecustomersid)
   * API route.
   *
   * @param id - The customer's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.customer.delete("cus_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$D(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/customers/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages customer groups for a customer.
   * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customers_postcustomersidcustomergroups)
   * API route.
   *
   * @param id - The customer's ID.
   * @param body - The groups to add customer to or remove customer from.
   * @param headers - Headers to pass in the request
   * @returns The customers details.
   *
   * @example
   * sdk.admin.customer.batchCustomerGroups("cus_123", {
   *   add: ["cusgroup_123"],
   *   remove: ["cusgroup_321"]
   * })
   * .then(({ customer }) => {
   *   console.log(customer)
   * })
   */
  batchCustomerGroups(id, body, headers) {
    return __awaiter$D(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customers/${id}/customer-groups`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$C = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class CustomerGroup {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a customer group by its ID. It sends a request to the
   * [Get Customer Group](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroupsid) API route.
   *
   * @param id - The customer group's ID.
   * @param query - Configure the fields to retrieve in the customer group.
   * @param headers - Headers to pass in the request
   * @returns The group's details.
   *
   * @example
   * To retrieve a customer group by its ID:
   *
   * ```ts
   * sdk.admin.customerGroup.retrieve("cusgroup_123")
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.customerGroup.retrieve("cusgroup_123", {
   *   fields: "id,*customer"
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$C(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}`, {
        method: "GET",
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of customer groups. It sends a request to the
   * [List Customer Groups](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroups)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of customer groups.
   *
   * @example
   * To retrieve the list of customer groups:
   *
   * ```ts
   * sdk.admin.customerGroup.list()
   * .then(({ customer_groups, count, limit, offset }) => {
   *   console.log(customer_groups)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.customerGroup.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ customer_groups, count, limit, offset }) => {
   *   console.log(customer_groups)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each customer group:
   *
   * ```ts
   * sdk.admin.customerGroup.list({
   *   fields: "id,*customer"
   * })
   * .then(({ customer_groups, count, limit, offset }) => {
   *   console.log(customer_groups)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$C(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customer-groups`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method creates a customer group. It sends a request to the
   * [Create Customer Group](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroups)
   * API route.
   *
   * @param body - The customer group's details.
   * @param query - Configure the fields to retrieve in the customer group.
   * @param headers - Headers to pass in the request.
   * @returns The customer group's details.
   *
   * @example
   * sdk.admin.customerGroup.create({
   *   name: "VIP"
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   */
  create(body, query, headers) {
    return __awaiter$C(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customer-groups`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a customer group's details. It sends a request to the
   * [Update Customer](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsid)
   * API route.
   *
   * @param id - The customer group's ID.
   * @param body - The details to update in the group.
   * @param query - Configure the fields to retrieve in the customer group.
   * @param headers - Headers to pass in the request.
   * @returns The customer group's details.
   *
   * @example
   * sdk.admin.customerGroup.update("cusgroup_123", {
   *   name: "VIP"
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$C(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a customer group. This method sends a request to the
   * [Delete Customer Group](https://docs.medusajs.com/api/admin#customer-groups_deletecustomergroupsid)
   * API route.
   *
   * @param id - The customer group's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.customerGroup.delete("cusgroup_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$C(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages customers of a group to add or remove them from the group.
   * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsidcustomers)
   * API route.
   *
   * @param id - The group's ID.
   * @param body - The customers to add or remove from the group.
   * @param headers - Headers to pass in the request
   * @returns The customer group's details.
   *
   * @example
   * sdk.admin.customerGroup.batchCustomers("cusgroup_123", {
   *   add: ["cus_123"],
   *   remove: ["cus_321"]
   * })
   * .then(({ customer_group }) => {
   *   console.log(customer_group)
   * })
   */
  batchCustomers(id, body, headers) {
    return __awaiter$C(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/customer-groups/${id}/customers`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$B = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Exchange {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of exchanges. It sends a request to the
   * [List Exchanges](https://docs.medusajs.com/api/admin#exchanges_getexchanges)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of exchanges.
   *
   * @example
   * To retrieve the list of exchanges:
   *
   * ```ts
   * sdk.admin.exchange.list()
   * .then(({ exchanges, count, limit, offset }) => {
   *   console.log(exchanges)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.exchange.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ exchanges, count, limit, offset }) => {
   *   console.log(exchanges)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each exchange:
   *
   * ```ts
   * sdk.admin.exchange.list({
   *   fields: "id,*order"
   * })
   * .then(({ exchanges, count, limit, offset }) => {
   *   console.log(exchanges)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves an exchange by its ID. It sends a request to the
   * [Get Exchange](https://docs.medusajs.com/api/admin#exchanges_getexchangesid)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request.
   * @returns The exchange's details.
   *
   * @example
   * To retrieve an exchange by its ID:
   *
   * ```ts
   * sdk.admin.exchange.retrieve("exchange_123")
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.exchange.retrieve("exchange_123", {
   *   fields: "id,*order"
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method creates an admin exchange. It sends a request to the
   * [Create Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchanges) API route.
   *
   * @param body - The exchange's details.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request.
   * @returns The exchange's details.
   *
   * @example
   * sdk.admin.exchange.create({
   *   order_id: "order_123"
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  create(body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels an exchange. It sends a request to the
   * [Cancel Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidcancel) API route.
   *
   * @param id - The exchange's ID.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request.
   * @returns The exchange's details.
   *
   * @example
   * sdk.admin.exchange.cancel("exchange_123")
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/cancel`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method adds inbound (or return) items to an exchange. These inbound items will
   * have the action `RETURN_ITEM`.
   *
   * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditems)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The items to add.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addInboundItems("exchange_123", {
   *   items: [{
   *     id: "orli_123",
   *     quantity: 1
   *   }]
   * })
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundItems(id, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an inbound (or return) item from an exchange using the ID of
   * the item's `RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions. You can
   * check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the return item's `RETURN_ITEM` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateInboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  updateInboundItem(id, actionId, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an inbound (or return) item from an exchange using the ID of the
   * item's `RETURN_ITEM` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the return item's `RETURN_ITEM` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.removeInboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  removeInboundItem(id, actionId, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an inbound (or return) shipping method to an exchange.
   * The inbound shipping method will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
   * API route.
   *
   * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addInboundShipping("exchange_123", {
   *   shipping_option_id: "so_123"
   * })
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  addInboundShipping(id, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the shipping method for returning items in the exchange using the ID
   * of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateInboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   *    {
   *     custom_amount: 10
   *   }
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  updateInboundShipping(id, actionId, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes the shipping method for returning items in the exchange using the ID
   * of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the return.
   * @param headers - Headers to pass in the request.
   * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.deleteInboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ return: returnData }) => {
   *   console.log(returnData)
   * })
   */
  deleteInboundShipping(id, actionId, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds outbound (or new) items to an exchange.
   * These outbound items will have the action `ITEM_ADD`.
   *
   * This method sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditems)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The items to add.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addOutboundItems("exchange_123", {
   *   items: [{
   *     id: "variant_123",
   *     quantity: 1
   *   }]
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  addOutboundItems(id, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an outbound (or new) item from an exchange using the ID
   * of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
   * @param body - The item's details to update.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateOutboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  updateOutboundItem(id, actionId, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an outbound (or new) item from an exchange using the ID
   * of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutbounditemsaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.removeOutboundItem(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  removeOutboundItem(id, actionId, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds an outbound shipping method to an exchange. The outbound shipping method
   * will have a `SHIPPING_ADD` action.
   *
   * This method sends a request to the [Add Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethod)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The shipping method's details.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.addOutboundShipping("exchange_123", {
   *   shipping_option_id: "so_123"
   * })
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  addOutboundShipping(id, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the shipping method for delivering outbound items in the exchange using
   * the ID of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.updateOutboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   *   {
   *     custom_amount: 10
   *   }
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  updateOutboundShipping(id, actionId, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes the shipping method for delivering outbound items in the exchange using
   * the ID of the method's `SHIPPING_ADD` action.
   *
   * Every shipping method has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * This method sends a request to the [Remove Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutboundshippingmethodaction_id)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.deleteOutboundShipping(
   *   "exchange_123",
   *   "ordchact_123",
   * )
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  deleteOutboundShipping(id, actionId, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms an exchange request, applying its changes on the associated order.
   *
   * This method sends a request to the [Confirm Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidrequest)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param body - The confirmation's details.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The exchange and associated return's details with a preview of the order when the exchange is applied.
   *
   * @example
   * sdk.admin.exchange.request("exchange_123", {})
   * .then(({ exchange }) => {
   *   console.log(exchange)
   * })
   */
  request(id, body, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels an exchange request. It sends a request to the
   * [Cancel Exchange Request](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidrequest)
   * API route.
   *
   * @param id - The exchange's ID.
   * @param query - Configure the fields to retrieve in the exchange.
   * @param headers - Headers to pass in the request
   * @returns The cancelation's details.
   *
   * @example
   * sdk.admin.exchange.cancel("exchange_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter$B(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
}
var __awaiter$A = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Fulfillment {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a fulfillment. It sends a request to the
   * [Create Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillments)
   * API route.
   *
   * @param body - The fulfillment's details.
   * @param query - Configure the fields to retrieve in the fulfillment.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment's details.
   *
   * @example
   * sdk.admin.fulfillment.create({
   *   location_id: "sloc_123",
   *   provider_id: "my_fulfillment",
   *   delivery_address: {
   *     country_code: "us"
   *   },
   *   items: [
   *     {
   *       title: "Shirt",
   *       sku: "SHIRT",
   *       quantity: 1,
   *       barcode: "123"
   *     }
   *   ],
   *   labels: [],
   *   order: {},
   *   order_id: "order_123"
   * })
   * .then(({ fulfillment }) => {
   *   console.log(fulfillment)
   * })
   */
  create(body, query, headers) {
    return __awaiter$A(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillments`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels a fulfillment. It sends a request to the
   * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidcancel)
   * API route.
   *
   * @param id - The fulfillment's ID.
   * @param query - Configure the fields to retrieve in the fulfillment.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment's details.
   *
   * @example
   * sdk.admin.fulfillment.cancel("ful_123")
   * .then(({ fulfillment }) => {
   *   console.log(fulfillment)
   * })
   */
  cancel(id, query, headers) {
    return __awaiter$A(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillments/${id}`, {
        method: "POST",
        body: {},
        headers,
        query
      });
    });
  }
  /**
   * This method creates a shipment for a fulfillment. It sends a request to the
   * [Create Shipment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidshipment)
   * API route.
   *
   * @param id - The fulfillment's ID.
   * @param body - The shipment's details.
   * @param query - Configure the fields to retrieve in the fulfillment.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment's details.
   *
   * @example
   * sdk.admin.fulfillment.createShipment("ful_123", {
   *   labels: [
   *     {
   *       tracking_number: "123",
   *       tracking_url: "example.com",
   *       label_url: "example.com"
   *     }
   *   ]
   * })
   * .then(({ fulfillment }) => {
   *   console.log(fulfillment)
   * })
   */
  createShipment(id, body, query, headers) {
    return __awaiter$A(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillments/${id}/shipment`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
}
var __awaiter$z = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class FulfillmentProvider {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of fulfillment providers. It sends a request to the
   * [List Fulfillment Providers](https://docs.medusajs.com/api/admin#fulfillment-providers_getfulfillmentproviders)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of providers.
   *
   * @example
   * To retrieve the list of fulfillment providers:
   *
   * ```ts
   * sdk.admin.fulfillmentProvider.list()
   * .then(({ fulfillment_providers, count, limit, offset }) => {
   *   console.log(fulfillment_providers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.fulfillmentProvider.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ fulfillment_providers, count, limit, offset }) => {
   *   console.log(fulfillment_providers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each fulfillment provider:
   *
   * ```ts
   * sdk.admin.fulfillmentProvider.list({
   *   fields: "id"
   * })
   * .then(({ fulfillment_providers, count, limit, offset }) => {
   *   console.log(fulfillment_providers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$z(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-providers`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of fulfillment options for a given fulfillment provider. It sends a request to the
   * [List Fulfillment Options](https://docs.medusajs.com/api/admin#fulfillment-providers_getfulfillmentprovideroptions)
   * API route.
   *
   * @param id - The ID of the fulfillment provider.
   * @param headers - Headers to pass in the request.
   * @returns The list of fulfillment options.
   */
  listFulfillmentOptions(id, headers) {
    return __awaiter$z(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-providers/${id}/options`, {
        method: "GET",
        headers
      });
    });
  }
}
var __awaiter$y = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class FulfillmentSet {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method deletes a fulfillment set. It sends a request to the
   * [Delete Fulfillment Set](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsid)
   * API route.
   *
   * @param id - The fulfillment set's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.delete("fset_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$y(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method adds a service zone to a fulfillment set. It uses the
   * [Add Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezones)
   * API route.
   *
   * @param id - The fulfillment set's ID.
   * @param body - The service zone's details.
   * @param query - Configure the fields to retrieve in the fulfillment set.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment set's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.createServiceZone("fset_123", {
   *   name: "Europe Service Zone",
   *   geo_zones: [{
   *     type: "country",
   *     country_code: "us"
   *   }]
   * })
   * .then(({ fulfillment_set }) => {
   *   console.log(fulfillment_set)
   * })
   */
  createServiceZone(id, body, query, headers) {
    return __awaiter$y(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${id}/service-zones`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a fulfillment set's service zone's details. It sends a request to the
   * [Get Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_getfulfillmentsetsidservicezoneszone_id)
   * API route.
   *
   * @param fulfillmentSetId - The fulfillment set's ID.
   * @param serviceZoneId - The service zone's ID.
   * @param query - Configure the fields to retrieve in the service zone.
   * @param headers - Headers to pass in the request.
   * @returns The service zone's details.
   *
   * @example
   * To retrieve a fulfillment set's service zone by its ID:
   *
   * ```ts
   * sdk.admin.fulfillmentSet.retrieveServiceZone(
   *   "fset_123",
   *   "serzo_123"
   * )
   * .then(({ service_zone }) => {
   *   console.log(service_zone)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.fulfillmentSet.retrieveServiceZone(
   *   "fset_123",
   *   "serzo_123",
   *   {
   *     fields: "id,*geo_zones"
   *   }
   * )
   * .then(({ service_zone }) => {
   *   console.log(service_zone)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieveServiceZone(fulfillmentSetId, serviceZoneId, query, headers) {
    return __awaiter$y(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method updates a service zone in a fulfillment set. It sends a request to the
   * [Update Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezoneszone_id)
   * API route.
   *
   * @param fulfillmentSetId - The fulfillment set's ID.
   * @param serviceZoneId - The service zone's ID.
   * @param body - The data to update in the service zone.
   * @param query - Configure the fields to retrieve in the fulfillment set.
   * @param headers - Headers to pass in the request.
   * @returns The fulfillment set's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.updateServiceZone(
   *   "fset_123",
   *   "serzo_123",
   *   {
   *     name: "Europe Service Zone",
   *   }
   * )
   * .then(({ fulfillment_set }) => {
   *   console.log(fulfillment_set)
   * })
   */
  updateServiceZone(fulfillmentSetId, serviceZoneId, body, query, headers) {
    return __awaiter$y(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a service zone in a fulfillment set. It sends a request to the
   * [Remove Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsidservicezoneszone_id)
   * API route.
   *
   * @param fulfillmentSetId - The fulfullment set's ID.
   * @param serviceZoneId - The service zone's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.fulfillmentSet.deleteServiceZone(
   *   "fset_123",
   *   "serzo_123",
   * )
   * .then(({ deleted, parent: fulfillmentSet }) => {
   *   console.log(deleted, fulfillmentSet)
   * })
   */
  deleteServiceZone(fulfillmentSetId, serviceZoneId, headers) {
    return __awaiter$y(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$x = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class InventoryItem {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates an inventory item. It sends a request to the
   * [Create Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitems)
   * API route.
   *
   * @param body - The inventory item's details.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request.
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.create({
   *   sku: "SHIRT"
   * })
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   */
  create(body, query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an inventory level. It sends a request to the
   * [Update Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsid)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param body - The data to update.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request.
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.update("iitem_123", {
   *   sku: "SHIRT"
   * })
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of inventory items. It sends a request to the
   * [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of inventory items.
   *
   * @example
   * To retrieve the list of inventory items:
   *
   * ```ts
   * sdk.admin.inventoryItem.list()
   * .then(({ inventory_items, count, limit, offset }) => {
   *   console.log(inventory_items)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.inventoryItem.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ inventory_items, count, limit, offset }) => {
   *   console.log(inventory_items)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each inventory item:
   *
   * ```ts
   * sdk.admin.inventoryItem.list({
   *   fields: "id,*location_levels"
   * })
   * .then(({ inventory_items, count, limit, offset }) => {
   *   console.log(inventory_items)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves an inventory item by its ID. It sends a request to the
   * [Get Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitemsid) API route.
   *
   * @param id - The inventory item's ID.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * To retrieve an inventory item by its ID:
   *
   * ```ts
   * sdk.admin.inventoryItem.retrieve("iitem_123")
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.inventoryItem.retrieve("iitem_123", {
   *   fields: "id,*location_levels"
   * })
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes an inventory item. This sends a request to the
   * [Delete Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsid)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.inventoryItem.delete("iitem_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of inventory levels that belong to an inventory item.
   * It sends a request to the [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of inventory levels.
   *
   * @example
   * To retrieve the list of inventory levels:
   *
   * ```ts
   * sdk.admin.inventoryItem.listLevels("iitem_123")
   * .then(({ inventory_levels, count, limit, offset }) => {
   *   console.log(inventory_levels)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.inventoryItem.listLevels("iitem_123", {
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ inventory_levels, count, limit, offset }) => {
   *   console.log(inventory_levels)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each inventory level:
   *
   * ```ts
   * sdk.admin.inventoryItem.listLevels("iitem_123", {
   *   fields: "id,*inventory_item"
   * })
   * .then(({ inventory_levels, count, limit, offset }) => {
   *   console.log(inventory_levels)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listLevels(id, query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels`, {
        query,
        headers
      });
    });
  }
  /**
   * This method updates the inventory level of the specified inventory item and
   * stock location.
   *
   * This method sends a request to the
   * [Update Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelslocation_id)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param locationId - The stock location's ID.
   * @param body - The details to update.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.updateLevel(
   *   "iitem_123",
   *   "sloc_123",
   *   {
   *     stocked_quantity: 10
   *   }
   * )
   * .then(({ inventory_item }) => {
   *   console.log(inventory_item)
   * })
   */
  updateLevel(id, locationId, body, query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes an inventory level associated with an inventory item
   * and a stock location.
   *
   * This method sends a request to the
   * [Remove Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsidlocationlevelslocation_id)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param locationId - The stock location's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.inventoryItem.deleteLevel(
   *   "iitem_123",
   *   "sloc_123",
   * )
   * .then(({ deleted, parent: inventoryItem }) => {
   *   console.log(deleted, inventoryItem)
   * })
   */
  deleteLevel(id, locationId, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the inventory levels of an inventory item. It sends a request to the
   * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
   * API route.
   *
   * @deprecated Use `batchInventoryItemLocationLevels` instead.
   *
   * @param id - The inventory item's ID.
   * @param body - The inventory levels to create or delete.
   * @param query - Configure the fields to retrieve in the inventory item.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.batchUpdateLevels("iitem_123", {
   *   create: [{
   *     location_id: "sloc_123",
   *     stocked_quantity: 10
   *   }],
   *   delete: ["ilvl_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchUpdateLevels(id, body, query, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method manages the inventory levels of an inventory item. It sends a request to the
   * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
   * API route.
   *
   * @param id - The inventory item's ID.
   * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.batchInventoryItemLocationLevels("iitem_123", {
   *   create: [{
   *     location_id: "sloc_123",
   *     stocked_quantity: 10
   *   }],
   *   delete: ["ilvl_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchInventoryItemLocationLevels(id, body, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method manages the inventory levels of multiple inventory items.
   *
   * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
   * @param headers - Headers to pass in the request
   * @returns The inventory item's details.
   *
   * @example
   * sdk.admin.inventoryItem.batchInventoryItemsLocationLevels({
   *   create: [{
   *     inventory_item_id: "iitem_123",
   *     location_id: "sloc_123",
   *     stocked_quantity: 10
   *   }],
   *   delete: ["ilvl_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchInventoryItemsLocationLevels(body, headers) {
    return __awaiter$x(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/inventory-items/location-levels/batch`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$w = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
class Invite {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method accepts an invite. It requires sending a previous request to
   * the {@link Auth.register}.
   *
   * This method sends a request to the [Accept Invite]
   * (https://docs.medusajs.com/api/admin#invites_postinvitesaccept)
   * API route.
   *
   * @param input - The details of the user to create.
   * @param query - Configure the fields to retrieve in the user.
   * @param headers - Headers to pass in the request
   * @returns The user's details.
   *
   * @example
   * const token = await sdk.auth.register("user", "emailpass", {
   *   email: "user@gmail.com",
   *   password: "supersecret"
   * })
   *
   * sdk.admin.invite.accept(
   *   {
   *     email: "user@gmail.com",
   *     first_name: "John",
   *     last_name: "Smith",
   *     invite_token: "12345..."
   *   },
   *   {
   *     Authorization: `Bearer ${token}`
   *   }
   * )
   * .then(({ user }) => {
   *   console.log(user)
   * })
   */
  accept(input, query, headers) {
    return __awaiter$w(this, undefined, undefined, function* () {
      const rest = __rest(input, ["invite_token"]);
      return yield this.client.fetch(`/admin/invites/accept?token=${input.invite_token}`, {
        method: "POST",
        headers,
        body: rest,
        query
      });
    });
  }
  /**
   * This method creates an invite. It sends a request to the
   * [Create Invite](https://docs.medusajs.com/api/admin#invites_postinvites)
   * API route.
   *
   * @param body - The invite's details.
   * @param query - Configure the fields to retrieve in the invite.
   * @param headers - Headers to pass in the request
   * @returns The invite's details.
   *
   * @example
   * sdk.admin.invite.create({
   *   email: "user@gmail.com",
   * })
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   */
  create(body, query, headers) {
    return __awaiter$w(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/invites`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves an invite by its ID. It sends a request to the
   * [Get Invite](https://docs.medusajs.com/api/admin#invites_getinvitesid)
   * API route.
   *
   * @param id - The invite's ID.
   * @param query - Configure the fields to retrieve in the invite.
   * @param headers - Headers to pass in the request
   * @returns The invite's details.
   *
   * @example
   * To retrieve an invite its ID:
   *
   * ```ts
   * sdk.admin.invite.retrieve("invite_123")
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.invite.retrieve("invite_123", {
   *   fields: "id,email"
   * })
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$w(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/invites/${id}`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of invites. It sends a request to the
   * [List Invites](https://docs.medusajs.com/api/admin#invites_getinvites)
   * API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of invites.
   *
   * @example
   * To retrieve the list of invites:
   *
   * ```ts
   * sdk.admin.invite.list()
   * .then(({ invites, count, limit, offset }) => {
   *   console.log(invites)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.invite.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ invites, count, limit, offset }) => {
   *   console.log(invites)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each invite:
   *
   * ```ts
   * sdk.admin.invite.list({
   *   fields: "id,email"
   * })
   * .then(({ invites, count, limit, offset }) => {
   *   console.log(invites)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter$w(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/invites`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method refreshes the token of an invite. It sends a request to the
   * [Refresh Invite Token](https://docs.medusajs.com/api/admin#invites_postinvitesidresend)
   * API route.
   *
   * @param id - The invite's ID.
   * @param headers - Headers to pass in the request.
   * @returns The invite's details.
   *
   * @example
   * sdk.admin.invite.resend("invite_123")
   * .then(({ invite }) => {
   *   console.log(invite)
   * })
   */
  resend(id, headers) {
    return __awaiter$w(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/invites/${id}/resend`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method deletes an invite. It sends a request to the
   * [Delete Invite](https://docs.medusajs.com/api/admin#invites_deleteinvitesid)
   * API route.
   *
   * @param id - The invite's ID.
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.invite.delete("invite_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$w(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/invites/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$v = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Notification {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a notification's details. It sends a request to the
   * [Get Notification](https://docs.medusajs.com/api/admin#notifications_getnotificationsid)
   * API route.
   *
   * @param id - The notification's ID.
   * @param query - Configure the fields to retrieve in the notification.
   * @param headers - Headers to pass in the request
   * @returns The notification's details.
   *
   * @example
   * To retrieve a notification by its ID:
   *
   * ```ts
   * sdk.admin.notification.retrieve("notif_123")
   * .then(({ notification }) => {
   *   console.log(notification)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.notification.retrieve("notif_123", {
   *   fields: "id,to"
   * })
   * .then(({ notification }) => {
   *   console.log(notification)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$v(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/notifications/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of notifications. It sends a request to the
   * [List Notifications](https://docs.medusajs.com/api/admin#notifications_getnotifications)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of notifications.
   *
   * @example
   * To retrieve the list of notifications:
   *
   * ```ts
   * sdk.admin.notification.list()
   * .then(({ notifications, count, limit, offset }) => {
   *   console.log(notifications)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.notification.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ notifications, count, limit, offset }) => {
   *   console.log(notifications)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each notification:
   *
   * ```ts
   * sdk.admin.notification.list({
   *   fields: "id,to"
   * })
   * .then(({ notifications, count, limit, offset }) => {
   *   console.log(notifications)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$v(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/notifications`, {
        method: "GET",
        headers,
        query
      });
    });
  }
}
var __awaiter$u = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Order {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves an order by its ID. It sends a request to the
   * [Get Order](https://docs.medusajs.com/api/admin#orders_getordersid)
   * API route.
   *
   * @param id - The order's ID.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * To retrieve an order by its ID:
   *
   * ```ts
   * sdk.admin.order.retrieve("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.order.retrieve("order_123", {
   *   fields: "id,*items"
   * })
   * .then(({ order }) => {
   *   console.log(order)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method updates an order. It sends a request to the
   * [Update Order Email](https://docs.medusajs.com/api/admin#orders_postordersid)
   * API route.
   *
   * @param id - The order's ID.
   * @param body - The update details.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.update(
   *   "order_123",
   *   {
   *     email: "new_email@example.com",
   *     shipping_address: {
   *       first_name: "John",
   *       last_name: "Doe",
   *       address_1: "123 Main St",
   *     }
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  update(id, body, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method retrieves the preview of an order based on its last associated change. It sends a request to the
   * [Get Order Preview](https://docs.medusajs.com/api/admin#orders_getordersidpreview) API route.
   *
   * @param id - The order's ID.
   * @param query - Query parameters.
   * @param headers - Headers to pass in the request
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.order.retrievePreview("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  retrievePreview(id, query, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/preview`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of orders. It sends a request to the
   * [List Orders](https://docs.medusajs.com/api/admin#orders_getorders) API route.
   *
   * @param queryParams - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of orders.
   *
   * @example
   * To retrieve the list of orders:
   *
   * ```ts
   * sdk.admin.order.list()
   * .then(({ orders, count, limit, offset }) => {
   *   console.log(orders)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.order.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ orders, count, limit, offset }) => {
   *   console.log(orders)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each order:
   *
   * ```ts
   * sdk.admin.order.list({
   *   fields: "id,*items"
   * })
   * .then(({ orders, count, limit, offset }) => {
   *   console.log(orders)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method cancels an order. It sends a request to the
   * [Cancel Order](https://docs.medusajs.com/api/admin#orders_postordersidcancel)
   * API route.
   *
   * @param id - The order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.cancel("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  cancel(id, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/cancel`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method requests an order transfer. It sends a request to the
   * [Request Order Transfer](https://docs.medusajs.com/api/admin#orders_postordersidrequesttransfer)
   * API route.
   *
   * @param id - The order's ID.
   * @param headers - Headers to pass in the request.
   * @param body - The transfer's details - the id of the next owner.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.requestTransfer("order_123", {
   *   customer_id: "cus_123",
   *   internal_note: "Internal note",
   * })
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  requestTransfer(id, body, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/transfer`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method cancels an order transfer request. It sends a request to the
   * [Cancel Order Transfer Request](https://docs.medusajs.com/api/admin#orders_postordersidcanceltransferrequest)
   * API route.
   *
   * @param id - The order's ID.
   * @param headers - Headers to pass in the request.
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.cancelTransfer("order_123")
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  cancelTransfer(id, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/transfer/cancel`, {
        method: "POST",
        headers
      });
    });
  }
  /**
   * This method creates a fulfillment for an order. It sends a request to the
   * [Create Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillments)
   * API route.
   *
   * @param id - The order's ID.
   * @param body - The fulfillment's details.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.createFulfillment("order_123", {
   *   items: [
   *     {
   *       id: "orli_123",
   *       quantity: 1
   *     }
   *   ]
   * })
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  createFulfillment(id, body, query, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method cancels an order's fulfillment. It sends a request to the
   * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idcancel)
   * API route.
   *
   * @param id - The order's ID.
   * @param fulfillmentId - The ID of the fulfillment to cancel.
   * @param body - The cancelation's details.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.cancelFulfillment(
   *   "order_123",
   *   "ful_123",
   *   {
   *     no_notification: false
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  cancelFulfillment(id, fulfillmentId, body, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/cancel`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  /**
   * This method creates a shipment for an order's fulfillment. It sends a request to the
   * [Create Shipment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idshipments)
   * API route.
   *
   * @param id - The order's ID.
   * @param fulfillmentId - The ID of the fulfillment.
   * @param body - The shipment's details.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.createShipment(
   *   "order_123",
   *   "ful_123",
   *   {
   *     items: [
   *       {
   *         id: "fulit_123",
   *         quantity: 1
   *       }
   *     ]
   *   }
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  createShipment(id, fulfillmentId, body, query, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/shipments`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method marks an order's fulfillment as delivered. It sends a request to the
   * [Mark Delivered ](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idmarkasdelivered)
   * API route.
   *
   * @param id - The order's ID.
   * @param fulfillmentId - The fulfillment's ID.
   * @param query - Configure the fields to retrieve in the order.
   * @param headers - Headers to pass in the request
   * @returns The order's details.
   *
   * @example
   * sdk.admin.order.markAsDelivered(
   *   "order_123",
   *   "ful_123",
   * )
   * .then(({ order }) => {
   *   console.log(order)
   * })
   */
  markAsDelivered(id, fulfillmentId, query, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/mark-as-delivered`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a list of changes made on an order, including returns, exchanges, etc...
   *
   * This method sends a request to the [List Changes](https://docs.medusajs.com/api/admin#orders_getordersidchanges)
   * API route.
   *
   * @param id - The order's ID.
   * @param queryParams - Configure the fields to retrieve in each order change.
   * @param headers - Headers to pass in the request
   * @returns The list of order changes.
   *
   * @example
   * sdk.admin.order.listChanges("order_123")
   * .then(({ order_changes }) => {
   *   console.log(order_changes)
   * })
   */
  listChanges(id, queryParams, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/changes`, {
        query: queryParams,
        headers
      });
    });
  }
  /**
   * This method retrieves the order's line items. It sends a request to the
   * [List Line Items](https://docs.medusajs.com/api/admin#orders_getordersidlineitems)
   * API routes.
   *
   * @param id - The order's ID.
   * @param queryParams - Configure the fields to retrieve in each line item.
   * @param headers - Headers to pass in the request
   * @returns The list of line items.
   *
   * @example
   * sdk.admin.order.listLineItems("order_123")
   * .then(({ order_items }) => {
   *   console.log(order_items)
   * })
   */
  listLineItems(id, queryParams, headers) {
    return __awaiter$u(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/orders/${id}/line-items`, {
        query: queryParams,
        headers
      });
    });
  }
}
var __awaiter$t = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class OrderEdit {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates an order edit request. It sends a HTTP request to the
   * [Create Order Edit](https://docs.medusajs.com/api/admin#order-edits_postorderedits)
   * API route.
   *
   * @param body - The order edit's details.
   * @param query - Configure the fields to retrieve in the order edit.
   * @param headers - Headers to pass in the request.
   * @returns The order edit's details.
   *
   * @example
   * sdk.admin.orderEdit.initiateRequest({
   *   order_id: "order_123"
   * })
   * .then(({ order_change }) => {
   *   console.log(order_change)
   * })
   */
  initiateRequest(body, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method changes an order edit to requested. It sends a request to the
   * [Request Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidrequest)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.request("ordch_123")
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  request(id, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/request`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method confirms an order edit and applies it on the order. It sends a request
   * to the [Confirm Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidconfirm)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.confirm("ordch_123")
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  confirm(id, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/confirm`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  /**
   * This method cancels a requested order edit. It sends a request to the
   * [Cancel Order Edit](https://docs.medusajs.com/api/admin#order-edits_deleteordereditsid)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param query - Query parameters
   * @param headers - Headers to pass in the request.
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.orderEdit.cancelRequest("ordch_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  cancelRequest(id, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  /**
   * This method adds items to an order edit. These items will have the action `ITEM_ADD`.
   *
   * The method sends a request to the [Add Items](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditems)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param body - The items to add.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.addItems("ordch_123", {
   *   items: [
   *     {
   *       variant_id: "variant_123",
   *       quantity: 1
   *     }
   *   ]
   * })
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  addItems(id, body, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates the quantity and other details of an item in an order. It sends a request to the
   * [Update Item Quantity](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsitemitem_id)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param itemId - The item's ID in the order.
   * @param body - The data to edit in the item.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.updateOriginalItem(
   *   "ordch_123",
   *   "orli_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  updateOriginalItem(id, itemId, body, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items/item/${itemId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates an added item in the order edit by the ID of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * It sends a request
   * to the [Update Item](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsaction_id)
   * API route.
   *
   * @param id - The order edit's ID.
   * @param actionId - The id of the new item's `ITEM_ADD` action.
   * @param body - The data to update.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.updateAddedItem(
   *   "ordch_123",
   *   "orli_123",
   *   {
   *     quantity: 1
   *   }
   * )
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  updateAddedItem(id, actionId, body, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes an added item in the order edit by the ID of the item's `ITEM_ADD` action.
   *
   * Every item has an `actions` property, whose value is an array of actions.
   * You can check the action's name using its `action` property, and use the value of the `id` property.
   *
   * @param id - The order edit's ID.
   * @param actionId - The id of the new item's `ITEM_ADD` action.
   * @param query - Configure the fields to retrieve in the order preview.
   * @param headers - Headers to pass in the request.
   * @returns The order preview's details.
   *
   * @example
   * sdk.admin.orderEdit.removeAddedItem(
   *   "ordch_123",
   *   "orli_123",
   * )
   * .then(({ order_preview }) => {
   *   console.log(order_preview)
   * })
   */
  removeAddedItem(id, actionId, query, headers) {
    return __awaiter$t(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
}
var __awaiter$s = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Payment {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of payments. It sends a request to the
   * [List Payments](https://docs.medusajs.com/api/admin#payments_getpayments) API route.
   *
   * @param query  - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of payments.
   *
   * @example
   * To retrieve the list of payments:
   *
   * ```ts
   * sdk.admin.payment.list()
   * .then(({ payments, count, limit, offset }) => {
   *   console.log(payments)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.payment.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ payments, count, limit, offset }) => {
   *   console.log(payments)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each payment:
   *
   * ```ts
   * sdk.admin.payment.list({
   *   fields: "id,*payment_collection"
   * })
   * .then(({ payments, count, limit, offset }) => {
   *   console.log(payments)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$s(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payments`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a paginated list of payment providers. It sends a request to the
   * [List Payment Providers](https://docs.medusajs.com/api/admin#payments_getpaymentspaymentproviders) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of payment providers.
   *
   * @example
   * To retrieve the list of payment providers:
   *
   * ```ts
   * sdk.admin.payment.listPaymentProviders()
   * .then(({ payment_providers, count, limit, offset }) => {
   *   console.log(payment_providers)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.payment.listPaymentProviders({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ payment_providers, count, limit, offset }) => {
   *   console.log(payment_providers)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each payment provider:
   *
   * ```ts
   * sdk.admin.payment.listPaymentProviders({
   *   fields: "id,is_enabled"
   * })
   * .then(({ payment_providers, count, limit, offset }) => {
   *   console.log(payment_providers)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listPaymentProviders(query, headers) {
    return __awaiter$s(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payments/payment-providers`, {
        query,
        headers
      });
    });
  }
  /**
   * This method retrieves a payment's details. It sends a request to the
   * [Get Payment](https://docs.medusajs.com/api/admin#payments_getpaymentsid)
   * API route.
   *
   * @param id - The payment's ID.
   * @param query - Configure the fields to retrieve in the payment.
   * @param headers - Headers to pass in the request
   * @returns The payment's details.
   *
   * @example
   * To retrieve a payment by its ID:
   *
   * ```ts
   * sdk.admin.payment.retrieve("pay_123")
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.payment.retrieve("pay_123", {
   *   fields: "id,*payment_collection"
   * })
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$s(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payments/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method captures a payment. It sends a request to the
   * [Capture Payment](https://docs.medusajs.com/api/admin#payments_postpaymentsidcapture) API route.
   *
   * The API route uses the `capturePayment` method of the payment provider associated with the payment's collection.
   *
   * @param id - The payment's ID.
   * @param body - The capture's details.
   * @param query - Configure the fields to retrieve in the payment.
   * @param headers - Headers to pass in the request
   * @returns The payment's details.
   *
   * @example
   * sdk.admin.payment.capture("paycol_123", {})
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   */
  capture(id, body, query, headers) {
    return __awaiter$s(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payments/${id}/capture`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method refunds a payment. It sends a request to the
   * [Refund Payment](https://docs.medusajs.com/api/admin#payments_postpaymentsidrefund) API route.
   *
   * The API route uses the `refundPayment` method of the payment provider associated with the payment's collection.
   *
   * @param id - The payment's ID.
   * @param body - The refund's details.
   * @param query - Configure the fields to retrieve in the payment.
   * @param headers - Headers to pass in the request
   * @returns The payment's details.
   *
   * @example
   * sdk.admin.payment.refund("paycol_123", {})
   * .then(({ payment }) => {
   *   console.log(payment)
   * })
   */
  refund(id, body, query, headers) {
    return __awaiter$s(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payments/${id}/refund`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
}
var __awaiter$r = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class PaymentCollection {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a payment collection. It sends a request to the
   * [Create Payment Collection](https://docs.medusajs.com/api/admin#payment-collections_postpaymentcollections)
   * API route.
   *
   * @param body - The details of the payment collection to create.
   * @param query - Configure the fields to retrieve in the payment collection.
   * @param headers - Headers to pass in the request
   * @returns The payment collection's details.
   *
   * @example
   * sdk.admin.paymentCollection.create({
   *   order_id: "order_123"
   * })
   * .then(({ payment_collection }) => {
   *   console.log(payment_collection)
   * })
   */
  create(body, query, headers) {
    return __awaiter$r(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payment-collections`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a payment collection. It sends a request to the
   * [Delete Payment Collection](https://docs.medusajs.com/api/admin#payment-collections_deletepaymentcollectionsid)
   * API route.
   *
   * @param id - The payment collection's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.paymentCollection.delete("paycol_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$r(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payment-collections/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method marks a payment collection as paid. It sends a request to the
   * [Mark as Paid](https://docs.medusajs.com/api/admin#payment-collections_postpaymentcollectionsidmarkaspaid)
   * API route.
   *
   * The API route creates and authorizes a payment session, then capture its payment,
   * using the manual payment provider.
   *
   * @param id - The payment collection to mark as paid.
   * @param body - The details to mark the payment collection as paid.
   * @param query - Configure the fields to retrieve in the payment collection.
   * @param headers - Headers to pass in the request.
   * @returns The payment collection's details.
   *
   * @example
   * sdk.admin.paymentCollection.markAsPaid("paycol_123", {
   *   order_id: "order_123"
   * })
   * .then(({ payment_collection }) => {
   *   console.log(payment_collection)
   * })
   */
  markAsPaid(id, body, query, headers) {
    return __awaiter$r(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/payment-collections/${id}/mark-as-paid`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
}
var __awaiter$q = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class PriceList {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a price list. It sends a request to the
   * [Get Price List](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelistsid)
   * API route.
   *
   * @param id - The price list's ID.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * To retrieve a price list by its ID:
   *
   * ```ts
   * sdk.admin.priceList.retrieve("plist_123")
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.priceList.retrieve("plist_123", {
   *   fields: "id,*prices"
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of price lists. It sends a request to the
   * [List Price Lists](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelists) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of price lists.
   *
   * @example
   * To retrieve the list of price lists:
   *
   * ```ts
   * sdk.admin.priceList.list()
   * .then(({ price_lists, count, limit, offset }) => {
   *   console.log(price_lists)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.priceList.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ price_lists, count, limit, offset }) => {
   *   console.log(price_lists)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each price list:
   *
   * ```ts
   * sdk.admin.priceList.list({
   *   fields: "id,*prices"
   * })
   * .then(({ price_lists, count, limit, offset }) => {
   *   console.log(price_lists)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method creates a price list. It sends a request to the
   * [Create Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelists)
   * API route.
   *
   * @param body - The details of the price list to create.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.create({
   *   title: "My Price List",
   *   status: "active",
   *   type: "sale",
   *   prices: [
   *     {
   *       variant_id: "variant_123",
   *       amount: 10,
   *       currency_code: "usd",
   *       rules: {
   *         region_id: "reg_123"
   *       }
   *     }
   *   ]
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   */
  create(body, query, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a price list. It sends a request to the
   * [Update Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsid)
   * API route.
   *
   * @param id - The price list's ID.
   * @param body - The data to update in the price list.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.update("plist_123", {
   *   title: "My Price List",
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a price list. It sends a request to the
   * [Delete Price List](https://docs.medusajs.com/v2/api/admin#price-lists_deletepricelistsid)
   * API route.
   *
   * @param id - The price list's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.priceList.delete("plist_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the prices of a price list to create, update, or delete them.
   * It sends a request to the [Manage Prices](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidpricesbatch)
   * API route.
   *
   * @param id - The price list's ID.
   * @param body - The prices to create, update, or delete.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.batchPrices("plist_123", {
   *   create: [{
   *     variant_id: "variant_123",
   *     currency_code: "usd",
   *     amount: 10,
   *     rules: {
   *       region_id: "reg_123"
   *     }
   *   }],
   *   update: [{
   *     id: "price_123",
   *     variant_id: "variant_123",
   *     amount: 20,
   *   }],
   *   delete: ["price_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchPrices(id, body, query, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists/${id}/prices/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method removes products from a price list. It sends a request to the
   * [Remove Product](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidproducts)
   * API route.
   *
   * @param id - The price list's ID.
   * @param body - The details of the products to remove.
   * @param query - Configure the fields to retrieve in the price list.
   * @param headers - Headers to pass in the request
   * @returns The price list's details.
   *
   * @example
   * sdk.admin.priceList.linkProducts("plist_123", {
   *   remove: ["prod_123"]
   * })
   * .then(({ price_list }) => {
   *   console.log(price_list)
   * })
   */
  linkProducts(id, body, query, headers) {
    return __awaiter$q(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-lists/${id}/products`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
}
var __awaiter$p = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class PricePreference {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a price preference. It sends a request to the
   * [Get Price Preference](https://docs.medusajs.com/api/admin#price-preferences_getpricepreferencesid)
   * API route.
   *
   * @param id - The price preference's ID.
   * @param query - Configure the fields to retrieve in the price preference.
   * @param headers - Headers to pass in the request
   * @returns The price preference's details.
   *
   * @example
   * To retrieve a price preference by its ID:
   *
   * ```ts
   * sdk.admin.pricePreference.retrieve("prpref_123")
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.pricePreference.retrieve("prpref_123", {
   *   fields: "id,is_tax_inclusive"
   * })
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$p(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-preferences/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of price preferences. It sends a request to the
   * [List Price Preferences](https://docs.medusajs.com/api/admin#price-preferences_getpricepreferences) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of price preferences.
   *
   * @example
   * To retrieve the list of price preferences:
   *
   * ```ts
   * sdk.admin.pricePreference.list()
   * .then(({ price_preferences, count, limit, offset }) => {
   *   console.log(price_preferences)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.pricePreference.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ price_preferences, count, limit, offset }) => {
   *   console.log(price_preferences)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each price preference:
   *
   * ```ts
   * sdk.admin.pricePreference.list({
   *   fields: "id,is_tax_inclusive"
   * })
   * .then(({ price_preferences, count, limit, offset }) => {
   *   console.log(price_preferences)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$p(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-preferences`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  /**
   * This method creates a price preference. It sends a request to the
   * [Create Price Preference](https://docs.medusajs.com/api/admin#price-preferences_postpricepreferences)
   * API route.
   *
   * @param body - The details of the price preference to create.
   * @param query - Configure the fields to retrieve in the price preference.
   * @param headers - Headers to pass in the request
   * @returns The price preference's details.
   *
   * @example
   * sdk.admin.pricePreference.create({
   *   attribute: "region_id",
   *   value: "region_123",
   *   is_tax_inclusive: true
   * })
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   */
  create(body, query, headers) {
    return __awaiter$p(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-preferences`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a price preference. It sends a request to the
   * [Update Price Preference](https://docs.medusajs.com/api/admin#price-preferences_postpricepreferencesid)
   * API route.
   *
   * @param id - The price preference's ID.
   * @param body - The data to update in the price preference.
   * @param query - Configure the fields to retrieve in the price preference.
   * @param headers - Headers to pass in the request
   * @returns The price preference's details.
   *
   * @example
   * sdk.admin.pricePreference.update("prpref_123", {
   *   is_tax_inclusive: true
   * })
   * .then(({ price_preference }) => {
   *   console.log(price_preference)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$p(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-preferences/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method deletes a price preference. It sends a request to the
   * [Delete Price Preference](https://docs.medusajs.com/api/admin#price-preferences_deletepricepreferencesid)
   * API route.
   *
   * @param id - The price preference's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.pricePreference.delete("prpref_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$p(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/price-preferences/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$o = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Product {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product import. The products are only imported after
   * the import is confirmed using the {@link confirmImport} method.
   *
   * This method sends a request to the
   * [Create Product Import](https://docs.medusajs.com/api/admin#products_postproductsimport)
   * API route.
   *
   * @param body - The import's details.
   * @param query - Query parameters to pass to the request.
   * @param headers - Headers to pass in the request.
   * @returns The import's details.
   *
   * @example
   * sdk.admin.product.import({
   *   file // uploaded File instance
   * })
   * .then(({ transaction_id }) => {
   *   console.log(transaction_id)
   * })
   */
  import(body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      const form = new FormData();
      form.append("file", body.file);
      return yield this.client.fetch(`/admin/products/import`, {
        method: "POST",
        headers: Object.assign(Object.assign({}, headers), {
          // Let the browser determine the content type.
          "content-type": null
        }),
        body: form,
        query
      });
    });
  }
  /**
   * This method confirms a product import created using the method {@link import}.
   * It sends a request to the
   * [Confirm Product Import](https://docs.medusajs.com/api/admin#products_postproductsimporttransaction_idconfirm)
   * API route.
   *
   * @param transactionId - The ID of the transaction of the created product import. This is returned
   * by the API route used to create the product import.
   * @param query - Query parameters to pass in the request.
   * @param headers - Headers to pass in the request.
   *
   * @example
   * sdk.admin.product.confirmImport("transaction_123")
   * .then(() => {
   *   console.log("Import confirmed")
   * })
   */
  confirmImport(transactionId, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/import/${transactionId}/confirm`, {
        method: "POST",
        headers,
        body: {},
        query
      });
    });
  }
  /**
   * This method starts a product export process to retrieve a CSV of exported products.
   *
   * You'll receive in the response the transaction ID of the workflow generating the CSV file.
   * To check the status of the execution, send a `GET` request to
   * `/admin/workflows-executions/export-products/:transaction-id`.
   *
   * Once the execution finishes successfully, a notification is created for the export.
   * You can retrieve the notifications using the `/admin/notification` API route to
   * retrieve the file's download URL.
   *
   * This method sends a request to the [Export Product](https://docs.medusajs.com/api/admin#products_postproductsexport)
   * API route.
   *
   * @param body - The export's details.
   * @param query - Filters to specify which products to export.
   * @param headers - Headers to pass in the request.
   * @returns The export's details.
   *
   * @example
   * sdk.admin.product.export({})
   * .then(({ transaction_id }) => {
   *   console.log(transaction_id)
   * })
   */
  export(body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/export`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method manages products to create, update, or delete them. It sends a request to the
   * [Manage Products](https://docs.medusajs.com/api/admin#products_postproductsbatch)
   * API route.
   *
   * @param body - The products to create, update, or delete.
   * @param query - Configure the fields to retrieve in the products.
   * @param headers - Headers to pass in the request
   * @returns The batch operations details.
   *
   * @example
   * sdk.admin.product.batch({
   *   create: [
   *     {
   *       title: "Shirt",
   *       options: [{
   *         title: "Default",
   *         values: ["Default Option"]
   *       }],
   *       variants: [
   *         {
   *           title: "Default",
   *           options: {
   *             Default: "Default Option"
   *           },
   *           prices: []
   *         }
   *       ]
   *     }
   *   ],
   *   update: [{
   *     id: "prod_123",
   *     title: "Pants"
   *   }],
   *   delete: ["prod_321"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batch(body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method creates a product. It sends a request to the
   * [Create Product](https://docs.medusajs.com/api/admin#products_postproducts)
   * API route.
   *
   * @param body - The product's details.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.create({
   *   title: "Shirt",
   *   options: [{
   *     title: "Default",
   *     values: ["Default Option"]
   *   }],
   *   variants: [
   *     {
   *       title: "Default",
   *       options: {
   *         Default: "Default Option"
   *       },
   *       prices: []
   *     }
   *   ]
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  create(body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product. It sends a request to the
   * [Update Product](https://docs.medusajs.com/api/admin#products_postproductsid)
   * API route.
   *
   * @param id - The product's ID.
   * @param body - The data to update in the product.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.update("prod_123", {
   *   title: "Shirt",
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of products. It sends a request to the
   * [List Products](https://docs.medusajs.com/api/admin#products_getproducts) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of products.
   *
   * @example
   * To retrieve the list of products:
   *
   * ```ts
   * sdk.admin.product.list()
   * .then(({ products, count, limit, offset }) => {
   *   console.log(products)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.product.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ products, count, limit, offset }) => {
   *   console.log(products)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each products:
   *
   * ```ts
   * sdk.admin.product.list({
   *   fields: "id,*variants"
   * })
   * .then(({ products, count, limit, offset }) => {
   *   console.log(products)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a product by its ID. It sends a request to the
   * [Get Product](https://docs.medusajs.com/api/admin#products_getproductsid)
   * API route.
   *
   * @param id - The product's ID.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * To retrieve a product by its ID:
   *
   * ```ts
   * sdk.admin.product.retrieve("prod_123")
   * .then(({ product }) => {
   *   console.log(product)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.product.retrieve("prod_123", {
   *   fields: "id,*variants"
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product. It sends a request to the
   * [Delete Product](https://docs.medusajs.com/api/admin#products_deleteproductsid)
   * API route.
   *
   * @param id - The product's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.product.delete("prod_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the variants of a product. It sends a request to the
   * [Manage Variants](https://docs.medusajs.com/api/admin#products_postproductsidvariantsbatch)
   * API route.
   *
   * @param productId - The product's ID.
   * @param body - The variants to create, update, or delete.
   * @param query - Configure the fields to retrieve in the product variants.
   * @param headers - Headers to pass in the request
   * @returns The product variants' details.
   *
   * @example
   * sdk.admin.product.batchVariants("prod_123", {
   *   create: [
   *     {
   *       title: "Blue Shirt",
   *       options: {
   *         Color: "Blue"
   *       },
   *       prices: []
   *     }
   *   ],
   *   update: [
   *     {
   *       id: "variant_123",
   *       title: "Pants"
   *     }
   *   ],
   *   delete: ["variant_123"]
   * })
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchVariants(productId, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method creates a variant for a product. It sends a request to the
   * [Create Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariants)
   * API route.
   *
   * @param productId - The product's ID.
   * @param body - The variant's details.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.createVariant("prod_123", {
   *   title: "Blue Shirt",
   *   options: {
   *     Color: "Blue"
   *   },
   *   prices: [
   *     {
   *       amount: 10,
   *       currency_code: "usd"
   *     }
   *   ]
   * })
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  createVariant(productId, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a variant of a product. It sends a request to the
   * [Update Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariantsvariant_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The variant's ID.
   * @param body - The data to update in the variant.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.updateVariant(
   *   "prod_123",
   *   "variant_123",
   *     {
   *     title: "Blue Shirt",
   *   }
   * )
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  updateVariant(productId, id, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of products. It sends a request to the
   * [List Products](https://docs.medusajs.com/api/admin#products_getproductsidvariants) API route.
   *
   * @param productId - The ID of the product to retrieve its variants.
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product variants.
   *
   * @example
   * To retrieve the list of product variants:
   *
   * ```ts
   * sdk.admin.product.listVariants("prod_123")
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.product.listVariants("prod_123", {
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product variant:
   *
   * ```ts
   * sdk.admin.product.listVariants("prod_123", {
   *   fields: "id,*product"
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listVariants(productId, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product's variant. It sends a request to the
   * [Retrieve Variant](https://docs.medusajs.com/api/admin#products_getproductsidvariantsvariant_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The variant's ID.
   * @param query - Configure the fields to retrieve in the product variant.
   * @param headers - Headers to pass in the request
   * @returns The product variant's details.
   *
   * @example
   * To retrieve a product variant by its ID:
   *
   * ```ts
   * sdk.admin.product.retrieveVariant(
   *   "prod_123",
   *   "variant_123"
   * )
   * .then(({ variant }) => {
   *   console.log(variant)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.product.retrieveVariant(
   *   "prod_123",
   *   "variant_123",
   *   {
   *     fields: "id, *product"
   *   }
   * )
   * .then(({ variant }) => {
   *   console.log(variant)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieveVariant(productId, id, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product's variant. It sends a request to the
   * [Delete Variant](https://docs.medusajs.com/api/admin#products_deleteproductsidvariantsvariant_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The ID of the variant.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.product.deleteVariant("prod_123", "variant_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  deleteVariant(productId, id, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages a product's variant's inventories to associate them with inventory items,
   * update their inventory items, or delete their association with inventory items.
   *
   * It sends a request to the
   * [Manage Variant Inventory](https://docs.medusajs.com/api/admin#products_postproductsidvariantsinventoryitemsbatch)
   * API route.
   *
   * @param productId - The ID of the product that the variant belongs to.
   * @param body - The inventory items to create, update, or delete.
   * @param query - Pass query parameters in the request.
   * @param headers - Headers to pass in the request
   * @returns The details of the created, updated, or deleted inventory items.
   *
   * @example
   * sdk.admin.product.batchVariantInventoryItems(
   *   "prod_123",
   *   {
   *     create: [
   *       {
   *         inventory_item_id: "iitem_123",
   *         variant_id: "variant_123",
   *         required_quantity: 10
   *       }
   *     ],
   *     update: [
   *       {
   *         inventory_item_id: "iitem_1234",
   *         variant_id: "variant_1234",
   *         required_quantity: 20
   *       }
   *     ],
   *     delete: [
   *       {
   *         inventory_item_id: "iitem_321",
   *         variant_id: "variant_321"
   *       }
   *     ]
   *   }
   * )
   * .then(({ created, updated, deleted }) => {
   *   console.log(created, updated, deleted)
   * })
   */
  batchVariantInventoryItems(productId, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/variants/inventory-items/batch`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method creates an option in a product. It sends a request to the
   * [Create Option](https://docs.medusajs.com/api/admin#products_postproductsidoptions)
   * API route.
   *
   * @param productId - The product's ID.
   * @param body - The option's details.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.createOption(
   *   "prod_123",
   *   {
   *     title: "Color",
   *     values: ["Green", "Blue"]
   *   }
   * )
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  createOption(productId, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product's option. It sends a request to the
   * [Update Option](https://docs.medusajs.com/api/admin#products_postproductsidoptionsoption_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The ID of the option to update.
   * @param body - The data to update in the option.
   * @param query - Configure the fields to retrieve in the product.
   * @param headers - Headers to pass in the request
   * @returns The product's details.
   *
   * @example
   * sdk.admin.product.updateOption(
   *   "prod_123",
   *   "prodopt_123",
   *   {
   *     title: "Color"
   *   }
   * )
   * .then(({ product }) => {
   *   console.log(product)
   * })
   */
  updateOption(productId, id, body, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product options. It sends a request to the
   * [List Options](https://docs.medusajs.com/api/admin#products_getproductsidoptions) API route.
   *
   * @param productId - The ID of the product to retrieve its options
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product options.
   *
   * @example
   * To retrieve the list of product options:
   *
   * ```ts
   * sdk.admin.product.listOptions("prod_123")
   * .then(({ product_options, count, limit, offset }) => {
   *   console.log(product_options)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.product.listOptions("prod_123", {
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_options, count, limit, offset }) => {
   *   console.log(product_options)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product options:
   *
   * ```ts
   * sdk.admin.product.listOptions("prod_123", {
   *   fields: "id,title"
   * })
   * .then(({ product_options, count, limit, offset }) => {
   *   console.log(product_options)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  listOptions(productId, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product's option. It sends a request to the
   * [Get Option](https://docs.medusajs.com/api/admin#products_getproductsidoptionsoption_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The product option's ID.
   * @param query - Configure the fields to retrieve in the product option.
   * @param headers - Headers to pass in the request
   * @returns The product option's details.
   *
   * @example
   * To retrieve a product option by its ID:
   *
   * ```ts
   * sdk.admin.product.retrieveOption(
   *   "prod_123",
   *   "prodopt_123"
   * )
   * .then(({ product_option }) => {
   *   console.log(product_option)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.product.retrieveOption(
   *   "prod_123",
   *   "prodopt_123",
   *   {
   *     fields: "id,title"
   *   }
   * )
   * .then(({ product_option }) => {
   *   console.log(product_option)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieveOption(productId, id, query, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product's option. It sends a request to the
   * [Delete Option](https://docs.medusajs.com/api/admin#products_deleteproductsidoptionsoption_id)
   * API route.
   *
   * @param productId - The product's ID.
   * @param id - The option's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.product.deleteOption("prod_123", "prodopt_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  deleteOption(productId, id, headers) {
    return __awaiter$o(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$n = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ProductCategory {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product category. It sends a request to the
   * [Create Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategories)
   * API route.
   *
   * @param body - The details of the category to create.
   * @param query - Configure the fields to retrieve in the category.
   * @param headers - Headers to pass in the request
   * @returns The category's details.
   *
   * @example
   * sdk.admin.productCategory.create({
   *   name: "Shirts"
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   */
  create(body, query, headers) {
    return __awaiter$n(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-categories`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product category. It sends a request to the
   * [Update Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesid)
   * API route.
   *
   * @param id - The product category's ID.
   * @param body - The data to update in the category.
   * @param query - Configure the fields to retrieve in the category.
   * @param headers - Headers to pass in the request
   * @returns The category's details.
   *
   * @example
   * sdk.admin.productCategory.update("pcat_123", {
   *   name: "Shirts"
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$n(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-categories/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product categories. It sends a request to the
   * [List Product Categories](https://docs.medusajs.com/api/admin#product-categories_getproductcategories) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product categories.
   *
   * @example
   * To retrieve the list of product categories:
   *
   * ```ts
   * sdk.admin.productCategory.list()
   * .then(({ product_categories, count, limit, offset }) => {
   *   console.log(product_categories)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productCategory.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_categories, count, limit, offset }) => {
   *   console.log(product_categories)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product category:
   *
   * ```ts
   * sdk.admin.productCategory.list({
   *   fields: "id,*products"
   * })
   * .then(({ product_categories, count, limit, offset }) => {
   *   console.log(product_categories)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$n(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-categories`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product category by its ID. It sends a request to the
   * [Get Product Category](https://docs.medusajs.com/api/admin#product-categories_getproductcategoriesid) API route.
   *
   * @param id - The category's ID.
   * @param query - Configure the fields to retrieve in the product category.
   * @param headers - Headers to pass in the request
   * @returns The product category's details.
   *
   * @example
   * To retrieve a product category by its ID:
   *
   * ```ts
   * sdk.admin.productCategory.retrieve("pcat_123")
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productCategory.retrieve("pcat_123", {
   *   fields: "id,*products"
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$n(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-categories/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product category. It sends a request to the
   * [Delete Product Category](https://docs.medusajs.com/api/admin#product-categories_deleteproductcategoriesid)
   * API route.
   *
   * @param id - The category's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.productCategory.delete("pcat_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$n(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-categories/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manaes the products of a category to add or remove them. It sends a request
   * to the [Manage Products](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesidproducts)
   * API route.
   *
   * @param id - The category's ID.
   * @param body - The products to create or update.
   * @param query - Configure the fields to retrieve in the product category.
   * @param headers - Headers to pass in the request
   * @returns The product category's details.
   *
   * @example
   * sdk.admin.productCategory.updateProducts("pcat_123", {
   *   add: ["prod_123"],
   *   remove: ["prod_321"]
   * })
   * .then(({ product_category }) => {
   *   console.log(product_category)
   * })
   */
  updateProducts(id, body, query, headers) {
    return __awaiter$n(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-categories/${id}/products`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
}
var __awaiter$m = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ProductCollection {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product collection. It sends a request to the
   * [Create Collection](https://docs.medusajs.com/api/admin#collections_postcollections)
   * API route.
   *
   * @param body - The details of the product collection to create.
   * @param query - Configure the fields to retrieve in the product collection.
   * @param headers - Headers to pass in the request
   * @returns The product collection's details.
   *
   * @example
   * sdk.admin.productCollection.create({
   *   title: "Summer Collection"
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   */
  create(body, query, headers) {
    return __awaiter$m(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/collections`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a collection. It sends a request to the
   * [Update Collection](https://docs.medusajs.com/api/admin#collections_postcollectionsid)
   * API route.
   *
   * @param id - The ID of the collection.
   * @param body - The data to update in the collection.
   * @param query - Configure the fields to retrieve in the product collection.
   * @param headers - Headers to pass in the request
   * @returns The product collection's details.
   *
   * @example
   * sdk.admin.productCollection.update("pcol_123", {
   *   title: "Summer Collection"
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$m(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/collections/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of collections. It sends a request to the
   * [List Collections](https://docs.medusajs.com/api/admin#collections_getcollections) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of collections.
   *
   * @example
   * To retrieve the list of collections:
   *
   * ```ts
   * sdk.admin.productCollection.list()
   * .then(({ collections, count, limit, offset }) => {
   *   console.log(collections)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productCollection.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ collections, count, limit, offset }) => {
   *   console.log(collections)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each collection:
   *
   * ```ts
   * sdk.admin.productCollection.list({
   *   fields: "id,*products"
   * })
   * .then(({ collections, count, limit, offset }) => {
   *   console.log(collections)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(queryParams, headers) {
    return __awaiter$m(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/collections`, {
        headers,
        query: queryParams
      });
    });
  }
  /**
   * This method retrieves a collection by its ID. It sends a request to the
   * [Get Collection](https://docs.medusajs.com/api/admin#collections_getcollectionsid) API route.
   *
   * @param id - The collection's ID.
   * @param query - Configure the fields to retrieve in the collection.
   * @param headers - Headers to pass in the request
   * @returns The collection's details.
   *
   * @example
   * To retrieve a collection by its ID:
   *
   * ```ts
   * sdk.admin.productCollection.retrieve("pcol_123")
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productCollection.retrieve("pcol_123", {
   *   fields: "id,*products"
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$m(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/collections/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product collection. It sends a request to the
   * [Delete Collection](https://docs.medusajs.com/api/admin#collections_deletecollectionsid)
   * API route.
   *
   * @param id - The collection's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.productCollection.delete("pcol_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$m(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/collections/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  /**
   * This method manages the products of a collection to add or remove them. It sends a request
   * to the [Manage Products](https://docs.medusajs.com/api/admin#collections_postcollectionsidproducts)
   * API route.
   *
   * @param id - The collection's ID.
   * @param body - The products to add or remove.
   * @param headers - Headers to pass in the request
   * @returns The product category's details.
   *
   * @example
   * sdk.admin.productCollection.updateProducts("pcol_123", {
   *   add: ["prod_123"],
   *   remove: ["prod_321"]
   * })
   * .then(({ collection }) => {
   *   console.log(collection)
   * })
   */
  updateProducts(id, body, headers) {
    return __awaiter$m(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/collections/${id}/products`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$l = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ProductTag {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product tag. It sends a request to the
   * [Create Product Tag](https://docs.medusajs.com/api/admin#product-tags_postproducttags)
   * API route.
   *
   * @param body - The details of the product tag.
   * @param query - Configure the fields to retrieve in the product tag.
   * @param headers - Headers to pass in the request
   * @returns The product tag's details.
   *
   * @example
   * sdk.admin.productTag.create({
   *   value: "shirt"
   * })
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   */
  create(body, query, headers) {
    return __awaiter$l(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-tags`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a tag's details. It sends a request to the
   * [Update Product Tag](https://docs.medusajs.com/api/admin#product-tags_postproducttagsid)
   * API route.
   *
   * @param id - The tag's ID.
   * @param body - The data to update in the tag.
   * @param query - Configure the fields to retrieve in the product tag.
   * @param headers - Headers to pass in the request
   * @returns The product tag's details.
   *
   * @example
   * sdk.admin.productTag.update("ptag_123", {
   *   value: "shirt"
   * })
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$l(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-tags/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product tags. It sends a request to the
   * [List Product Tags](https://docs.medusajs.com/api/admin#product-tags_getproducttags) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product tags.
   *
   * @example
   * To retrieve the list of product tags:
   *
   * ```ts
   * sdk.admin.productTag.list()
   * .then(({ product_tags, count, limit, offset }) => {
   *   console.log(product_tags)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productTag.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_tags, count, limit, offset }) => {
   *   console.log(product_tags)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product tag:
   *
   * ```ts
   * sdk.admin.productTag.list({
   *   fields: "id,*products"
   * })
   * .then(({ product_tags, count, limit, offset }) => {
   *   console.log(product_tags)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$l(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-tags`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product tag by its ID. It sends a request to the
   * [Get Product Tag](https://docs.medusajs.com/api/admin#product-tags_getproducttagsid) API route.
   *
   * @param id - The product tag's ID.
   * @param query - Configure the fields to retrieve in the product tag.
   * @param headers - Headers to pass in the request
   * @returns The product tag's details.
   *
   * @example
   * To retrieve a product tag by its ID:
   *
   * ```ts
   * sdk.admin.productTag.retrieve("ptag_123")
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productTag.retrieve("ptag_123", {
   *   fields: "id,*products"
   * })
   * .then(({ product_tag }) => {
   *   console.log(product_tag)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$l(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-tags/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product tag. It sends a request to the
   * [Delete Product Tag](https://docs.medusajs.com/api/admin#product-tags_deleteproducttagsid)
   * API route.
   *
   * @param id - The tag's ID.
   * @param headers - Headers to pass in the request
   * @returns The deletion's details.
   *
   * @example
   * sdk.admin.productTag.delete("ptag_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$l(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-tags/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$k = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ProductType {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method creates a product type. It sends a request to the
   * [Create Product Type](https://docs.medusajs.com/api/admin#product-types_postproducttypes)
   * API route.
   *
   * @param body - The product type's details.
   * @param query - Configure the fields to retrieve in the product type.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * sdk.admin.productType.create({
   *   value: "Clothes"
   * })
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   */
  create(body, query, headers) {
    return __awaiter$k(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-types`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method updates a product type. It sends a request to the
   * [Update Product Type](https://docs.medusajs.com/api/admin#product-types_postproducttypesid)
   * API route.
   *
   * @param id - The product type's ID.
   * @param body - The data to update in the product type.
   * @param query - Configure the fields to retrieve in the product type.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * sdk.admin.productType.update("ptyp_123", {
   *   value: "Clothes"
   * })
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   */
  update(id, body, query, headers) {
    return __awaiter$k(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-types/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  /**
   * This method retrieves a paginated list of product types. It sends a request to the
   * [List Product Types](https://docs.medusajs.com/api/admin#product-types_getproducttypes) API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product types.
   *
   * @example
   * To retrieve the list of product types:
   *
   * ```ts
   * sdk.admin.productType.list()
   * .then(({ product_types, count, limit, offset }) => {
   *   console.log(product_types)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productType.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ product_types, count, limit, offset }) => {
   *   console.log(product_types)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each product type:
   *
   * ```ts
   * sdk.admin.productType.list({
   *   fields: "id,*products"
   * })
   * .then(({ product_types, count, limit, offset }) => {
   *   console.log(product_types)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$k(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-types`, {
        headers,
        query
      });
    });
  }
  /**
   * This method retrieves a product type by its ID. It sends a request to the
   * [Get Product Type](https://docs.medusajs.com/api/admin#product-types_getproducttypesid)
   * API route.
   *
   * @param id - The product type's ID.
   * @param query - Configure the fields to retrieve in the product type.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * To retrieve a product type by its ID:
   *
   * ```ts
   * sdk.admin.productType.retrieve("ptyp_123")
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   * ```
   *
   * To specify the fields and relations to retrieve:
   *
   * ```ts
   * sdk.admin.productType.retrieve("ptyp_123", {
   *   fields: "id,*products"
   * })
   * .then(({ product_type }) => {
   *   console.log(product_type)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  retrieve(id, query, headers) {
    return __awaiter$k(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-types/${id}`, {
        query,
        headers
      });
    });
  }
  /**
   * This method deletes a product type. It sends a request to the
   * [Delete Product Type](https://docs.medusajs.com/api/admin#product-types_deleteproducttypesid)
   * API route.
   *
   * @param id - The product type's ID.
   * @param headers - Headers to pass in the request
   * @returns The product type's details.
   *
   * @example
   * sdk.admin.productType.delete("ptyp_123")
   * .then(({ deleted }) => {
   *   console.log(deleted)
   * })
   */
  delete(id, headers) {
    return __awaiter$k(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/product-types/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$j = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ProductVariant {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  /**
   * This method retrieves a paginated list of product variants. It sends a request to the
   * [List Product Variants](https://docs.medusajs.com/api/admin#product-variants_getproductvariants)
   * API route.
   *
   * @param query - Filters and pagination configurations.
   * @param headers - Headers to pass in the request.
   * @returns The paginated list of product variants.
   *
   * @example
   * To retrieve the list of product variants:
   *
   * ```ts
   * sdk.admin.productVariant.list()
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * To configure the pagination, pass the `limit` and `offset` query parameters.
   *
   * For example, to retrieve only 10 items and skip 10 items:
   *
   * ```ts
   * sdk.admin.productVariant.list({
   *   limit: 10,
   *   offset: 10
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Using the `fields` query parameter, you can specify the fields and relations to retrieve
   * in each campaign:
   *
   * ```ts
   * sdk.admin.productVariant.list({
   *   fields: "id,products"
   * })
   * .then(({ variants, count, limit, offset }) => {
   *   console.log(variants)
   * })
   * ```
   *
   * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
   */
  list(query, headers) {
    return __awaiter$j(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/product-variants`, {
        headers,
        query
      });
    });
  }
}
var __awaiter$i = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Promotion {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  retrieve(id, query, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}`, {
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions`, {
        headers,
        query
      });
    });
  }
  create(payload, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  update(id, payload, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}`, {
        method: "POST",
        headers,
        body: payload
      });
    });
  }
  delete(id, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  addRules(id, ruleType, payload, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
        method: "POST",
        headers,
        body: { create: payload.rules }
      });
    });
  }
  updateRules(id, ruleType, payload, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
        method: "POST",
        headers,
        body: { update: payload.rules }
      });
    });
  }
  removeRules(id, ruleType, payload, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
        method: "POST",
        headers,
        body: { delete: payload.rule_ids }
      });
    });
  }
  listRules(id, ruleType, query, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}`, {
        headers,
        query
      });
    });
  }
  listRuleAttributes(ruleType, promotionType, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/rule-attribute-options/${ruleType}`, {
        headers,
        query: { promotion_type: promotionType }
      });
    });
  }
  listRuleValues(ruleType, ruleValue, query, headers) {
    return __awaiter$i(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/promotions/rule-value-options/${ruleType}/${ruleValue}`, {
        headers,
        query
      });
    });
  }
}
var __awaiter$h = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class RefundReason {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  list(query, headers) {
    return __awaiter$h(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/refund-reasons`, {
        query,
        headers
      });
    });
  }
}
var __awaiter$g = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Region {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$g(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/regions`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$g(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/regions/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  list(queryParams, headers) {
    return __awaiter$g(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/regions`, {
        query: queryParams,
        headers
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$g(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/regions/${id}`, {
        query,
        headers
      });
    });
  }
  delete(id, headers) {
    return __awaiter$g(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/regions/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$f = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Reservation {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  retrieve(id, query, headers) {
    return __awaiter$f(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/reservations/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$f(this, undefined, undefined, function* () {
      return yield this.client.fetch("/admin/reservations", {
        method: "GET",
        query,
        headers
      });
    });
  }
  create(body, query, headers) {
    return __awaiter$f(this, undefined, undefined, function* () {
      return yield this.client.fetch("/admin/reservations", {
        method: "POST",
        body,
        query,
        headers
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$f(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/reservations/${id}`, {
        method: "POST",
        body,
        query,
        headers
      });
    });
  }
  delete(id, headers) {
    return __awaiter$f(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/reservations/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$e = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Return {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  list(query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns`, {
        query,
        headers
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}`, {
        query,
        headers
      });
    });
  }
  initiateRequest(body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  cancel(id, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/cancel`, {
        method: "POST",
        headers,
        query
      });
    });
  }
  cancelRequest(id, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  addReturnItem(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  updateReturnItem(id, actionId, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  removeReturnItem(id, actionId, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  addReturnShipping(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/shipping-method`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  updateReturnShipping(id, actionId, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/shipping-method/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  deleteReturnShipping(id, actionId, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/shipping-method/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  updateRequest(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  confirmRequest(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/request`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  initiateReceive(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  receiveItems(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  updateReceiveItem(id, actionId, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  removeReceiveItem(id, actionId, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  dismissItems(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/dismiss-items`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  updateDismissItem(id, actionId, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/dismiss-items/${actionId}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  removeDismissItem(id, actionId, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/dismiss-items/${actionId}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
  confirmReceive(id, body, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive/confirm`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  cancelReceive(id, query, headers) {
    return __awaiter$e(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/returns/${id}/receive`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
}
var __awaiter$d = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ReturnReason {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  list(query, headers) {
    return __awaiter$d(this, undefined, undefined, function* () {
      return yield this.client.fetch("/admin/return-reasons", {
        headers,
        query
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$d(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/return-reasons/${id}`, {
        query,
        headers
      });
    });
  }
  create(body, query, headers) {
    return __awaiter$d(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/return-reasons`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$d(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/return-reasons/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, query, headers) {
    return __awaiter$d(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/return-reasons/${id}`, {
        method: "DELETE",
        headers,
        query
      });
    });
  }
}
var __awaiter$c = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class SalesChannel {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  updateProducts(id, body, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}/products`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  batchProducts(id, body, headers) {
    return __awaiter$c(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/sales-channels/${id}/products`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$b = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ShippingOption {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$b(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-options`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$b(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$b(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, headers) {
    return __awaiter$b(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  list(query, headers) {
    return __awaiter$b(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-options`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  updateRules(id, body, headers) {
    return __awaiter$b(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-options/${id}/rules/batch`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$a = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class ShippingProfile {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$a(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$a(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, headers) {
    return __awaiter$a(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  list(query, headers) {
    return __awaiter$a(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$a(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
}
var __awaiter$9 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class StockLocation {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  updateSalesChannels(id, body, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}/sales-channels`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  createFulfillmentSet(id, body, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}/fulfillment-sets`, {
        method: "POST",
        headers,
        body
      });
    });
  }
  updateFulfillmentProviders(id, body, headers) {
    return __awaiter$9(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stock-locations/${id}/fulfillment-providers`, {
        method: "POST",
        headers,
        body
      });
    });
  }
}
var __awaiter$8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
let Store$1 = class Store {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  retrieve(id, query, headers) {
    return __awaiter$8(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stores/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$8(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stores`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$8(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/stores/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
};
var __awaiter$7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const taxRateUrl = "/admin/tax-rates";
class TaxRate {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$7(this, undefined, undefined, function* () {
      return yield this.client.fetch(taxRateUrl, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$7(this, undefined, undefined, function* () {
      return yield this.client.fetch(`${taxRateUrl}/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, headers) {
    return __awaiter$7(this, undefined, undefined, function* () {
      return yield this.client.fetch(`${taxRateUrl}/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$7(this, undefined, undefined, function* () {
      return yield this.client.fetch(`${taxRateUrl}/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$7(this, undefined, undefined, function* () {
      return yield this.client.fetch(taxRateUrl, {
        method: "GET",
        headers,
        query
      });
    });
  }
}
var __awaiter$6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const taxRegionUrl = "/admin/tax-regions";
class TaxRegion {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$6(this, undefined, undefined, function* () {
      return yield this.client.fetch(taxRegionUrl, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  delete(id, headers) {
    return __awaiter$6(this, undefined, undefined, function* () {
      return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$6(this, undefined, undefined, function* () {
      return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
        method: "GET",
        headers,
        query
      });
    });
  }
  list(query, headers) {
    return __awaiter$6(this, undefined, undefined, function* () {
      return yield this.client.fetch(taxRegionUrl, {
        method: "GET",
        headers,
        query
      });
    });
  }
}
var __awaiter$5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Upload {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  // Note: The creation/upload flow be made more advanced, with support for streaming and progress, but for now we keep it simple
  create(body, query, headers) {
    return __awaiter$5(this, undefined, undefined, function* () {
      const form = new FormData();
      if (body instanceof FileList) {
        Array.from(body).forEach((file) => {
          form.append("files", file);
        });
      } else {
        body.files.forEach((file) => {
          form.append("files", "content" in file ? new Blob([file.content], {
            type: "text/plain"
          }) : file, file.name);
        });
      }
      return this.client.fetch(`/admin/uploads`, {
        method: "POST",
        headers: Object.assign(Object.assign({}, headers), {
          // Let the browser determine the content type.
          "content-type": null
        }),
        body: form,
        query
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$5(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/uploads/${id}`, {
        query,
        headers
      });
    });
  }
  delete(id, headers) {
    return __awaiter$5(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/uploads/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
}
var __awaiter$4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class User {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  create(body, query, headers) {
    return __awaiter$4(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/users`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  update(id, body, query, headers) {
    return __awaiter$4(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/users/${id}`, {
        method: "POST",
        headers,
        body,
        query
      });
    });
  }
  list(queryParams, headers) {
    return __awaiter$4(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/users`, {
        headers,
        query: queryParams
      });
    });
  }
  retrieve(id, query, headers) {
    return __awaiter$4(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/users/${id}`, {
        query,
        headers
      });
    });
  }
  delete(id, headers) {
    return __awaiter$4(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/users/${id}`, {
        method: "DELETE",
        headers
      });
    });
  }
  me(query, headers) {
    return __awaiter$4(this, undefined, undefined, function* () {
      return this.client.fetch(`/admin/users/me`, {
        query,
        headers
      });
    });
  }
}
var __awaiter$3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class WorkflowExecution {
  /**
   * @ignore
   */
  constructor(client) {
    this.client = client;
  }
  list(queryParams, headers) {
    return __awaiter$3(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/workflows-executions`, {
        query: queryParams,
        headers
      });
    });
  }
  retrieve(id, headers) {
    return __awaiter$3(this, undefined, undefined, function* () {
      return yield this.client.fetch(`/admin/workflows-executions/${id}`, {
        headers
      });
    });
  }
}
class Admin {
  constructor(client) {
    this.invite = new Invite(client);
    this.customer = new Customer(client);
    this.productCollection = new ProductCollection(client);
    this.productCategory = new ProductCategory(client);
    this.priceList = new PriceList(client);
    this.pricePreference = new PricePreference(client);
    this.product = new Product(client);
    this.productType = new ProductType(client);
    this.upload = new Upload(client);
    this.region = new Region(client);
    this.returnReason = new ReturnReason(client);
    this.stockLocation = new StockLocation(client);
    this.salesChannel = new SalesChannel(client);
    this.fulfillmentSet = new FulfillmentSet(client);
    this.fulfillment = new Fulfillment(client);
    this.fulfillmentProvider = new FulfillmentProvider(client);
    this.shippingOption = new ShippingOption(client);
    this.shippingProfile = new ShippingProfile(client);
    this.inventoryItem = new InventoryItem(client);
    this.notification = new Notification(client);
    this.order = new Order(client);
    this.orderEdit = new OrderEdit(client);
    this.return = new Return(client);
    this.claim = new Claim(client);
    this.taxRate = new TaxRate(client);
    this.taxRegion = new TaxRegion(client);
    this.store = new Store$1(client);
    this.productTag = new ProductTag(client);
    this.user = new User(client);
    this.currency = new Currency(client);
    this.payment = new Payment(client);
    this.productVariant = new ProductVariant(client);
    this.refundReason = new RefundReason(client);
    this.exchange = new Exchange(client);
    this.paymentCollection = new PaymentCollection(client);
    this.apiKey = new ApiKey(client);
    this.workflowExecution = new WorkflowExecution(client);
    this.reservation = new Reservation(client);
    this.customerGroup = new CustomerGroup(client);
    this.promotion = new Promotion(client);
    this.campaign = new Campaign(client);
  }
}
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Auth {
  constructor(client, config) {
    this.register = (actor, method, payload) => __awaiter$2(this, undefined, undefined, function* () {
      const { token } = yield this.client.fetch(`/auth/${actor}/${method}/register`, {
        method: "POST",
        body: payload
      });
      this.client.setToken(token);
      return token;
    });
    this.login = (actor, method, payload) => __awaiter$2(this, undefined, undefined, function* () {
      const { token, location } = yield this.client.fetch(`/auth/${actor}/${method}`, {
        method: "POST",
        body: payload
      });
      if (location) {
        return { location };
      }
      yield this.setToken_(token);
      return token;
    });
    this.callback = (actor, method, query) => __awaiter$2(this, undefined, undefined, function* () {
      const { token } = yield this.client.fetch(`/auth/${actor}/${method}/callback`, {
        method: "GET",
        query
      });
      yield this.setToken_(token);
      return token;
    });
    this.refresh = () => __awaiter$2(this, undefined, undefined, function* () {
      const { token } = yield this.client.fetch("/auth/token/refresh", {
        method: "POST"
      });
      yield this.setToken_(token);
      return token;
    });
    this.logout = () => __awaiter$2(this, undefined, undefined, function* () {
      var _a2, _b2;
      if (((_b2 = (_a2 = this.config) === null || _a2 === undefined ? undefined : _a2.auth) === null || _b2 === undefined ? undefined : _b2.type) === "session") {
        yield this.client.fetch("/auth/session", {
          method: "DELETE"
        });
      }
      this.client.clearToken();
    });
    this.resetPassword = (actor, provider, body) => __awaiter$2(this, undefined, undefined, function* () {
      yield this.client.fetch(`/auth/${actor}/${provider}/reset-password`, {
        method: "POST",
        body,
        headers: { accept: "text/plain" }
        // 201 Created response
      });
    });
    this.updateProvider = (actor, provider, body, token) => __awaiter$2(this, undefined, undefined, function* () {
      yield this.client.fetch(`/auth/${actor}/${provider}/update?token=${token}`, {
        method: "POST",
        body
      });
    });
    this.setToken_ = (token) => __awaiter$2(this, undefined, undefined, function* () {
      var _a2, _b2;
      if (((_b2 = (_a2 = this.config) === null || _a2 === undefined ? undefined : _a2.auth) === null || _b2 === undefined ? undefined : _b2.type) === "session") {
        yield this.client.fetch("/auth/session", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        this.client.setToken(token);
      }
    });
    this.client = client;
    this.config = config;
  }
}
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const PUBLISHABLE_KEY_HEADER = "x-publishable-api-key";
const getBaseUrl = (passedBaseUrl) => {
  {
    return passedBaseUrl;
  }
};
const hasStorage = (storage) => {
  return false;
};
const toBase64 = (str) => {
  return Buffer.from(str).toString("base64");
};
const sanitizeHeaders = (headers) => {
  return Object.assign(Object.assign({}, Object.fromEntries(headers.entries())), { authorization: "<REDACTED>" });
};
const normalizeRequest = (init, headers, config) => {
  var _a2, _b2, _c2;
  let body = init === null || init === undefined ? undefined : init.body;
  if (body && ((_a2 = headers.get("content-type")) === null || _a2 === undefined ? undefined : _a2.includes("application/json"))) {
    body = JSON.stringify(body);
  }
  const isFetchCredentialsSupported = "credentials" in Request.prototype;
  const credentials = ((_b2 = config.auth) === null || _b2 === undefined ? undefined : _b2.type) === "session" ? ((_c2 = config.auth) === null || _c2 === undefined ? undefined : _c2.fetchCredentials) || "include" : "omit";
  return Object.assign(Object.assign(Object.assign({}, init), { headers, credentials: isFetchCredentialsSupported ? credentials : undefined }), body ? { body } : {});
};
const normalizeResponse = (resp, reqHeaders) => __awaiter$1(undefined, undefined, undefined, function* () {
  var _a2, _b2;
  if (resp.status >= 300) {
    const jsonError = yield resp.json().catch(() => ({}));
    throw new FetchError((_a2 = jsonError.message) !== null && _a2 !== undefined ? _a2 : resp.statusText, resp.statusText, resp.status);
  }
  const isJsonRequest = (_b2 = reqHeaders.get("accept")) === null || _b2 === undefined ? undefined : _b2.includes("application/json");
  return isJsonRequest ? yield resp.json() : resp;
});
class FetchError extends Error {
  constructor(message, statusText, status) {
    super(message);
    this.statusText = statusText;
    this.status = status;
  }
}
class Client {
  constructor(config) {
    this.DEFAULT_JWT_STORAGE_KEY = "medusa_auth_token";
    this.token = "";
    this.getApiKeyHeader_ = () => {
      return this.config.apiKey ? { Authorization: "Basic " + toBase64(this.config.apiKey + ":") } : {};
    };
    this.getPublishableKeyHeader_ = () => {
      return this.config.publishableKey ? { [PUBLISHABLE_KEY_HEADER]: this.config.publishableKey } : {};
    };
    this.getJwtHeader_ = () => {
      var _a2;
      if (((_a2 = this.config.auth) === null || _a2 === undefined ? undefined : _a2.type) === "session") {
        return {};
      }
      const token = this.getToken_();
      return token ? { Authorization: `Bearer ${token}` } : {};
    };
    this.setToken_ = (token) => {
      const { storageMethod, storageKey } = this.getTokenStorageInfo_();
      switch (storageMethod) {
        case "local": {
          (undefined).localStorage.setItem(storageKey, token);
          break;
        }
        case "session": {
          (undefined).sessionStorage.setItem(storageKey, token);
          break;
        }
        case "memory": {
          this.token = token;
          break;
        }
      }
    };
    this.getToken_ = () => {
      const { storageMethod, storageKey } = this.getTokenStorageInfo_();
      switch (storageMethod) {
        case "local": {
          return (undefined).localStorage.getItem(storageKey);
        }
        case "session": {
          return (undefined).sessionStorage.getItem(storageKey);
        }
        case "memory": {
          return this.token;
        }
      }
      return;
    };
    this.getTokenStorageInfo_ = () => {
      var _a2, _b2;
      const hasLocal = hasStorage();
      const storageMethod = ((_a2 = this.config.auth) === null || _a2 === undefined ? undefined : _a2.jwtTokenStorageMethod) || (hasLocal ? "local" : "nostore");
      const storageKey = ((_b2 = this.config.auth) === null || _b2 === undefined ? undefined : _b2.jwtTokenStorageKey) || this.DEFAULT_JWT_STORAGE_KEY;
      if (storageMethod === "local") {
        throw new Error("Local JWT storage is only available in the browser");
      }
      if (storageMethod === "session") {
        throw new Error("Session JWT storage is only available in the browser");
      }
      return {
        storageMethod,
        storageKey
      };
    };
    this.config = Object.assign(Object.assign({}, config), { baseUrl: getBaseUrl(config.baseUrl) });
    const logger = config.logger || {
      error: console.error,
      warn: console.warn,
      info: console.info,
      debug: console.debug
    };
    this.logger = Object.assign(Object.assign({}, logger), { debug: config.debug ? logger.debug : () => {
    } });
    this.fetch_ = this.initClient();
  }
  /**
   * `fetch` closely follows (and uses under the hood) the native `fetch` API. There are, however, few key differences:
   * - Non 2xx statuses throw a `FetchError` with the status code as the `status` property, rather than resolving the promise
   * - You can pass `body` and `query` as objects, and they will be encoded and stringified.
   * - The response gets parsed as JSON if the `accept` header is set to `application/json`, otherwise the raw Response object is returned
   *
   * Since the response is dynamically determined, we cannot know if it is JSON or not. Therefore, it is important to pass `Response` as the return type
   *
   * @param input: FetchInput
   * @param init: FetchArgs
   * @returns Promise<T>
   */
  fetch(input, init) {
    return this.fetch_(input, init);
  }
  /**
   * `fetchStream` is a helper method to deal with server-sent events. It returns an object with a stream and an abort function.
   * It follows a very similar interface to `fetch`, with the return value being an async generator.
   * The stream is an async generator that yields `ServerSentEventMessage` objects, which contains the event name, stringified data, and few other properties.
   * The caller is responsible for handling `disconnect` events and aborting the stream. The caller is also responsible for parsing the data field.
   *
   * @param input: FetchInput
   * @param init: FetchArgs
   * @returns FetchStreamResponse
   */
  fetchStream(input, init) {
    return __awaiter$1(this, undefined, undefined, function* () {
      const abortController = new AbortController();
      const abortFunc = abortController.abort.bind(abortController);
      let res = yield this.fetch_(input, Object.assign(Object.assign({}, init), { signal: abortController.signal, headers: Object.assign(Object.assign({}, init === null || init === undefined ? undefined : init.headers), { accept: "text/event-stream" }) }));
      if (res.ok) {
        return { stream: events(res, abortController.signal), abort: abortFunc };
      }
      return { stream: null, abort: abortFunc };
    });
  }
  setToken(token) {
    this.setToken_(token);
  }
  clearToken() {
    this.clearToken_();
  }
  clearToken_() {
    const { storageMethod, storageKey } = this.getTokenStorageInfo_();
    switch (storageMethod) {
      case "local": {
        (undefined).localStorage.removeItem(storageKey);
        break;
      }
      case "session": {
        (undefined).sessionStorage.removeItem(storageKey);
        break;
      }
      case "memory": {
        this.token = "";
        break;
      }
    }
  }
  initClient() {
    const defaultHeaders = new Headers(Object.assign(Object.assign({ "content-type": "application/json", accept: "application/json" }, this.getApiKeyHeader_()), this.getPublishableKeyHeader_()));
    this.logger.debug("Initiating Medusa client with default headers:\n", `${JSON.stringify(sanitizeHeaders(defaultHeaders), null, 2)}
`);
    return (input, init) => __awaiter$1(this, undefined, undefined, function* () {
      const headers = new Headers(defaultHeaders);
      const customHeaders = Object.assign(Object.assign(Object.assign({}, this.config.globalHeaders), this.getJwtHeader_()), init === null || init === undefined ? undefined : init.headers);
      Object.entries(customHeaders).forEach(([key, value]) => {
        if (value === null) {
          headers.delete(key);
        } else {
          headers.set(key, value);
        }
      });
      let normalizedInput = input;
      if (input instanceof URL || typeof input === "string") {
        const baseUrl = new URL(this.config.baseUrl);
        const fullPath = `${baseUrl.pathname.replace(/\/$/, "")}/${input.toString().replace(/^\//, "")}`;
        normalizedInput = new URL(fullPath, baseUrl.origin);
        if (init === null || init === undefined ? undefined : init.query) {
          const params = Object.fromEntries(normalizedInput.searchParams.entries());
          const stringifiedQuery = qs.stringify(Object.assign(Object.assign({}, params), init.query));
          normalizedInput.search = stringifiedQuery;
        }
      }
      this.logger.debug("Performing request to:\n", `URL: ${normalizedInput.toString()}
`, `Headers: ${JSON.stringify(sanitizeHeaders(headers), null, 2)}
`);
      return yield fetch(normalizedInput, normalizeRequest(init, headers, this.config)).then((resp) => {
        this.logger.debug(`Received response with status ${resp.status}
`);
        return normalizeResponse(resp, headers);
      });
    });
  }
}
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
class Store2 {
  /**
   * @ignore
   */
  constructor(client) {
    this.region = {
      /**
       * This method retrieves the paginated list of regions in the store. It sends a request to the
       * [List Regions API route](https://docs.medusajs.com/api/store#regions_getregions).
       *
       * Related guide: [How to list regions in a storefront](https://docs.medusajs.com/resources/storefront-development/regions/list).
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request
       * @returns The paginated list of regions.
       *
       * @example
       * To retrieve the list of regions:
       *
       * ```ts
       * sdk.store.region.list()
       * .then(({ regions, count, limit, offset }) => {
       *   console.log(regions)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.region.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ regions, count, limit, offset }) => {
       *   console.log(regions)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each region:
       *
       * ```ts
       * sdk.store.region.list({
       *   fields: "id,*countries"
       * })
       * .then(({ regions, count, limit, offset }) => {
       *   console.log(regions)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/regions`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves a region by its ID. It sends a request to the [Get Region](https://docs.medusajs.com/api/store#regions_getregionsid)
       * API route.
       *
       * Related guide: [Store and retrieve regions in a storefront](https://docs.medusajs.com/resources/storefront-development/regions/store-retrieve-region).
       *
       * @param id - The region's ID.
       * @param query - Configure the fields to retrieve in the region.
       * @param headers - Headers to pass in the request
       * @returns The region.
       *
       * @example
       * To retrieve a region by its ID:
       *
       * ```ts
       * sdk.store.region.retrieve("reg_123")
       * .then(({ region }) => {
       *   console.log(region)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.region.retrieve(
       *   "reg_123",
       *   {
       *     fields: "id,*countries"
       *   }
       * )
       * .then(({ region }) => {
       *   console.log(region)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/regions/${id}`, {
          query,
          headers
        });
      })
    };
    this.collection = {
      /**
       * This method retrieves a paginated list of product collections. It sends a request to the
       * [List Collections](https://docs.medusajs.com/api/store#collections_getcollections) API route.
       *
       * Related guide: [How to retrieve collections in a storefront](https://docs.medusajs.com/resources/storefront-development/products/collections/list).
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request
       * @returns The paginated list of collections.
       *
       * @example
       * To retrieve the list of collections:
       *
       * ```ts
       * sdk.store.collection.list()
       * .then(({ collections, count, limit, offset }) => {
       *   console.log(collections)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.collection.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ collections, count, limit, offset }) => {
       *   console.log(collections)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each collection:
       *
       * ```ts
       * sdk.store.collection.list({
       *   fields: "id,handle"
       * })
       * .then(({ collections, count, limit, offset }) => {
       *   console.log(collections)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/collections`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves a collection by its ID. It sends a request to the [Get Collection](https://docs.medusajs.com/api/store#collections_getcollectionsid)
       * API route.
       *
       * Related guide: [How to retrieve a collection in a storefront](https://docs.medusajs.com/resources/storefront-development/products/collections/retrieve).
       *
       * @param id - The ID of the collection to retrieve.
       * @param query - Configure the fields to retrieve in the collection.
       * @param headers - Headers to pass in the request
       * @returns The collection.
       *
       * @example
       * To retrieve a collection by its ID:
       *
       * ```ts
       * sdk.store.collection.retrieve("pcol_123")
       * .then(({ collection }) => {
       *   console.log(collection)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.collection.retrieve("pcol_123", {
       *   fields: "id,handle"
       * })
       * .then(({ collection }) => {
       *   console.log(collection)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/collections/${id}`, {
          query,
          headers
        });
      })
    };
    this.category = {
      /**
       * This method retrieves a paginated list of product categories. It sends a request to the
       * [List Categories](https://docs.medusajs.com/api/store#product-categories_getproductcategories) API route.
       *
       * Related guide: [How to retrieve list of categories in the storefront](https://docs.medusajs.com/resources/storefront-development/products/categories/list).
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of categories.
       *
       * @example
       * To retrieve the list of categories:
       *
       * ```ts
       * sdk.store.category.list()
       * .then(({ product_categories, count, offset, limit }) => {
       *   console.log(product_categories)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.category.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ product_categories, count, offset, limit }) => {
       *   console.log(product_categories)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each category:
       *
       * ```ts
       * sdk.store.category.list({
       *   fields: "id,*parent_category"
       * })
       * .then(({ product_categories, count, offset, limit }) => {
       *   console.log(product_categories)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/product-categories`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves a category by its ID. It sends a request to the
       * [Retrieve Product Category](https://docs.medusajs.com/api/store#product-categories_getproductcategoriesid).
       *
       * Related guide: [How to retrieve a category in the storefront](https://docs.medusajs.com/resources/storefront-development/products/categories/retrieve).
       *
       * @param id - The ID of the category to retrieve.
       * @param query - Configure the fields to retrieve in the category.
       * @param headers - Headers to pass in the request
       * @returns The category.
       *
       * @example
       * To retrieve a category by its ID:
       *
       * ```ts
       * sdk.store.category.retrieve("pcat_123")
       * .then(({ product_category }) => {
       *   console.log(product_category)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.category.retrieve("pcat_123", {
       *   fields: "id,*parent_category"
       * })
       * .then(({ product_category }) => {
       *   console.log(product_category)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/product-categories/${id}`, {
          query,
          headers
        });
      })
    };
    this.product = {
      /**
       * This method retrieves a list of products. It sends a request to the
       * [List Products API route](https://docs.medusajs.com/api/store#products_getproducts).
       *
       * Related guides:
       *
       * - [How to list products in a storefront](https://docs.medusajs.com/resources/storefront-development/products/list).
       * - [How to retrieve a product variant's prices in the storefront](https://docs.medusajs.com/resources/storefront-development/products/price)
       *
       * @param query - Filters and pagination configurations.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of products.
       *
       * @example
       * To retrieve the list of products:
       *
       * ```ts
       * sdk.store.product.list()
       * .then(({ products, count, offset, limit }) => {
       *   console.log(products)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.product.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ products, count, offset, limit }) => {
       *   console.log(products)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each product:
       *
       * ```ts
       * sdk.store.product.list({
       *   fields: "id,*collection"
       * })
       * .then(({ products, count, offset, limit }) => {
       *   console.log(products)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/products`, {
          query,
          headers
        });
      }),
      /**
       * This method is used to retrieve a product by its ID. It sends a request to the
       * [Get Product](https://docs.medusajs.com/api/store#products_getproductsid) API route.
       *
       * Related guides:
       *
       * - [How to retrieve a product in the storefront](https://docs.medusajs.com/resources/storefront-development/products/retrieve).
       * - [How to retrieve a product variant's prices in the storefront](https://docs.medusajs.com/resources/storefront-development/products/price)
       *
       * @param id - The product's ID.
       * @param query - Configure the fields to retrieve in the product.
       * @param headers - Headers to pass in the request
       * @returns The product.
       *
       * @example
       * To retrieve a product by its ID:
       *
       * ```ts
       * sdk.store.product.retrieve("prod_123")
       * .then(({ product }) => {
       *   console.log(product)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.product.retrieve("prod_123", {
       *   fields: "id,*collection"
       * })
       * .then(({ product }) => {
       *   console.log(product)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/products/${id}`, {
          query,
          headers
        });
      })
    };
    this.cart = {
      /**
       * This method creates a cart. It sends a request to the [Create Cart](https://docs.medusajs.com/api/store#carts_postcarts)
       * API route.
       *
       * Related guide: [How to create a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/create).
       *
       * @param body - The details of the cart to create.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The created cart.
       *
       * @example
       * sdk.store.cart.create({
       *   region_id: "reg_123"
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      create: (body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates a cart. It sends a request to the
       * [Update Cart](https://docs.medusajs.com/api/store#carts_postcartsid) API route.
       *
       * Related guide: [How to update a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/update).
       *
       * @param id - The cart's ID.
       * @param body - The data to update in the cart.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The updated cart.
       *
       * @example
       * sdk.store.cart.update("cart_123", {
       *   region_id: "reg_123"
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      update: (id, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${id}`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method retrieves a cart by its ID. It sends a request to the
       * [Get Cart](https://docs.medusajs.com/api/store#carts_getcartsid) API route.
       *
       * Related guide: [How to retrieve a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/retrieve).
       *
       * @param id - The cart's ID.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * To retrieve a cart by its ID:
       *
       * ```ts
       * sdk.store.cart.retrieve("cart_123")
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.cart.retrieve("cart_123", {
       *   fields: "id,*items"
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${id}`, {
          headers,
          query
        });
      }),
      /**
       * This methods adds a product variant to the cart as a line item. It sends a request to the
       * [Add Line Item](https://docs.medusajs.com/api/store#carts_postcartsidlineitems) API route.
       *
       * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
       *
       * @param cartId - The cart's ID.
       * @param body - The details of the item to add.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * sdk.store.cart.createLineItem("cart_123", {
       *   variant_id: "variant_123",
       *   quantity: 1
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      createLineItem: (cartId, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${cartId}/line-items`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates a line item in a cart. It sends a request to the
       * [Update Line Item](https://docs.medusajs.com/api/store#carts_postcartsidlineitemsline_id) API route.
       *
       * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
       *
       * @param cartId - The cart's ID.
       * @param lineItemId - The line item's ID.
       * @param body - The data to update.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * sdk.store.cart.updateLineItem(
       *   "cart_123",
       *   "li_123",
       *   {
       *     quantity: 1
       *   }
       * )
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      updateLineItem: (cartId, lineItemId, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method deletes a line item from a cart. It sends a request to the
       * [Remove Line Item](https://docs.medusajs.com/api/store#carts_deletecartsidlineitemsline_id) API route.
       *
       * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
       *
       * @param cartId - The cart's ID.
       * @param lineItemId - The item's ID.
       * @param headers - Headers to pass in the request.
       * @returns The deletion's details.
       *
       * @example
       * sdk.store.cart.deleteLineItem(
       *   "cart_123",
       *   "li_123"
       * )
       * .then(({ deleted, parent: cart }) => {
       *   console.log(deleted, cart)
       * })
       */
      deleteLineItem: (cartId, lineItemId, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
          method: "DELETE",
          headers
        });
      }),
      /**
       * This method adds a shipping method to a cart. It sends a request to
       * the [Add Shipping Method](https://docs.medusajs.com/api/store#carts_postcartsidshippingmethods) API routes.
       *
       * Related guide: [Implement shipping step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/shipping).
       *
       * @param cartId - The cart's ID.
       * @param body - The shipping method's details.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The cart's details.
       *
       * @example
       * sdk.store.cart.addShippingMethod("cart_123", {
       *   option_id: "so_123",
       *   data: {
       *     // custom data for fulfillment provider.
       *   }
       * })
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      addShippingMethod: (cartId, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${cartId}/shipping-methods`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method completes a cart and places the order. It's the last step of the checkout flow.
       * The method sends a request to the [Complete Cart](https://docs.medusajs.com/api/store#carts_postcartsidcomplete)
       * API route.
       *
       * Related guide: [Learn how to complete cart in checkout flow](https://docs.medusajs.com/resources/storefront-development/checkout/complete-cart).
       *
       * @param cartId - The cart's ID.
       * @param query - Configure the fields to retrieve in the created order.
       * @param headers - Headers to pass in the request.
       * @returns The order's details, if it was placed successfully. Otherwise, the cart is returned with an error.
       *
       * @example
       * sdk.store.cart.complete("cart_123")
       * .then((data) => {
       *   if(data.type === "cart") {
       *     // an error occurred
       *     console.log(data.error, data.cart)
       *   } else {
       *     // order placed successfully
       *     console.log(data.order)
       *   }
       * })
       */
      complete: (cartId, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${cartId}/complete`, {
          method: "POST",
          headers,
          query
        });
      }),
      /**
       * This method updates the customer of a cart.
       *
       * @param id - The cart's ID.
       * @param query - Configure the fields to retrieve in the cart.
       * @param headers - Headers to pass in the request.
       * @returns The updated cart.
       *
       * @example
       * sdk.store.cart.transferCart("cart_123")
       * .then(({ cart }) => {
       *   console.log(cart)
       * })
       */
      transferCart: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/carts/${id}/customer`, {
          method: "POST",
          headers,
          query
        });
      })
    };
    this.fulfillment = {
      /**
       * This method retrieves the list of shipping options for a cart. It sends a request to
       * the [List Shipping Options](https://docs.medusajs.com/api/store#shipping-options_getshippingoptions)
       * API route.
       *
       * Related guide: [Implement shipping step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/shipping).
       *
       * @param query - The cart's details along with configurations of the fields to retrieve in the options.
       * @param headers - Headers to pass in the request.
       * @returns The shipping options that can be used for the cart.
       *
       * @example
       * sdk.store.fulfillment.listCartOptions({
       *   cart_id: "cart_123"
       * })
       * .then(({ shipping_options }) => {
       *   console.log(shipping_options)
       * })
       */
      listCartOptions: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/shipping-options`, {
          headers,
          query
        });
      }),
      calculate: (id, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return yield this.client.fetch(`/store/shipping-options/${id}/calculate`, {
          method: "POST",
          headers,
          body,
          query
        });
      })
    };
    this.payment = {
      /**
       * This method retrieves the payment providers available in a region, which is useful during checkout.
       * It sends a request to the [List Payment Providers](https://docs.medusajs.com/api/store#payment-providers_getpaymentproviders)
       * API route.
       *
       * Related guide: [Implement payment step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/payment).
       *
       * @param query - The filters to apply on the retrieved providers, along with configurations of the
       * fields to retrieve in the options.
       * @param headers - Headers to pass in the request.
       * @returns The list of payment providers.
       *
       * @example
       * To retrieve the list of payment providers for a region:
       *
       * ```ts
       * sdk.store.payment.listPaymentProviders({
       *   region_id: "reg_123"
       * })
       * .then(({ payment_providers, count, offset, limit }) => {
       *   console.log(payment_providers)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.payment.listPaymentProviders({
       *   region_id: "reg_123",
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ payment_providers, count, offset, limit }) => {
       *   console.log(payment_providers)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each provider:
       *
       * ```ts
       * sdk.store.payment.listPaymentProviders({
       *   region_id: "reg_123",
       *   limit: 10,
       *   offset: 10,
       *   fields: "id"
       * })
       * .then(({ payment_providers, count, offset, limit }) => {
       *   console.log(payment_providers)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      listPaymentProviders: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/payment-providers`, {
          headers,
          query
        });
      }),
      /**
       * This method creates a payment session of a cart's payment collection, selecting a payment provider.
       * It sends a request to the [Initialize Payment Session](https://docs.medusajs.com/api/store#payment-collections_postpaymentcollectionsidpaymentsessions)
       * API route.
       *
       * If the cart doesn't have a payment collection, a payment collection is created for the cart by
       * sending a request to the [Create Payment Collection](https://docs.medusajs.com/api/store#payment-collections_postpaymentcollections)
       * API route.
       *
       * Related guide: [Implement payment step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/payment).
       *
       * @param cart - The cart's details.
       * @param body - The payment session's details.
       * @param query - Configure the fields to retrieve in the payment collection.
       * @param headers - Headers to pass in the request.
       * @returns The payment collection's details.
       *
       * @example
       * sdk.store.payment.initiatePaymentSession(
       *   cart, // assuming you already have the cart object.
       *   {
       *     provider_id: "pp_stripe_stripe",
       *     data: {
       *       // any data relevant for the provider.
       *     }
       *   }
       * )
       * .then(({ payment_collection }) => {
       *   console.log(payment_collection)
       * })
       */
      initiatePaymentSession: (cart, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        var _a2;
        let paymentCollectionId = (_a2 = cart.payment_collection) === null || _a2 === undefined ? undefined : _a2.id;
        if (!paymentCollectionId) {
          const collectionBody = {
            cart_id: cart.id
          };
          paymentCollectionId = (yield this.client.fetch(`/store/payment-collections`, {
            method: "POST",
            headers,
            body: collectionBody
          })).payment_collection.id;
        }
        return this.client.fetch(`/store/payment-collections/${paymentCollectionId}/payment-sessions`, {
          method: "POST",
          headers,
          body,
          query
        });
      })
    };
    this.order = {
      /**
       * This method retrieves a paginated list of orders matching the specified filters. It
       * sends a request to the [List Orders](https://docs.medusajs.com/api/store#orders_getorders)
       * API route.
       *
       * @param query - Configure the fields to retrieve in the orders.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of orders.
       *
       * @example
       * To retrieve the list of orders:
       *
       * ```ts
       * sdk.store.order.list()
       * .then(({ orders, count, offset, limit }) => {
       *   console.log(orders)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.order.list({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ orders, count, offset, limit }) => {
       *   console.log(orders)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each order:
       *
       * ```ts
       * sdk.store.order.list({
       *   fields: "id,*items"
       * })
       * .then(({ orders, count, offset, limit }) => {
       *   console.log(orders)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      list: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/orders`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves an order by its ID. It sends a request to the
       * [Get Order](https://docs.medusajs.com/api/store#orders_getordersid) API route.
       *
       * @param id - The order's ID.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order's details.
       *
       * @example
       * To retrieve an order by its ID:
       *
       * ```ts
       * sdk.store.order.retrieve("order_123")
       * .then(({ order }) => {
       *   console.log(order)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.order.retrieve("order_123", {
       *   fields: "id,*items"
       * })
       * .then(({ order }) => {
       *   console.log(order)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieve: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/orders/${id}`, {
          headers,
          query
        });
      }),
      /**
       * This method requests a order transfer from a guest account to the current, logged in customer account.
       *
       * Customer requesting the transfer must be logged in.
       *
       * @param body - The transfer's details.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.requestTransfer(
       *   "order_123",
       *   {
       *     description: "I want to transfer this order to my friend."
       *   },
       *   {},
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      requestTransfer: (id, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/request`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method cancels an order transfer request.
       *
       * Customer requesting the transfer must be logged in.
       *
       * @param id - The order's ID.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.cancelTransfer(
       *   "order_123",
       *   {},
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      cancelTransfer: (id, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/cancel`, {
          method: "POST",
          headers,
          query
        });
      }),
      /**
       * The method called for the original owner to accept the order transfer to a new owner.
       *
       * @param id - The order's ID.
       * @param body - The payload containing the transfer token.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.acceptTransfer(
       *   "order_123",
       *   {
       *     token: "transfer_token"
       *   },
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      acceptTransfer: (id, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/accept`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * The method called for the original owner to decline the order transfer to a new owner.
       *
       * @param id - The order's ID.
       * @param body - The payload containing the transfer token.
       * @param query - Configure the fields to retrieve in the order.
       * @param headers - Headers to pass in the request.
       * @returns The order details.
       *
       * @example
       * sdk.store.order.declineTransfer(
       *   "order_123",
       *   {
       *     token: "transfer_token"
       *   },
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ order }) => {
       *   console.log(order)
       * })
       */
      declineTransfer: (id, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/orders/${id}/transfer/decline`, {
          method: "POST",
          headers,
          body,
          query
        });
      })
    };
    this.customer = {
      /**
       * This method registers a customer. It sends a request to the [Register Customer](https://docs.medusajs.com/api/store#customers_postcustomers)
       * API route.
       *
       * You must use the {@link Auth.register} method first to retrieve a registration token. Then, pass that
       * registration token in the `headers` parameter of this method as an authorization bearer header.
       *
       * Related guide: [How to register customer in storefront](https://docs.medusajs.com/resources/storefront-development/customers/register)
       *
       * @param body - The customer's details.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request. This is where you include the authorization JWT registration token.
       * @returns The customer's details.
       *
       * @example
       * const token = await sdk.auth.register("customer", "emailpass", {
       *   "email": "customer@gmail.com",
       *   "password": "supersecret"
       * })
       *
       * sdk.store.customer.create(
       *   {
       *     "email": "customer@gmail.com"
       *   },
       *   {},
       *   {
       *     Authorization: `Bearer ${token}`
       *   }
       * )
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      create: (body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates the logged-in customer's details. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the
       * [Update Customer](https://docs.medusajs.com/api/store#customers_postcustomersme) API route.
       *
       * Related guide: [How to edit customer's profile in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/profile).
       *
       * @param body - The customer's details to update.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.update({
       *   first_name: "John"
       * })
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      update: (body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method retrieves the logged-in customer's details. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Get Logged-In Customer](https://docs.medusajs.com/api/store#customers_getcustomersme)
       * API route.
       *
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.retrieve()
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      retrieve: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me`, {
          query,
          headers
        });
      }),
      /**
       * This method creates an address for the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Create Address](https://docs.medusajs.com/api/store#customers_postcustomersmeaddresses)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param body - The address's details.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.createAddress({
       *   country_code: "us"
       * })
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      createAddress: (body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me/addresses`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method updates the address of the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Update Address](https://docs.medusajs.com/api/store#customers_postcustomersmeaddressesaddress_id)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param addressId - The ID of the address to update.
       * @param body - The details to update in the address.
       * @param query - Configure the fields to retrieve in the customer.
       * @param headers - Headers to pass in the request.
       * @returns The customer's details.
       *
       * @example
       * sdk.store.customer.updateAddress(
       *   "caddr_123",
       *   {
       *     country_code: "us"
       *   }
       * )
       * .then(({ customer }) => {
       *   console.log(customer)
       * })
       */
      updateAddress: (addressId, body, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
          method: "POST",
          headers,
          body,
          query
        });
      }),
      /**
       * This method retrieves the logged-in customer's address. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [List Customer's Address](https://docs.medusajs.com/api/store#customers_getcustomersmeaddresses)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param query - Configure the fields to retrieve in the addresses.
       * @param headers - Headers to pass in the request.
       * @returns The paginated list of addresses.
       *
       * @example
       * To retrieve the list of addresses:
       *
       * ```ts
       * sdk.store.customer.listAddress()
       * .then(({ addresses, count, offset, limit }) => {
       *   console.log(addresses)
       * })
       * ```
       *
       * To configure the pagination, pass the `limit` and `offset` query parameters.
       *
       * For example, to retrieve only 10 items and skip 10 items:
       *
       * ```ts
       * sdk.store.customer.listAddress({
       *   limit: 10,
       *   offset: 10
       * })
       * .then(({ addresses, count, offset, limit }) => {
       *   console.log(addresses)
       * })
       * ```
       *
       * Using the `fields` query parameter, you can specify the fields and relations to retrieve
       * in each address:
       *
       * ```ts
       * sdk.store.customer.listAddress({
       *   fields: "id,country_code"
       * })
       * .then(({ addresses, count, offset, limit }) => {
       *   console.log(addresses)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      listAddress: (query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me/addresses`, {
          query,
          headers
        });
      }),
      /**
       * This method retrieves an address of the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Get Address](https://docs.medusajs.com/api/store#customers_getcustomersmeaddressesaddress_id)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param addressId - The address's ID.
       * @param query - Configure the fields to retrieve in the address.
       * @param headers - Headers to pass in the request.
       * @returns The address's details.
       *
       * @example
       * To retrieve an address by its ID:
       *
       * ```ts
       * sdk.store.customer.retrieveAddress(
       *   "caddr_123"
       * )
       * .then(({ address }) => {
       *   console.log(address)
       * })
       * ```
       *
       * To specify the fields and relations to retrieve:
       *
       * ```ts
       * sdk.store.customer.retrieveAddress(
       *   "caddr_123",
       *   {
       *     fields: "id,country_code"
       *   }
       * )
       * .then(({ address }) => {
       *   console.log(address)
       * })
       * ```
       *
       * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
       */
      retrieveAddress: (addressId, query, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
          query,
          headers
        });
      }),
      /**
       * This method deletes an address of the logged-in customer. The customer must be logged in
       * first with the {@link Auth.login} method.
       *
       * It sends a request to the [Remove Address](https://docs.medusajs.com/api/store#customers_deletecustomersmeaddressesaddress_id)
       * API route.
       *
       * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
       *
       * @param addressId - The address's ID.
       * @param headers - Headers to pass in the request.
       * @returns The deletion's details.
       *
       * @example
       * sdk.store.customer.deleteAddress("caddr_123")
       * .then(({ deleted, parent: customer }) => {
       *   console.log(customer)
       * })
       */
      deleteAddress: (addressId, headers) => __awaiter(this, undefined, undefined, function* () {
        return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
          method: "DELETE",
          headers
        });
      })
    };
    this.client = client;
  }
}
class Medusa {
  constructor(config) {
    this.client = new Client(config);
    this.admin = new Admin(this.client);
    this.store = new Store2(this.client);
    this.auth = new Auth(this.client, config);
  }
}
const plugin_SoFn5xinh0 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const { medusa: config } = (/* @__PURE__ */ useRuntimeConfig()).public;
  const medusaClient = new Medusa(config);
  nuxtApp.provide("medusa", medusaClient);
});
const preference = "light";
const plugin_server_ZAZESFgwP9 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a2;
  const colorMode = ((_a2 = nuxtApp.ssrContext) == null ? undefined : _a2.islandContext) ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = undefined;
      scope = undefined;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!scope) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
function reactiveComputed(fn) {
  return toReactive(computed(fn));
}
function reactiveOmit(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs(obj)).filter(([k, v]) => !predicate(toValue(v), k))) : Object.fromEntries(Object.entries(toRefs(obj)).filter((e) => !flatKeys.includes(e[0]))));
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== undefined && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke2;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function reactivePick(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
const slideoverInjectionKey = Symbol("nuxt-ui.slideover");
function _useSlideover() {
  const slideoverState = inject(slideoverInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!slideoverState) {
      throw new Error("useSlideover() is called without provider");
    }
    slideoverState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!slideoverState) return;
    isOpen.value = false;
  }
  function reset() {
    if (!slideoverState) return;
    slideoverState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!slideoverState) return;
    slideoverState.value = {
      ...slideoverState.value,
      props: {
        ...slideoverState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
const useSlideover = createSharedComposable(_useSlideover);
const slideover_08oQcLLXfY = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const slideoverState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(slideoverInjectionKey, slideoverState);
});
const modalInjectionKey = Symbol("nuxt-ui.modal");
function _useModal() {
  const modalState = inject(modalInjectionKey);
  const isOpen = ref(false);
  function open(component, props) {
    if (!modalState) {
      throw new Error("useModal() is called without provider");
    }
    modalState.value = {
      component,
      props: props ?? {}
    };
    isOpen.value = true;
  }
  async function close() {
    if (!modalState) return;
    isOpen.value = false;
  }
  function reset() {
    if (!modalState) return;
    modalState.value = {
      component: "div",
      props: {}
    };
  }
  function patch(props) {
    if (!modalState) return;
    modalState.value = {
      ...modalState.value,
      props: {
        ...modalState.value.props,
        ...props
      }
    };
  }
  return {
    open,
    close,
    reset,
    patch,
    isOpen
  };
}
const useModal = createSharedComposable(_useModal);
const modal_3XUjJSuxOz = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(modalInjectionKey, modalState);
});
const colors_sV6XXNwsjq = /* @__PURE__ */ defineNuxtPlugin(() => {
  const appConfig2 = useAppConfig();
  useNuxtApp();
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  function generateShades(key, value) {
    return `${shades.map((shade) => `--ui-color-${key}-${shade}: var(--color-${value}-${shade});`).join("\n  ")}`;
  }
  function generateColor(key, shade) {
    return `--ui-${key}: var(--ui-color-${key}-${shade});`;
  }
  const root = computed(() => {
    const { neutral, ...colors } = appConfig2.ui.colors;
    return `:root {
  ${Object.entries(appConfig2.ui.colors).map(([key, value]) => generateShades(key, value)).join("\n  ")}

  ${Object.keys(colors).map((key) => generateColor(key, 500)).join("\n  ")}
}
.dark {
  ${Object.keys(colors).map((key) => generateColor(key, 400)).join("\n  ")}
}`;
  });
  const headData = {
    style: [{
      innerHTML: () => root.value,
      tagPriority: -2,
      id: "nuxt-ui-colors",
      type: "text/css"
    }]
  };
  useHead(headData);
});
const plugin_SLXWw2twWi = /* @__PURE__ */ defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a2, _b2;
    const configs = /* @__PURE__ */ useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    disableCache("all");
    const resources = [];
    if (options.provider === "server") {
      const baseURL2 = ((_b2 = (_a2 = configs.app) == null ? undefined : _a2.baseURL) == null ? undefined : _b2.replace(/\/$/, "")) ?? "";
      resources.push(baseURL2 + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    async function customIconLoader(icons, prefix) {
      try {
        const data = await $fetch(resources[0] + "/" + prefix + ".json", {
          query: {
            icons: icons.join(",")
          }
        });
        if (!data || data.prefix !== prefix || !data.icons)
          throw new Error("Invalid data" + JSON.stringify(data));
        return data;
      } catch (e) {
        console.error("Failed to load custom icons", e);
        return null;
      }
    }
    addAPIProvider("", { resources });
    for (const prefix of options.customCollections || []) {
      if (prefix)
        setCustomIconsLoader(customIconLoader, prefix);
    }
  }
});
const vue3_cookies_9wS4nbtrLN = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const { cookies } = useCookies();
  nuxtApp.provide("cookies", cookies);
});
const plugins = [
  unhead_Uk13qZHRya,
  plugin,
  revive_payload_server_KNCP7Zgt8H,
  components_plugin_KR1HBZs4kY,
  plugin_SoFn5xinh0,
  plugin_server_ZAZESFgwP9,
  slideover_08oQcLLXfY,
  modal_3XUjJSuxOz,
  colors_sV6XXNwsjq,
  plugin_SLXWw2twWi,
  vue3_cookies_9wS4nbtrLN
];
function useToast() {
  const toasts = useState("toasts", () => []);
  function add(toast2) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      open: true,
      ...toast2
    };
    const index2 = toasts.value.findIndex((t) => t.id === body.id);
    if (index2 === -1) {
      toasts.value.push(body);
    }
    toasts.value = toasts.value.slice(-5);
    return body;
  }
  function update(id, toast2) {
    const index2 = toasts.value.findIndex((t) => t.id === id);
    if (index2 !== -1) {
      toasts.value[index2] = {
        ...toasts.value[index2],
        ...toast2
      };
    }
  }
  function remove(id) {
    const index2 = toasts.value.findIndex((t) => t.id === id);
    if (index2 !== -1) {
      toasts.value[index2] = {
        ...toasts.value[index2],
        open: false
      };
    }
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id);
    }, 200);
  }
  function clear() {
    toasts.value = [];
  }
  return {
    toasts,
    add,
    update,
    remove,
    clear
  };
}
function omit(data, keys) {
  const result = { ...data };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return Number.isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === undefined || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== undefined ? result : defaultValue;
}
function looseToNumber(val) {
  const n = Number.parseFloat(val);
  return Number.isNaN(n) ? val : n;
}
function buildTranslator(locale) {
  return (path, option) => translate(path, option, unref(locale));
}
function translate(path, option, locale) {
  const prop = get(locale, `messages.${path}`, path);
  return prop.replace(
    /\{(\w+)\}/g,
    (_, key) => `${(option == null ? undefined : option[key]) ?? `{${key}}`}`
  );
}
function buildLocaleContext(locale) {
  const lang = computed(() => unref(locale).name);
  const code = computed(() => unref(locale).code);
  const dir = computed(() => unref(locale).dir);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    code,
    dir,
    locale: localeRef,
    t: buildTranslator(locale)
  };
}
function defineLocale(options) {
  return defu(options, { dir: "ltr" });
}
const en = defineLocale({
  name: "English",
  code: "en",
  messages: {
    inputMenu: {
      noMatch: "No matching data",
      noData: "No data",
      create: 'Create "{label}"'
    },
    calendar: {
      prevYear: "Previous year",
      nextYear: "Next year",
      prevMonth: "Previous month",
      nextMonth: "Next month"
    },
    inputNumber: {
      increment: "Increment",
      decrement: "Decrement"
    },
    commandPalette: {
      noMatch: "No matching data",
      noData: "No data",
      close: "Close"
    },
    selectMenu: {
      noMatch: "No matching data",
      noData: "No data",
      create: 'Create "{label}"'
    },
    toast: {
      close: "Close"
    },
    carousel: {
      prev: "Prev",
      next: "Next",
      goto: "Go to slide {slide}"
    },
    modal: {
      close: "Close"
    },
    slideover: {
      close: "Close"
    },
    alert: {
      close: "Close"
    },
    table: {
      noData: "No data"
    }
  }
});
const localeContextInjectionKey = Symbol("nuxt-ui.locale-context");
const _useLocale = (localeOverrides) => {
  const locale = localeOverrides || inject(localeContextInjectionKey, ref());
  return buildLocaleContext(computed(() => locale.value || en));
};
const useLocale = createSharedComposable(_useLocale);
async function loadIcon(name, timeout) {
  if (!name)
    return null;
  const _icon = getIcon(name);
  if (_icon)
    return _icon;
  let timeoutWarn;
  const load = loadIcon$1(name).catch(() => {
    console.warn(`[Icon] failed to load icon \`${name}\``);
    return null;
  });
  if (timeout > 0)
    await Promise.race([
      load,
      new Promise((resolve) => {
        timeoutWarn = setTimeout(() => {
          console.warn(`[Icon] loading icon \`${name}\` timed out after ${timeout}ms`);
          resolve();
        }, timeout);
      })
    ]).finally(() => clearTimeout(timeoutWarn));
  else
    await load;
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a2;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a2 = options.aliases) == null ? undefined : _a2[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}
const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => props.name ? options.cssSelectorPrefix + props.name : "");
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize ?? options.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    onServerPrefetch(async () => {
      var _a2;
      {
        const configs = (/* @__PURE__ */ useRuntimeConfig()).icon || {};
        if (!((_a2 = configs == null ? undefined : configs.serverKnownCssClasses) == null ? undefined : _a2.includes(cssClass.value))) {
          const icon = await loadIcon(props.name, options.fetchTimeout).catch(() => null);
          if (!icon)
            return null;
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (props.name && !ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
          return null;
        }
      }
    });
    return () => h("span", { class: ["iconify", cssClass.value] });
  }
});
const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    if (name.value) {
      {
        useAsyncData(
          storeKey,
          () => loadIcon(name.value, options.fetchTimeout),
          { deep: false }
        );
      }
    }
    return () => h(Icon, {
      icon: name.value,
      ssr: true,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize ?? options.customize
    }, slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const runtimeOptions = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a2;
        return ((_a2 = nuxtApp.vueApp) == null ? undefined : _a2.component(name.value)) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || runtimeOptions.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || runtimeOptions.customize;
    return () => h(
      component.value,
      {
        ...runtimeOptions.attrs,
        name: name.value,
        class: runtimeOptions.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    mode: {},
    size: {},
    customize: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "name", "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Icon, mergeProps(unref(iconProps), _attrs), null, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Icon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined;
};
const avatarGroupInjectionKey = Symbol("nuxt-ui.avatar-group");
function useAvatarGroup(props) {
  const avatarGroup = inject(avatarGroupInjectionKey, undefined);
  const size = computed(() => props.size ?? (avatarGroup == null ? undefined : avatarGroup.value.size));
  provide(avatarGroupInjectionKey, computed(() => ({ size: size.value })));
  return {
    size
  };
}
const ImageComponent = "img";
const theme$4 = {
  "slots": {
    "root": "inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-full align-middle bg-[var(--ui-bg-elevated)]",
    "image": "h-full w-full rounded-[inherit] object-cover",
    "fallback": "font-medium leading-none text-[var(--ui-text-muted)] truncate",
    "icon": "text-[var(--ui-text-muted)] shrink-0"
  },
  "variants": {
    "size": {
      "3xs": {
        "root": "size-4 text-[8px]"
      },
      "2xs": {
        "root": "size-5 text-[10px]"
      },
      "xs": {
        "root": "size-6 text-xs"
      },
      "sm": {
        "root": "size-7 text-sm"
      },
      "md": {
        "root": "size-8 text-base"
      },
      "lg": {
        "root": "size-9 text-lg"
      },
      "xl": {
        "root": "size-10 text-xl"
      },
      "2xl": {
        "root": "size-11 text-[22px]"
      },
      "3xl": {
        "root": "size-12 text-2xl"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const appConfig$4 = _appConfig;
const avatar = tv({ extend: tv(theme$4), ...((_a = appConfig$4.ui) == null ? undefined : _a.avatar) || {} });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    as: { default: "span" },
    src: {},
    alt: {},
    icon: {},
    text: {},
    size: {},
    class: {},
    ui: {},
    delayMs: {}
  },
  setup(__props) {
    const props = __props;
    const fallbackProps = useForwardProps(reactivePick(props, "delayMs"));
    const fallback = computed(() => props.text || (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2));
    const { size } = useAvatarGroup(props);
    const ui = computed(() => avatar({
      size: size.value
    }));
    const sizePx = computed(() => ({
      "3xs": 16,
      "2xs": 20,
      "xs": 24,
      "sm": 28,
      "md": 32,
      "lg": 36,
      "xl": 40,
      "2xl": 44,
      "3xl": 48
    })[props.size || "md"]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            if (_ctx.src) {
              _push2(ssrRenderComponent(unref(AvatarImage), mergeProps({
                as: unref(ImageComponent),
                src: _ctx.src,
                alt: _ctx.alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                class: ui.value.image({ class: (_a3 = props.ui) == null ? undefined : _a3.image })
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(AvatarFallback), mergeProps({ "as-child": "" }, unref(fallbackProps)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4, _b3;
                    if (_ctx.icon) {
                      _push3(ssrRenderComponent(_sfc_main$d, {
                        name: _ctx.icon,
                        class: ui.value.icon({ class: (_a4 = props.ui) == null ? undefined : _a4.icon })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<span class="${ssrRenderClass(ui.value.fallback({ class: (_b3 = props.ui) == null ? undefined : _b3.fallback }))}"${_scopeId2}>${ssrInterpolate(fallback.value)}</span>`);
                    }
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => {
                      var _a4, _b3;
                      return [
                        _ctx.icon ? (openBlock(), createBlock(_sfc_main$d, {
                          key: 0,
                          name: _ctx.icon,
                          class: ui.value.icon({ class: (_a4 = props.ui) == null ? undefined : _a4.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: ui.value.fallback({ class: (_b3 = props.ui) == null ? undefined : _b3.fallback })
                        }, toDisplayString(fallback.value), 3))
                      ];
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.src ? (openBlock(), createBlock(unref(AvatarImage), mergeProps({
                key: 0,
                as: unref(ImageComponent),
                src: _ctx.src,
                alt: _ctx.alt,
                width: sizePx.value,
                height: sizePx.value
              }, _ctx.$attrs, {
                class: ui.value.image({ class: (_b2 = props.ui) == null ? undefined : _b2.image })
              }), null, 16, ["as", "src", "alt", "width", "height", "class"])) : createCommentVNode("", true),
              createVNode(unref(AvatarFallback), mergeProps({ "as-child": "" }, unref(fallbackProps)), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => {
                    var _a4, _b3;
                    return [
                      _ctx.icon ? (openBlock(), createBlock(_sfc_main$d, {
                        key: 0,
                        name: _ctx.icon,
                        class: ui.value.icon({ class: (_a4 = props.ui) == null ? undefined : _a4.icon })
                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: ui.value.fallback({ class: (_b3 = props.ui) == null ? undefined : _b3.fallback })
                      }, toDisplayString(fallback.value), 3))
                    ];
                  })
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined;
};
function useComponentIcons(componentProps) {
  const appConfig2 = useAppConfig();
  const props = computed(() => toValue(componentProps));
  const isLeading = computed(() => props.value.icon && props.value.leading || props.value.icon && !props.value.trailing || props.value.loading && !props.value.trailing || !!props.value.leadingIcon);
  const isTrailing = computed(() => props.value.icon && props.value.trailing || props.value.loading && props.value.trailing || !!props.value.trailingIcon);
  const leadingIconName = computed(() => {
    if (props.value.loading) {
      return props.value.loadingIcon || appConfig2.ui.icons.loading;
    }
    return props.value.leadingIcon || props.value.icon;
  });
  const trailingIconName = computed(() => {
    if (props.value.loading && !isLeading.value) {
      return props.value.loadingIcon || appConfig2.ui.icons.loading;
    }
    return props.value.trailingIcon || props.value.icon;
  });
  return {
    isLeading,
    isTrailing,
    leadingIconName,
    trailingIconName
  };
}
const buttonGroupInjectionKey = Symbol("nuxt-ui.button-group");
function useButtonGroup(props) {
  const buttonGroup = inject(buttonGroupInjectionKey, undefined);
  return {
    orientation: computed(() => buttonGroup == null ? undefined : buttonGroup.value.orientation),
    size: computed(() => (props == null ? undefined : props.size) ?? (buttonGroup == null ? undefined : buttonGroup.value.size))
  };
}
const formOptionsInjectionKey = Symbol("nuxt-ui.form-options");
const formBusInjectionKey = Symbol("nuxt-ui.form-events");
const formFieldInjectionKey = Symbol("nuxt-ui.form-field");
const inputIdInjectionKey = Symbol("nuxt-ui.input-id");
const formInputsInjectionKey = Symbol("nuxt-ui.form-inputs");
const formLoadingInjectionKey = Symbol("nuxt-ui.form-loading");
function useFormField(props, opts) {
  const formOptions = inject(formOptionsInjectionKey, undefined);
  const formBus = inject(formBusInjectionKey, undefined);
  const formField = inject(formFieldInjectionKey, undefined);
  const formInputs = inject(formInputsInjectionKey, undefined);
  const inputId = inject(inputIdInjectionKey, undefined);
  if (formField && inputId) {
    if (props == null ? undefined : props.legend) {
      inputId.value = undefined;
    } else if (props == null ? undefined : props.id) {
      inputId.value = props == null ? undefined : props.id;
    }
    if (formInputs && formField.value.name && inputId.value) {
      formInputs.value[formField.value.name] = { id: inputId.value, pattern: formField.value.errorPattern };
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, name) {
    if (formBus && formField && name) {
      formBus.emit({ type, name });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formField == null ? undefined : formField.value.name);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formField == null ? undefined : formField.value.name);
  }
  const emitFormInput = useDebounceFn(
    () => {
      emitFormEvent("input", formField == null ? undefined : formField.value.name);
    },
    (formField == null ? undefined : formField.value.validateOnInputDelay) ?? (formOptions == null ? undefined : formOptions.value.validateOnInputDelay) ?? 0
  );
  return {
    id: computed(() => (props == null ? undefined : props.id) ?? (inputId == null ? undefined : inputId.value)),
    name: computed(() => (props == null ? undefined : props.name) ?? (formField == null ? undefined : formField.value.name)),
    size: computed(() => (props == null ? undefined : props.size) ?? (formField == null ? undefined : formField.value.size)),
    color: computed(() => (formField == null ? undefined : formField.value.error) ? "error" : props == null ? undefined : props.color),
    highlight: computed(() => (formField == null ? undefined : formField.value.error) ? true : props == null ? undefined : props.highlight),
    disabled: computed(() => (formOptions == null ? undefined : formOptions.value.disabled) || (props == null ? undefined : props.disabled)),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
}
function pickLinkProps(link2) {
  return reactivePick(link2, "active", "activeClass", "ariaCurrentValue", "ariaLabel", "as", "disabled", "exact", "exactActiveClass", "exactHash", "exactQuery", "external", "href", "inactiveClass", "noPrefetch", "noRel", "prefetch", "prefetchedClass", "rel", "replace", "target", "to", "type", "title");
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LinkBase",
  __ssrInlineRender: true,
  props: {
    as: { default: "button" },
    type: { default: "button" },
    disabled: { type: Boolean },
    onClick: {},
    href: {},
    navigate: {},
    rel: {},
    target: {},
    isExternal: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    function onClickWrapper(e) {
      if (props.disabled) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      if (props.onClick) {
        for (const onClick of Array.isArray(props.onClick) ? props.onClick : [props.onClick]) {
          onClick(e);
        }
      }
      if (props.href && props.navigate && !props.isExternal) {
        props.navigate(e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps(_ctx.href ? {
        "as": "a",
        "href": _ctx.disabled ? undefined : _ctx.href,
        "aria-disabled": _ctx.disabled ? "true" : undefined,
        "role": _ctx.disabled ? "link" : undefined,
        "tabindex": _ctx.disabled ? -1 : undefined
      } : _ctx.as === "button" ? {
        as: _ctx.as,
        type: _ctx.type,
        disabled: _ctx.disabled
      } : {
        as: _ctx.as
      }, {
        rel: _ctx.rel,
        target: _ctx.target,
        onClick: onClickWrapper
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
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined;
};
const theme$3 = {
  "base": "focus-visible:outline-[var(--ui-primary)]",
  "variants": {
    "active": {
      "true": "text-[var(--ui-primary)]",
      "false": [
        "text-[var(--ui-text-muted)] hover:text-[var(--ui-text)]",
        "transition-colors"
      ]
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    }
  }
};
const appConfig$3 = _appConfig;
const link = tv({ extend: tv(theme$3), ...((_b = appConfig$3.ui) == null ? undefined : _b.link) || {} });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    as: { default: "button" },
    type: { default: "button" },
    disabled: { type: Boolean },
    active: { type: Boolean, default: undefined },
    exact: { type: Boolean },
    exactQuery: { type: [Boolean, String] },
    exactHash: { type: Boolean },
    inactiveClass: { default: "" },
    custom: { type: Boolean },
    raw: { type: Boolean },
    class: {},
    to: {},
    href: {},
    external: { type: Boolean },
    target: {},
    rel: {},
    noRel: { type: Boolean },
    prefetchedClass: {},
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    activeClass: { default: "" },
    exactActiveClass: {},
    ariaCurrentValue: {},
    viewTransition: { type: Boolean },
    replace: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const nuxtLinkProps = useForwardProps(reactiveOmit(props, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "raw", "class"));
    const ui = computed(() => tv({
      extend: link,
      variants: {
        active: {
          true: props.activeClass,
          false: props.inactiveClass
        }
      }
    }));
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
        if (q.type === "added") {
          filtered.push(q.key);
        }
        return filtered;
      }, []);
      return isEqual(item1, item2, { excludeKeys: (key) => diffedKeys.includes(key) });
    }
    function isLinkActive({ route: linkRoute, isActive, isExactActive }) {
      if (props.active !== undefined) {
        return props.active;
      }
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(linkRoute.query, route.query)) return false;
      } else if (props.exactQuery === true) {
        if (!isEqual(linkRoute.query, route.query)) return false;
      }
      if (props.exactHash && linkRoute.hash !== route.hash) {
        return false;
      }
      if (props.exact && isExactActive) {
        return true;
      }
      if (!props.exact && isActive) {
        return true;
      }
      return false;
    }
    function resolveLinkClass({ route: route2, isActive, isExactActive }) {
      const active = isLinkActive({ route: route2, isActive, isExactActive });
      if (props.raw) {
        return [props.class, active ? props.activeClass : props.inactiveClass];
      }
      return ui.value({ class: props.class, active, disabled: props.disabled });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps(unref(nuxtLinkProps), { custom: "" }, _attrs), {
        default: withCtx(({ href, navigate, route: linkRoute, rel, target, isExternal, isActive, isExactActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.custom) {
              ssrRenderSlot(_ctx.$slots, "default", {
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal,
                active: isLinkActive({ route: linkRoute, isActive, isExactActive })
              }, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal
              }, {
                class: resolveLinkClass({ route: linkRoute, isActive, isExactActive })
              }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {
                      active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                    }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", {
                        active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
          } else {
            return [
              _ctx.custom ? renderSlot(_ctx.$slots, "default", mergeProps({ key: 0 }, {
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal,
                active: isLinkActive({ route: linkRoute, isActive, isExactActive })
              })) : (openBlock(), createBlock(_sfc_main$b, mergeProps({ key: 1 }, {
                ..._ctx.$attrs,
                as: _ctx.as,
                type: _ctx.type,
                disabled: _ctx.disabled,
                href,
                navigate,
                rel,
                target,
                isExternal
              }, {
                class: resolveLinkClass({ route: linkRoute, isActive, isExactActive })
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {
                    active: isLinkActive({ route: linkRoute, isActive, isExactActive })
                  })
                ]),
                _: 2
              }, 1040, ["class"]))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Link.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined;
};
const theme$2 = {
  "slots": {
    "base": [
      "rounded-[calc(var(--ui-radius)*1.5)] font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75",
      "transition-colors"
    ],
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
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
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": "",
      "ghost": "",
      "link": ""
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "block": {
      "true": {
        "base": "w-full justify-center",
        "leadingAvatarSize": "xs",
        "trailingIcon": "ms-auto"
      }
    },
    "square": {
      "true": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-primary)] hover:bg-[var(--ui-primary)]/75 disabled:bg-[var(--ui-primary)] aria-disabled:bg-[var(--ui-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-secondary)] hover:bg-[var(--ui-secondary)]/75 disabled:bg-[var(--ui-secondary)] aria-disabled:bg-[var(--ui-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-success)] hover:bg-[var(--ui-success)]/75 disabled:bg-[var(--ui-success)] aria-disabled:bg-[var(--ui-success)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-success)]"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-info)] hover:bg-[var(--ui-info)]/75 disabled:bg-[var(--ui-info)] aria-disabled:bg-[var(--ui-info)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-warning)] hover:bg-[var(--ui-warning)]/75 disabled:bg-[var(--ui-warning)] aria-disabled:bg-[var(--ui-warning)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-error)] hover:bg-[var(--ui-error)]/75 disabled:bg-[var(--ui-error)] aria-disabled:bg-[var(--ui-error)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-error)]"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-primary)]/50 text-[var(--ui-primary)] hover:bg-[var(--ui-primary)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-secondary)]/50 text-[var(--ui-secondary)] hover:bg-[var(--ui-secondary)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-success)]/50 text-[var(--ui-success)] hover:bg-[var(--ui-success)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-success)]"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-info)]/50 text-[var(--ui-info)] hover:bg-[var(--ui-info)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-warning)]/50 text-[var(--ui-warning)] hover:bg-[var(--ui-warning)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-error)]/50 text-[var(--ui-error)] hover:bg-[var(--ui-error)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-error)]"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "text-[var(--ui-primary)] bg-[var(--ui-primary)]/10 hover:bg-[var(--ui-primary)]/15 focus-visible:bg-[var(--ui-primary)]/15 disabled:bg-[var(--ui-primary)]/10 aria-disabled:bg-[var(--ui-primary)]/10"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "text-[var(--ui-secondary)] bg-[var(--ui-secondary)]/10 hover:bg-[var(--ui-secondary)]/15 focus-visible:bg-[var(--ui-secondary)]/15 disabled:bg-[var(--ui-secondary)]/10 aria-disabled:bg-[var(--ui-secondary)]/10"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "text-[var(--ui-success)] bg-[var(--ui-success)]/10 hover:bg-[var(--ui-success)]/15 focus-visible:bg-[var(--ui-success)]/15 disabled:bg-[var(--ui-success)]/10 aria-disabled:bg-[var(--ui-success)]/10"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "text-[var(--ui-info)] bg-[var(--ui-info)]/10 hover:bg-[var(--ui-info)]/15 focus-visible:bg-[var(--ui-info)]/15 disabled:bg-[var(--ui-info)]/10 aria-disabled:bg-[var(--ui-info)]/10"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "text-[var(--ui-warning)] bg-[var(--ui-warning)]/10 hover:bg-[var(--ui-warning)]/15 focus-visible:bg-[var(--ui-warning)]/15 disabled:bg-[var(--ui-warning)]/10 aria-disabled:bg-[var(--ui-warning)]/10"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "text-[var(--ui-error)] bg-[var(--ui-error)]/10 hover:bg-[var(--ui-error)]/15 focus-visible:bg-[var(--ui-error)]/15 disabled:bg-[var(--ui-error)]/10 aria-disabled:bg-[var(--ui-error)]/10"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/25 bg-[var(--ui-primary)]/10 hover:bg-[var(--ui-primary)]/15 disabled:bg-[var(--ui-primary)]/10 aria-disabled:bg-[var(--ui-primary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "text-[var(--ui-secondary)] ring ring-inset ring-[var(--ui-secondary)]/25 bg-[var(--ui-secondary)]/10 hover:bg-[var(--ui-secondary)]/15 disabled:bg-[var(--ui-secondary)]/10 aria-disabled:bg-[var(--ui-secondary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "text-[var(--ui-success)] ring ring-inset ring-[var(--ui-success)]/25 bg-[var(--ui-success)]/10 hover:bg-[var(--ui-success)]/15 disabled:bg-[var(--ui-success)]/10 aria-disabled:bg-[var(--ui-success)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-success)]"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "text-[var(--ui-info)] ring ring-inset ring-[var(--ui-info)]/25 bg-[var(--ui-info)]/10 hover:bg-[var(--ui-info)]/15 disabled:bg-[var(--ui-info)]/10 aria-disabled:bg-[var(--ui-info)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "text-[var(--ui-warning)] ring ring-inset ring-[var(--ui-warning)]/25 bg-[var(--ui-warning)]/10 hover:bg-[var(--ui-warning)]/15 disabled:bg-[var(--ui-warning)]/10 aria-disabled:bg-[var(--ui-warning)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "text-[var(--ui-error)] ring ring-inset ring-[var(--ui-error)]/25 bg-[var(--ui-error)]/10 hover:bg-[var(--ui-error)]/15 disabled:bg-[var(--ui-error)]/10 aria-disabled:bg-[var(--ui-error)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-error)]"
    },
    {
      "color": "primary",
      "variant": "ghost",
      "class": "text-[var(--ui-primary)] hover:bg-[var(--ui-primary)]/10 focus-visible:bg-[var(--ui-primary)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "secondary",
      "variant": "ghost",
      "class": "text-[var(--ui-secondary)] hover:bg-[var(--ui-secondary)]/10 focus-visible:bg-[var(--ui-secondary)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "success",
      "variant": "ghost",
      "class": "text-[var(--ui-success)] hover:bg-[var(--ui-success)]/10 focus-visible:bg-[var(--ui-success)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "info",
      "variant": "ghost",
      "class": "text-[var(--ui-info)] hover:bg-[var(--ui-info)]/10 focus-visible:bg-[var(--ui-info)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "warning",
      "variant": "ghost",
      "class": "text-[var(--ui-warning)] hover:bg-[var(--ui-warning)]/10 focus-visible:bg-[var(--ui-warning)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "error",
      "variant": "ghost",
      "class": "text-[var(--ui-error)] hover:bg-[var(--ui-error)]/10 focus-visible:bg-[var(--ui-error)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    },
    {
      "color": "primary",
      "variant": "link",
      "class": "text-[var(--ui-primary)] hover:text-[var(--ui-primary)]/75 disabled:text-[var(--ui-primary)] aria-disabled:text-[var(--ui-primary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": "text-[var(--ui-secondary)] hover:text-[var(--ui-secondary)]/75 disabled:text-[var(--ui-secondary)] aria-disabled:text-[var(--ui-secondary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"
    },
    {
      "color": "success",
      "variant": "link",
      "class": "text-[var(--ui-success)] hover:text-[var(--ui-success)]/75 disabled:text-[var(--ui-success)] aria-disabled:text-[var(--ui-success)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"
    },
    {
      "color": "info",
      "variant": "link",
      "class": "text-[var(--ui-info)] hover:text-[var(--ui-info)]/75 disabled:text-[var(--ui-info)] aria-disabled:text-[var(--ui-info)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"
    },
    {
      "color": "warning",
      "variant": "link",
      "class": "text-[var(--ui-warning)] hover:text-[var(--ui-warning)]/75 disabled:text-[var(--ui-warning)] aria-disabled:text-[var(--ui-warning)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"
    },
    {
      "color": "error",
      "variant": "link",
      "class": "text-[var(--ui-error)] hover:text-[var(--ui-error)]/75 disabled:text-[var(--ui-error)] aria-disabled:text-[var(--ui-error)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-[var(--ui-bg)] bg-[var(--ui-bg-inverted)] hover:bg-[var(--ui-bg-inverted)]/90 disabled:bg-[var(--ui-bg-inverted)] aria-disabled:bg-[var(--ui-bg-inverted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-border-inverted)]"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg)] hover:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg)] aria-disabled:bg-[var(--ui-bg)] focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-[var(--ui-text)] bg-[var(--ui-bg-elevated)] hover:bg-[var(--ui-bg-accented)]/75 focus-visible:bg-[var(--ui-bg-accented)]/75 disabled:bg-[var(--ui-bg-elevated)] aria-disabled:bg-[var(--ui-bg-elevated)]"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg-elevated)] hover:bg-[var(--ui-bg-accented)]/75 disabled:bg-[var(--ui-bg-elevated)] aria-disabled:bg-[var(--ui-bg-elevated)] focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]"
    },
    {
      "color": "neutral",
      "variant": "ghost",
      "class": "text-[var(--ui-text)] hover:bg-[var(--ui-bg-elevated)] focus-visible:bg-[var(--ui-bg-elevated)] hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": "text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] disabled:text-[var(--ui-text-muted)] aria-disabled:text-[var(--ui-text-muted)] focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1.5"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1.5"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-2"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-2"
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
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const appConfig$2 = _appConfig;
const button = tv({ extend: tv(theme$2), ...((_c = appConfig$2.ui) == null ? undefined : _c.button) || {} });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    label: {},
    color: {},
    variant: {},
    size: {},
    square: { type: Boolean },
    block: { type: Boolean },
    loadingAuto: { type: Boolean },
    onClick: { type: [Function, Array] },
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {},
    loading: { type: Boolean },
    loadingIcon: {},
    as: {},
    type: {},
    disabled: { type: Boolean },
    active: { type: Boolean },
    exact: { type: Boolean },
    exactQuery: { type: [Boolean, String] },
    exactHash: { type: Boolean },
    inactiveClass: {},
    to: {},
    href: {},
    external: { type: Boolean },
    target: {},
    rel: {},
    noRel: { type: Boolean },
    prefetchedClass: {},
    prefetch: { type: Boolean },
    prefetchOn: {},
    noPrefetch: { type: Boolean },
    activeClass: {},
    exactActiveClass: {},
    ariaCurrentValue: {},
    viewTransition: { type: Boolean },
    replace: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const linkProps = useForwardProps(pickLinkProps(props));
    const { orientation, size: buttonSize } = useButtonGroup(props);
    const loadingAutoState = ref(false);
    const formLoading = inject(formLoadingInjectionKey, undefined);
    async function onClickWrapper(event) {
      loadingAutoState.value = true;
      const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick];
      try {
        await Promise.all(callbacks.map((fn) => fn == null ? void 0 : fn(event)));
      } finally {
        loadingAutoState.value = false;
      }
    }
    const isLoading = computed(() => {
      return props.loading || props.loadingAuto && (loadingAutoState.value || (formLoading == null ? undefined : formLoading.value) && props.type === "submit");
    });
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(
      computed(() => ({ ...props, loading: isLoading.value }))
    );
    const ui = computed(() => button({
      color: props.color,
      variant: props.variant,
      size: buttonSize.value,
      loading: isLoading.value,
      block: props.block,
      square: props.square || !slots.default && !props.label,
      leading: isLeading.value,
      trailing: isTrailing.value,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(_sfc_main$a, mergeProps({
        type: _ctx.type,
        disabled: _ctx.disabled || isLoading.value,
        class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.base] })
      }, unref(omit)(unref(linkProps), ["type", "disabled"]), {
        raw: "",
        onClick: onClickWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a3, _b2, _c2;
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$d, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? undefined : _a3.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!_ctx.avatar) {
                _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                  size: ((_b2 = props.ui) == null ? undefined : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                }, _ctx.avatar, {
                  class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? undefined : _c2.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a3;
              if (_ctx.label) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? undefined : _a3.label }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a3;
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(_sfc_main$d, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? undefined : _a3.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a3, _b2, _c2;
                return [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? undefined : _a3.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                    key: 1,
                    size: ((_b2 = props.ui) == null ? undefined : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? undefined : _c2.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a3;
                return [
                  _ctx.label ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.label({ class: (_a3 = props.ui) == null ? undefined : _a3.label })
                  }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a3;
                return [
                  unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? undefined : _a3.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Button.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : undefined;
};
const theme$1 = {
  "slots": {
    "root": "relative group overflow-hidden bg-[var(--ui-bg)] shadow-lg rounded-[calc(var(--ui-radius)*2)] ring ring-[var(--ui-border)] p-4 flex gap-2.5 focus:outline-none",
    "wrapper": "w-0 flex-1 flex flex-col gap-1",
    "title": "text-sm font-medium text-[var(--ui-text-highlighted)]",
    "description": "text-sm text-[var(--ui-text-muted)]",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex gap-1.5 shrink-0",
    "progress": "absolute inset-x-0 bottom-0 h-1 z-[-1]",
    "close": "p-0.5"
  },
  "variants": {
    "color": {
      "primary": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]",
        "icon": "text-[var(--ui-primary)]",
        "progress": "bg-[var(--ui-primary)]"
      },
      "secondary": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]",
        "icon": "text-[var(--ui-secondary)]",
        "progress": "bg-[var(--ui-secondary)]"
      },
      "success": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]",
        "icon": "text-[var(--ui-success)]",
        "progress": "bg-[var(--ui-success)]"
      },
      "info": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]",
        "icon": "text-[var(--ui-info)]",
        "progress": "bg-[var(--ui-info)]"
      },
      "warning": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]",
        "icon": "text-[var(--ui-warning)]",
        "progress": "bg-[var(--ui-warning)]"
      },
      "error": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]",
        "icon": "text-[var(--ui-error)]",
        "progress": "bg-[var(--ui-error)]"
      },
      "neutral": {
        "root": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]",
        "icon": "text-[var(--ui-text-highlighted)]",
        "progress": "bg-[var(--ui-bg-inverted)]"
      }
    },
    "multiline": {
      "true": {
        "root": "items-start",
        "actions": "items-start mt-1"
      },
      "false": {
        "root": "items-center",
        "actions": "items-center"
      }
    }
  },
  "defaultVariants": {
    "color": "primary"
  }
};
const appConfig$1 = _appConfig;
const toast = tv({ extend: tv(theme$1), ...((_d = appConfig$1.ui) == null ? undefined : _d.toast) || {} });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    icon: {},
    avatar: {},
    color: {},
    actions: {},
    close: { type: Boolean, default: true },
    closeIcon: {},
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    type: {},
    duration: {}
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig2 = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
    const multiline = computed(() => !!props.title && !!props.description);
    const ui = computed(() => toast({
      color: props.color
    }));
    const el = ref();
    const height = ref(0);
    __expose({
      height
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(ToastRoot), mergeProps({
        ref_key: "el",
        ref: el
      }, unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.root], multiline: multiline.value }),
        style: { "--height": height.value }
      }, _attrs), {
        default: withCtx(({ remaining, duration }, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a4, _b3, _c3;
              if (_ctx.avatar) {
                _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                  size: ((_a4 = props.ui) == null ? undefined : _a4.avatarSize) || ui.value.avatarSize()
                }, _ctx.avatar, {
                  class: ui.value.avatar({ class: (_b3 = props.ui) == null ? undefined : _b3.avatar })
                }), null, _parent2, _scopeId));
              } else if (_ctx.icon) {
                _push2(ssrRenderComponent(_sfc_main$d, {
                  name: _ctx.icon,
                  class: ui.value.icon({ class: (_c3 = props.ui) == null ? undefined : _c3.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? undefined : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.title || !!slots.title) {
              _push2(ssrRenderComponent(unref(ToastTitle), {
                class: ui.value.title({ class: (_b2 = props.ui) == null ? undefined : _b2.title })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                      _push3(`${ssrInterpolate(_ctx.title)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(ssrRenderComponent(unref(ToastDescription), {
                class: ui.value.description({ class: (_c2 = props.ui) == null ? undefined : _c2.description })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                      _push3(`${ssrInterpolate(_ctx.description)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "description", {}, () => [
                        createTextVNode(toDisplayString(_ctx.description), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (multiline.value && ((_d2 = _ctx.actions) == null ? undefined : _d2.length)) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_e2 = props.ui) == null ? undefined : _e2.actions, multiline: true }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.actions, (action, index2) => {
                  _push2(ssrRenderComponent(unref(ToastAction), {
                    key: index2,
                    "alt-text": action.label || "Action",
                    "as-child": "",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_sfc_main$9, mergeProps({
                          size: "xs",
                          color: _ctx.color,
                          ref_for: true
                        }, action), null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$9, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, 16, ["color"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!multiline.value && ((_f = _ctx.actions) == null ? undefined : _f.length) || _ctx.close !== null) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_g = props.ui) == null ? undefined : _g.actions, multiline: false }))}"${_scopeId}>`);
              if (!multiline.value) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(_ctx.actions, (action, index2) => {
                    _push2(ssrRenderComponent(unref(ToastAction), {
                      key: index2,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: () => {
                      }
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_sfc_main$9, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_sfc_main$9, mergeProps({
                              size: "xs",
                              color: _ctx.color,
                              ref_for: true
                            }, action), null, 16, ["color"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(ToastClose), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                      var _a4;
                      if (_ctx.close) {
                        _push3(ssrRenderComponent(_sfc_main$9, mergeProps({
                          icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                          size: "md",
                          color: "neutral",
                          variant: "link",
                          "aria-label": unref(t)("toast.close")
                        }, typeof _ctx.close === "object" ? _ctx.close : undefined, {
                          class: ui.value.close({ class: (_a4 = props.ui) == null ? undefined : _a4.close }),
                          onClick: () => {
                          }
                        }), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                        var _a4;
                        return [
                          _ctx.close ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                            key: 0,
                            icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                            size: "md",
                            color: "neutral",
                            variant: "link",
                            "aria-label": unref(t)("toast.close")
                          }, typeof _ctx.close === "object" ? _ctx.close : undefined, {
                            class: ui.value.close({ class: (_a4 = props.ui) == null ? undefined : _a4.close }),
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                        ];
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (remaining > 0 && duration) {
              _push2(`<div class="${ssrRenderClass(ui.value.progress({ class: (_h = props.ui) == null ? undefined : _h.progress }))}" style="${ssrRenderStyle({ width: `${remaining / duration * 100}%` })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b3, _c3;
                return [
                  _ctx.avatar ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                    key: 0,
                    size: ((_a4 = props.ui) == null ? undefined : _a4.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_b3 = props.ui) == null ? undefined : _b3.avatar })
                  }), null, 16, ["size", "class"])) : _ctx.icon ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 1,
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_c3 = props.ui) == null ? undefined : _c3.icon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? undefined : _i.wrapper })
              }, [
                _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(ToastTitle), {
                  key: 0,
                  class: ui.value.title({ class: (_j = props.ui) == null ? undefined : _j.title })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(ToastDescription), {
                  key: 1,
                  class: ui.value.description({ class: (_k = props.ui) == null ? undefined : _k.description })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(_ctx.description), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["class"])) : createCommentVNode("", true),
                multiline.value && ((_l = _ctx.actions) == null ? undefined : _l.length) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.actions({ class: (_m = props.ui) == null ? undefined : _m.actions, multiline: true })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index2) => {
                      return openBlock(), createBlock(unref(ToastAction), {
                        key: index2,
                        "alt-text": action.label || "Action",
                        "as-child": "",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9, mergeProps({
                            size: "xs",
                            color: _ctx.color,
                            ref_for: true
                          }, action), null, 16, ["color"])
                        ]),
                        _: 2
                      }, 1032, ["alt-text", "onClick"]);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              !multiline.value && ((_n = _ctx.actions) == null ? undefined : _n.length) || _ctx.close !== null ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.actions({ class: (_o = props.ui) == null ? undefined : _o.actions, multiline: false })
              }, [
                !multiline.value ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index2) => {
                    return openBlock(), createBlock(unref(ToastAction), {
                      key: index2,
                      "alt-text": action.label || "Action",
                      "as-child": "",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$9, mergeProps({
                          size: "xs",
                          color: _ctx.color,
                          ref_for: true
                        }, action), null, 16, ["color"])
                      ]),
                      _: 2
                    }, 1032, ["alt-text", "onClick"]);
                  }), 128))
                ]) : createCommentVNode("", true),
                createVNode(unref(ToastClose), { "as-child": "" }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                      var _a4;
                      return [
                        _ctx.close ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                          key: 0,
                          icon: _ctx.closeIcon || unref(appConfig2).ui.icons.close,
                          size: "md",
                          color: "neutral",
                          variant: "link",
                          "aria-label": unref(t)("toast.close")
                        }, typeof _ctx.close === "object" ? _ctx.close : undefined, {
                          class: ui.value.close({ class: (_a4 = props.ui) == null ? undefined : _a4.close }),
                          onClick: withModifiers(() => {
                          }, ["stop"])
                        }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                      ];
                    })
                  ]),
                  _: 3
                })
              ], 2)) : createCommentVNode("", true),
              remaining > 0 && duration ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.progress({ class: (_p = props.ui) == null ? undefined : _p.progress }),
                style: { width: `${remaining / duration * 100}%` }
              }, null, 6)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Toast.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const theme = {
  "slots": {
    "viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-[var(--height)] focus:outline-none",
    "base": "pointer-events-auto absolute inset-x-0 z-[var(--index)] transform-[var(--transform)] data-[expanded=false]:data-[front=false]:h-[var(--front-height)] data-[expanded=false]:data-[front=false]:*:invisible data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out"
  },
  "variants": {
    "position": {
      "top-left": {
        "viewport": "left-4"
      },
      "top-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "top-right": {
        "viewport": "right-4"
      },
      "bottom-left": {
        "viewport": "left-4"
      },
      "bottom-center": {
        "viewport": "left-1/2 transform -translate-x-1/2"
      },
      "bottom-right": {
        "viewport": "right-4"
      }
    },
    "swipeDirection": {
      "up": "data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]",
      "right": "data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]",
      "down": "data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]",
      "left": "data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]"
    }
  },
  "compoundVariants": [
    {
      "position": [
        "top-left",
        "top-center",
        "top-right"
      ],
      "class": {
        "viewport": "top-4",
        "base": "top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]"
      }
    },
    {
      "position": [
        "bottom-left",
        "bottom-center",
        "bottom-right"
      ],
      "class": {
        "viewport": "bottom-4",
        "base": "bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]"
      }
    },
    {
      "swipeDirection": [
        "left",
        "right"
      ],
      "class": "data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)] data-[swipe=end]:translate-x-[var(--reka-toast-swipe-end-x)] data-[swipe=cancel]:translate-x-0"
    },
    {
      "swipeDirection": [
        "up",
        "down"
      ],
      "class": "data-[swipe=move]:translate-y-[var(--reka-toast-swipe-move-y)] data-[swipe=end]:translate-y-[var(--reka-toast-swipe-end-y)] data-[swipe=cancel]:translate-y-0"
    }
  ],
  "defaultVariants": {
    "position": "bottom-right"
  }
};
const appConfig = _appConfig;
const toaster = tv({ extend: tv(theme), ...((_e = appConfig.ui) == null ? undefined : _e.toaster) || {} });
const __default__$1 = {
  name: "Toaster"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __ssrInlineRender: true,
  props: {
    position: {},
    expand: { type: Boolean, default: true },
    portal: { type: Boolean, default: true },
    class: {},
    ui: {},
    label: {},
    duration: { default: 5e3 },
    swipeThreshold: {}
  },
  setup(__props) {
    const props = __props;
    const providerProps = useForwardProps(reactivePick(props, "duration", "label", "swipeThreshold"));
    const { toasts, remove } = useToast();
    const swipeDirection = computed(() => {
      switch (props.position) {
        case "top-center":
          return "up";
        case "top-right":
        case "bottom-right":
          return "right";
        case "bottom-center":
          return "down";
        case "top-left":
        case "bottom-left":
          return "left";
      }
      return "right";
    });
    const ui = computed(() => toaster({
      position: props.position,
      swipeDirection: swipeDirection.value
    }));
    function onUpdateOpen(value, id) {
      if (value) {
        return;
      }
      remove(id);
    }
    const hovered = ref(false);
    const expanded = computed(() => props.expand || hovered.value);
    const refs = ref([]);
    const height = computed(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
    const frontHeight = computed(() => {
      var _a2;
      return ((_a2 = refs.value[refs.value.length - 1]) == null ? undefined : _a2.height) || 0;
    });
    function getOffset(index2) {
      return refs.value.slice(index2 + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastProvider), mergeProps({ "swipe-direction": swipeDirection.value }, unref(providerProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(unref(toasts), (toast2, index2) => {
              _push2(ssrRenderComponent(_sfc_main$8, mergeProps({
                key: toast2.id,
                ref_for: true,
                ref_key: "refs",
                ref: refs
              }, unref(omit)(toast2, ["id"]), {
                "data-expanded": expanded.value,
                "data-front": !expanded.value && index2 === unref(toasts).length - 1,
                style: {
                  "--index": index2 - unref(toasts).length + unref(toasts).length,
                  "--before": unref(toasts).length - 1 - index2,
                  "--offset": getOffset(index2),
                  "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                  "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                  "--transform": "translateY(var(--translate)) scale(var(--scale))"
                },
                class: [ui.value.base(), {
                  "cursor-pointer": !!toast2.click
                }],
                "onUpdate:open": ($event) => onUpdateOpen($event, toast2.id),
                onClick: ($event) => toast2.click && toast2.click(toast2)
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(ToastPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2, _e2, _f;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ToastViewport), {
                    "data-expanded": expanded.value,
                    class: ui.value.viewport({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.viewport] }),
                    style: {
                      "--scale-factor": "0.05",
                      "--translate-factor": ((_b2 = _ctx.position) == null ? undefined : _b2.startsWith("top")) ? "1px" : "-1px",
                      "--gap": ((_c2 = _ctx.position) == null ? undefined : _c2.startsWith("top")) ? "16px" : "-16px",
                      "--front-height": `${frontHeight.value}px`,
                      "--height": `${height.value}px`
                    },
                    onMouseenter: ($event) => hovered.value = true,
                    onMouseleave: ($event) => hovered.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ToastViewport), {
                      "data-expanded": expanded.value,
                      class: ui.value.viewport({ class: [props.class, (_d2 = props.ui) == null ? undefined : _d2.viewport] }),
                      style: {
                        "--scale-factor": "0.05",
                        "--translate-factor": ((_e2 = _ctx.position) == null ? undefined : _e2.startsWith("top")) ? "1px" : "-1px",
                        "--gap": ((_f = _ctx.position) == null ? undefined : _f.startsWith("top")) ? "16px" : "-16px",
                        "--front-height": `${frontHeight.value}px`,
                        "--height": `${height.value}px`
                      },
                      onMouseenter: ($event) => hovered.value = true,
                      onMouseleave: ($event) => hovered.value = false
                    }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast2, index2) => {
                return openBlock(), createBlock(_sfc_main$8, mergeProps({
                  key: toast2.id,
                  ref_for: true,
                  ref_key: "refs",
                  ref: refs
                }, unref(omit)(toast2, ["id"]), {
                  "data-expanded": expanded.value,
                  "data-front": !expanded.value && index2 === unref(toasts).length - 1,
                  style: {
                    "--index": index2 - unref(toasts).length + unref(toasts).length,
                    "--before": unref(toasts).length - 1 - index2,
                    "--offset": getOffset(index2),
                    "--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
                    "--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
                    "--transform": "translateY(var(--translate)) scale(var(--scale))"
                  },
                  class: [ui.value.base(), {
                    "cursor-pointer": !!toast2.click
                  }],
                  "onUpdate:open": ($event) => onUpdateOpen($event, toast2.id),
                  onClick: ($event) => toast2.click && toast2.click(toast2)
                }), null, 16, ["data-expanded", "data-front", "style", "class", "onUpdate:open", "onClick"]);
              }), 128)),
              createVNode(unref(ToastPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2, _b2, _c2;
                  return [
                    createVNode(unref(ToastViewport), {
                      "data-expanded": expanded.value,
                      class: ui.value.viewport({ class: [props.class, (_a2 = props.ui) == null ? undefined : _a2.viewport] }),
                      style: {
                        "--scale-factor": "0.05",
                        "--translate-factor": ((_b2 = _ctx.position) == null ? undefined : _b2.startsWith("top")) ? "1px" : "-1px",
                        "--gap": ((_c2 = _ctx.position) == null ? undefined : _c2.startsWith("top")) ? "16px" : "-16px",
                        "--front-height": `${frontHeight.value}px`,
                        "--height": `${height.value}px`
                      },
                      onMouseenter: ($event) => hovered.value = true,
                      onMouseleave: ($event) => hovered.value = false
                    }, null, 8, ["data-expanded", "class", "style", "onMouseenter", "onMouseleave"])
                  ];
                }),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ModalProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const modalState = inject(modalInjectionKey);
    const { isOpen } = useModal();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(modalState)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(modalState).component), mergeProps(unref(modalState).props, {
          open: unref(isOpen),
          "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
        }, _attrs), null), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/ModalProvider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SlideoverProvider",
  __ssrInlineRender: true,
  setup(__props) {
    const slideoverState = inject(slideoverInjectionKey);
    const { isOpen } = useSlideover();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(slideoverState)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(slideoverState).component), mergeProps(unref(slideoverState).props, {
          open: unref(isOpen),
          "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
        }, _attrs), null), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/SlideoverProvider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const __default__ = {
  name: "App"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    tooltip: {},
    toaster: {},
    locale: {},
    scrollBody: { type: [Boolean, Object] },
    nonce: {}
  },
  setup(__props) {
    const props = __props;
    const configProviderProps = useForwardProps(reactivePick(props, "scrollBody"));
    const tooltipProps = toRef$1(() => props.tooltip);
    const toasterProps = toRef$1(() => props.toaster);
    const locale = toRef$1(() => props.locale);
    provide(localeContextInjectionKey, locale);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      _push(ssrRenderComponent(unref(ConfigProvider), mergeProps({
        "use-id": () => useId(),
        dir: (_a2 = locale.value) == null ? undefined : _a2.dir,
        locale: (_b2 = locale.value) == null ? undefined : _b2.code
      }, unref(configProviderProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipProvider), tooltipProps.value, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.toaster !== null) {
                    _push3(ssrRenderComponent(_sfc_main$7, toasterProps.value, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  }
                } else {
                  return [
                    _ctx.toaster !== null ? (openBlock(), createBlock(_sfc_main$7, mergeProps({ key: 0 }, toasterProps.value), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipProvider), tooltipProps.value, {
                default: withCtx(() => [
                  _ctx.toaster !== null ? (openBlock(), createBlock(_sfc_main$7, mergeProps({ key: 0 }, toasterProps.value), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 })
                ]),
                _: 3
              }, 16),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@3.0.0-alpha.10_@babel+parser@7.26.7_change-case@5.4.4_db0@0.2.3_embla-carousel@8.5.2_kwzy4hszwc4kp4vyvaueo2v3me/node_modules/@nuxt/ui/dist/runtime/components/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const layouts = {
  default: defineAsyncComponent(() => import('./default-D0QgPsBL.mjs').then((m) => m.default || m)),
  shop: defineAsyncComponent(() => import('./shop-DGIMW6Nw.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || undefined,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a2, _b2;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b2 = (_a2 = context.slots).default) == null ? undefined : _b2.call(_a2);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: undefined
    },
    keepalive: {
      type: [Boolean, Object],
      default: undefined
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          {
            vnode = h(Suspense, {
              suspensible: true
            }, {
              default: () => {
                const providerVNode = h(RouteProvider, {
                  key: key || undefined,
                  vnode: slots.default ? h(Fragment, undefined, slots.default(routeProps)) : routeProps.Component,
                  route: routeProps.route,
                  renderKey: key || undefined,
                  vnodeRef: pageRef
                });
                return providerVNode;
              }
            });
            return vnode;
          }
        }
      });
    };
  }
});
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index2 = newRoute.matched.findIndex((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? undefined : _a2.default) === (Component == null ? undefined : Component.type);
  });
  return index2 < newRoute.matched.length - 1;
}
ref(false);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CookieBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const isConsentGiven = ref(false);
    const showBanner = ref(false);
    const shouldShowBanner = ref(false);
    const nuxtApp = useNuxtApp();
    const cookies = nuxtApp.$cookies;
    useRoute();
    function acceptCookies() {
      cookies.set("cookieConsent", "true", { expires: "30d" });
      isConsentGiven.value = true;
      showBanner.value = false;
    }
    function rejectCookies() {
      cookies.set("cookieConsent", "false", { expires: "30d" });
      isConsentGiven.value = true;
      showBanner.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UButton = _sfc_main$9;
      if (shouldShowBanner.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookie-banner" }, _attrs))} data-v-be38e652><div class="cookie-content" data-v-be38e652><p data-v-be38e652> Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und personalisierte Inhalte bereitzustellen. <br data-v-be38e652> Weitere Informationen finden Sie in unserer `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: "/datenschutz",
          title: "d",
          class: "text-white font-semibold underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Datenschutzerklärung. `);
            } else {
              return [
                createTextVNode(" Datenschutzerklärung. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div class="cookie-buttons" data-v-be38e652>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          variant: "outline",
          onClick: acceptCookies
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Akzeptieren `);
            } else {
              return [
                createTextVNode(" Akzeptieren ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "error",
          variant: "outline",
          onClick: rejectCookies
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ablehnen `);
            } else {
              return [
                createTextVNode(" Ablehnen ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieBanner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const CookieBanner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-be38e652"]]);
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UApp = _sfc_main$4;
      const _component_NuxtLayout = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLayout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtPage, { content: "width=device-width" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CookieBanner, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtPage, { content: "width=device-width" }),
                    createVNode(CookieBanner)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLayout, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage, { content: "width=device-width" }),
                  createVNode(CookieBanner)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = undefined;
    const _Error404 = defineAsyncComponent(() => import('./error-404-kuWHLoO_.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-BOVLOYW8.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.12.0_db0@0.2.3_eslint@9.19.0_jiti@2.4.2__ior_qlbzz4e2avovktk7wzj47awr2m/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.12.0_db0@0.2.3_eslint@9.19.0_jiti@2.4.2__ior_qlbzz4e2avovktk7wzj47awr2m/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? undefined : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { useAsyncData as A, useNuxtApp as B, useState as C, _export_sfc as _, __nuxt_component_0$1 as a, _sfc_main$d as b, _appConfig as c, formInputsInjectionKey as d, entry$1 as default, formLoadingInjectionKey as e, formBusInjectionKey as f, formOptionsInjectionKey as g, formFieldInjectionKey as h, inputIdInjectionKey as i, useAppConfig as j, useFormField as k, useButtonGroup as l, useComponentIcons as m, noop as n, _sfc_main$c as o, looseToNumber as p, _sfc_main$9 as q, reactivePick as r, useLocale as s, useRuntimeConfig as t, useHead as u, _sfc_main$a as v, pickLinkProps as w, _sfc_main$b as x, get as y, useRoute as z };
//# sourceMappingURL=server.mjs.map
