// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio', '@nuxtjs/tailwindcss'],

  routeRules: {
    '/': { prerender: true }
  },

  content: {
    build: {
      markdown: {
        toc: {
          depth: 2, // include h3 headings
        }
      }
    }
  },

  compatibilityDate: '2024-12-22'
})