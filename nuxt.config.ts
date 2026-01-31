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
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
  },

  pages: true,

  modules: [
    '@nuxtjs/sitemap', // Must be before @nuxt/content for proper integration
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxtjs/plausible',
    '@nuxtjs/turnstile',
    '@nuxt/scripts'
  ],

  turnstile: {
    siteKey: process.env.NUXT_TURNSTILE_SITE_KEY
  },

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
    defaultLocale: 'de',
  },

  site: {
    url: 'https://waldemarenns.de',
    name: 'Waldemar Enns',
  },

  robots: {
    sitemap: '/sitemap_index.xml',
  },

  content: {
    locales: ['en', 'de', 'es'],
    defaultLocale: 'de',
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  }
})