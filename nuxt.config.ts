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

  plausible: {
    ignoredHostnames: ['localhost'],
  },

  routeRules: {
    '/': { prerender: false },
    '/imprint': { prerender: true },
    '/privacy-policy': { prerender: true },
    '/posts': { prerender: false },
  },

  runtimeConfig: {
    postmarkServerToken: process.env.POSTMARK_SERVER_TOKEN,
  },

  pages: true,

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/test-utils/module', '@nuxtjs/plausible'],

  i18n: {
    baseUrl: 'https://waldemarenns.de',
    locales: [{
      code: 'en',
      file: 'en-US.json',
      iso: 'en-US',
      name: 'English',
      flag: '🇺🇸'
    }, {
      code: 'de',
      file: 'de-DE.json',
      iso: 'de-DE',
      name: 'Deutsch',
      flag: '🇩🇪'
    }, {
      code: 'es',
      file: 'es-ES.json',
      iso: 'es-ES',
      name: 'Español',
      flag: '🇪🇸'
    }],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'de',
  },

  site: {
    url: 'https://waldemarenns.de',
    name: 'Waldemar Enns',
  },

  robots: {
    sitemap: '/sitemap_index.xml',
  }
})