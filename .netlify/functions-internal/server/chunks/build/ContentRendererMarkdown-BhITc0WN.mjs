import { defineComponent, getCurrentInstance, toRaw, computed, reactive, watch, h, resolveComponent, defineAsyncComponent, Text, useSSRContext, mergeProps, unref, Comment } from 'vue';
import { B as pascalCase, R as kebabCase, l as destr } from '../nitro/nitro.mjs';
import { find, html } from 'property-information';
import { f as flatUnwrap } from './node-hwMnPqaI.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useContentPreview } from './preview-40rg1CPR.mjs';
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
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'fetch-event-stream';
import 'qs';
import '@iconify/vue';
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const proseComponentMap = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
const _sfc_main$1 = defineComponent({
  name: "MDCRenderer",
  props: {
    /**
     * Content to render
     */
    body: {
      type: Object,
      required: true
    },
    /**
     * Document meta data
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class(es) to bind to the component
     */
    class: {
      type: [String, Object],
      default: undefined
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: [String, Boolean],
      default: undefined
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: undefined
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  async setup(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const $nuxt = (_c = (_b = (_a = getCurrentInstance()) == null ? undefined : _a.appContext) == null ? undefined : _b.app) == null ? undefined : _c.$nuxt;
    const route = ($nuxt == null ? undefined : $nuxt.$route) || ($nuxt == null ? undefined : $nuxt._route);
    const { mdc } = ((_d = $nuxt == null ? undefined : $nuxt.$config) == null ? undefined : _d.public) || {};
    const tags = {
      ...((_e = mdc == null ? undefined : mdc.components) == null ? undefined : _e.prose) && props.prose !== false ? proseComponentMap : {},
      ...((_f = mdc == null ? undefined : mdc.components) == null ? undefined : _f.map) || {},
      ...toRaw(((_h = (_g = props.data) == null ? undefined : _g.mdc) == null ? undefined : _h.components) || {}),
      ...props.components
    };
    const contentKey = computed(() => {
      var _a2;
      const components = (((_a2 = props.body) == null ? undefined : _a2.children) || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components)).sort().join(".");
    });
    const runtimeData = reactive({
      ...props.data
    });
    watch(() => props.data, (newData) => {
      Object.assign(runtimeData, newData);
    });
    await resolveContentComponents(props.body, { tags });
    function updateRuntimeData(code, value) {
      const lastIndex = code.split(".").length - 1;
      return code.split(".").reduce((o, k, i) => {
        if (i == lastIndex && o) {
          o[k] = value;
          return o[k];
        }
        return typeof o === "object" ? o[k] : undefined;
      }, runtimeData);
    }
    return { tags, contentKey, route, runtimeData, updateRuntimeData };
  },
  render(ctx) {
    var _a, _b;
    const { tags, tag, body, data, contentKey, route, unwrap, runtimeData, updateRuntimeData } = ctx;
    if (!body) {
      return null;
    }
    const meta = { ...data, tags, $route: route, runtimeData, updateRuntimeData };
    const component = tag !== false ? resolveVueComponent(tag || ((_a = meta.component) == null ? undefined : _a.name) || meta.component || "div") : undefined;
    return component ? h(component, { ...(_b = meta.component) == null ? undefined : _b.props, class: ctx.class, ...this.$attrs, key: contentKey }, { default: defaultSlotRenderer }) : defaultSlotRenderer == null ? undefined : defaultSlotRenderer();
    function defaultSlotRenderer() {
      if (unwrap) {
        return flatUnwrap(
          renderSlots(body, h, meta, meta).default(),
          typeof unwrap === "string" ? unwrap.split(" ") : ["*"]
        );
      }
      return renderSlots(body, h, meta, meta).default();
    }
  }
});
function renderNode(node, h2, documentMeta, parentScope = {}) {
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.type === "comment") {
    return h2(Comment, null, node.value);
  }
  const originalTag = node.tag;
  const renderTag = findMappedTag(node, documentMeta.tags);
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(
    component,
    props,
    renderSlots(node, h2, documentMeta, { ...parentScope, ...props })
  );
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a, _b;
  const data = {
    ...documentMeta.runtimeData,
    ...parentScope,
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? undefined : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (data2 && key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return undefined;
  }, data);
  const defaultValue = (_b = node.props) == null ? undefined : _b.defaultValue;
  return h2(Text, value ?? defaultValue ?? "");
}
function renderSlots(node, h2, documentMeta, parentProps) {
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || [];
    if (node2.type === "element") {
      data[slotName].push(...node2.children || []);
    }
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, children2]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = () => {
      const vNodes = children2.map((child) => renderNode(child, h2, documentMeta, parentProps));
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key)) {
      return propsToDataRxModel(key, value, data, documentMeta, { native: nativeInputs.includes(tag) });
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta, { native }) {
  var _a;
  const propName = ((_a = key.match(/^v-model:([^=]+)/)) == null ? undefined : _a[1]) || "modelValue";
  const field = native ? "value" : propName;
  const event = native ? "onInput" : `onUpdate:${propName}`;
  data[field] = evalInContext(value, documentMeta.runtimeData);
  data[event] = (e) => {
    var _a2;
    documentMeta.updateRuntimeData(value, native ? (_a2 = e.target) == null ? undefined : _a2.value : e);
  };
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (typeof component === "string") {
    if (htmlTags.includes(component)) {
      return component;
    }
    const _component = resolveComponent(pascalCase(component), false);
    if (!component || (_component == null ? undefined : _component.name) === "AsyncComponentWrapper") {
      return _component;
    }
    if (typeof _component === "string") {
      return _component;
    }
    if ("setup" in _component) {
      return defineAsyncComponent(() => new Promise((resolve) => resolve(_component)));
    }
    return _component;
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : undefined, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? undefined : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  if (!body) {
    return;
  }
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    if ((c == null ? undefined : c.render) || (c == null ? undefined : c.ssrRender) || (c == null ? undefined : c.__ssrInlineRender)) {
      return;
    }
    const resolvedComponent = resolveVueComponent(c);
    if ((resolvedComponent == null ? undefined : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    const tag = node.tag;
    if (node.type === "text" || tag === "binding" || node.type === "comment") {
      return [];
    }
    const renderTag = findMappedTag(node, documentMeta.tags);
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
function findMappedTag(node, tags) {
  var _a;
  const tag = node.tag;
  if (!tag || typeof ((_a = node.props) == null ? undefined : _a.__ignoreMap) !== "undefined") {
    return tag;
  }
  return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.3.5_rollup@4.32.1/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentRendererMarkdown",
  __ssrInlineRender: true,
  props: {
    /**
     * Content to render
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const debug = useContentPreview().isEnabled();
    const body = computed(() => {
      let body2 = props.value.body || props.value;
      if (props.excerpt && props.value.excerpt) {
        body2 = props.value.excerpt;
      }
      return body2;
    });
    const data = computed(() => {
      const { body: body2, excerpt, ...data2 } = props.value;
      return {
        ...data2,
        ...props.data
      };
    });
    const mdcComponents = computed(() => {
      return {
        ...props.components,
        ...data.value._components || {}
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDCRenderer = _sfc_main$1;
      _push(ssrRenderComponent(_component_MDCRenderer, mergeProps({
        body: body.value,
        data: data.value,
        tag: __props.tag,
        components: mdcComponents.value,
        "data-content-id": unref(debug) ? __props.value._id : undefined
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.2.3_ioredis@5.4.2_magicast@0.3.5_nuxt@3.15.4_@parcel+watcher@2.5.1_rbptlerdqqjyqw7dm5paeonxa4/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentRendererMarkdown-BhITc0WN.mjs.map
