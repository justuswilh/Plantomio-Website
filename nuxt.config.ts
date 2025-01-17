// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxthq/studio'
  ],

  plugins: ['~/plugins/vue3-cookies.js'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
  },

  colorMode: {
    preference: 'light',
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  compatibilityDate: '2024-12-22'
})