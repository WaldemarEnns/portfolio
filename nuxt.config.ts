// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  pages: true,
  modules: ['@nuxtjs/i18n'],
  i18n: {
    baseUrl: 'https://waldemarenns.de',
    locales: [{
      code: 'en',
      file: 'en-US.json',
      iso: 'en-US',
    }, {
      code: 'de',
      file: 'de-DE.json',
      iso: 'de-DE',
    }, {
      code: 'es',
      file: 'es-ES.json',
      iso: 'es-ES',
    }],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'de',
  }
})