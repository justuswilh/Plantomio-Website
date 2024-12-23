// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio', '@nuxtjs/tailwindcss'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
  },

  compatibilityDate: '2024-12-22'
})