// plugins/vue3-cookies.js
import { defineNuxtPlugin } from '#app'
import { useCookies } from 'vue3-cookies'

export default defineNuxtPlugin((nuxtApp) => {
  const { cookies } = useCookies()
  nuxtApp.provide('cookies', cookies)
})
