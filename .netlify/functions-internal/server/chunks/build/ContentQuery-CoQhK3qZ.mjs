import { z as hash } from '../nitro/nitro.mjs';
import { defineComponent, toRefs, computed, watch, useSlots, useSSRContext, h } from 'vue';
import { t as useRuntimeConfig, A as useAsyncData } from './server.mjs';
import { q as queryContent } from './query-CyElgvY2.mjs';
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
import 'vue/server-renderer';
import 'reka-ui';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import './preview-40rg1CPR.mjs';

const ContentQuery = defineComponent({
  name: "ContentQuery",
  props: {
    /**
     * The path of the content to load from content source.
     */
    path: {
      type: String,
      required: false,
      default: undefined
    },
    /**
     * Select a subset of fields
     */
    only: {
      type: Array,
      required: false,
      default: undefined
    },
    /**
     * Remove a subset of fields
     */
    without: {
      type: Array,
      required: false,
      default: undefined
    },
    /**
     * Filter results
     */
    where: {
      type: Object,
      required: false,
      default: undefined
    },
    /**
     * Sort results
     */
    sort: {
      type: Object,
      required: false,
      default: undefined
    },
    /**
     * Limit number of results
     */
    limit: {
      type: Number,
      required: false,
      default: undefined
    },
    /**
     * Skip number of results
     */
    skip: {
      type: Number,
      required: false,
      default: undefined
    },
    /**
     * Filter contents based on locale
     */
    locale: {
      type: String,
      required: false,
      default: undefined
    },
    /**
     * A type of query to be made.
     */
    find: {
      type: String,
      required: false,
      default: undefined
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = toRefs(props);
    const isPartial = computed(() => {
      var _a;
      return (_a = path.value) == null ? undefined : _a.includes("/_");
    });
    const legacy = !useRuntimeConfig().public.content.experimental.advanceQuery;
    watch(() => props, () => refresh(), { deep: true });
    const resolveResult = (result) => {
      if (legacy) {
        if (result == null ? undefined : result.surround) {
          return result.surround;
        }
        return (result == null ? undefined : result._id) || Array.isArray(result) ? result : result == null ? undefined : result.result;
      }
      return result.result;
    };
    const { data, refresh } = await useAsyncData(
      `content-query-${hash(props)}`,
      () => {
        let queryBuilder;
        if (path.value) {
          queryBuilder = queryContent(path.value);
        } else {
          queryBuilder = queryContent();
        }
        if (only.value) {
          queryBuilder = queryBuilder.only(only.value);
        }
        if (without.value) {
          queryBuilder = queryBuilder.without(without.value);
        }
        if (where.value) {
          queryBuilder = queryBuilder.where(where.value);
        }
        if (sort.value) {
          queryBuilder = queryBuilder.sort(sort.value);
        }
        if (limit.value) {
          queryBuilder = queryBuilder.limit(limit.value);
        }
        if (skip.value) {
          queryBuilder = queryBuilder.skip(skip.value);
        }
        if (locale.value) {
          queryBuilder = queryBuilder.where({ _locale: locale.value });
        }
        if (find.value === "one") {
          return queryBuilder.findOne().then(resolveResult);
        }
        if (find.value === "surround") {
          if (!path.value) {
            console.warn("[Content] Surround queries requires `path` prop to be set.");
            console.warn("[Content] Query without `path` will return regular `find()` results.");
            return queryBuilder.find().then(resolveResult);
          }
          if (legacy) {
            return queryBuilder.findSurround(path.value);
          } else {
            return queryBuilder.withSurround(path.value).findOne().then(resolveResult);
          }
        }
        return queryBuilder.find().then(resolveResult);
      }
    );
    return {
      isPartial,
      data,
      refresh
    };
  },
  /**
   * Content not found fallback
   * @slot not-found
   */
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      // Setup
      data,
      refresh,
      isPartial,
      // Props
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && (slots == null ? undefined : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if ((slots == null ? undefined : slots.empty) && (data == null ? undefined : data._type) === "markdown" && !((_a = data == null ? undefined : data.body) == null ? undefined : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? undefined : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? undefined : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const _sfc_main = ContentQuery;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.2.3_ioredis@5.4.2_magicast@0.3.5_nuxt@3.15.4_@parcel+watcher@2.5.1_rbptlerdqqjyqw7dm5paeonxa4/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentQuery-CoQhK3qZ.mjs.map
