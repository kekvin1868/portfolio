export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})