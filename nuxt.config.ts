// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
      '@tailwindcss/postcss': {},
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

  modules: [
    'nuxt-security',
    '@nuxtjs/sitemap', // Must be before @nuxt/content for proper integration
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxtjs/plausible',
    '@nuxtjs/turnstile',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-og-image'
  ],

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
    experimental: {
      processCSSVariables: true,
    },
  },

  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  turnstile: {
    siteKey: process.env.NUXT_TURNSTILE_SITE_KEY
  },

  i18n: {
    baseUrl: 'https://waldemarenns.de',
    locales: [{
      code: 'en',
      file: 'en-US.json',
      language: 'en-US',
      name: 'English',
      flag: '🇺🇸'
    }, {
      code: 'de',
      file: 'de-DE.json',
      language: 'de-DE',
      name: 'Deutsch',
      flag: '🇩🇪'
    }, {
      code: 'es',
      file: 'es-ES.json',
      language: 'es-ES',
      name: 'Español',
      flag: '🇪🇸'
    }],
    lazy: true,
    defaultLocale: 'de',
    langDir: 'locales',
  },

  site: {
    url: 'https://waldemarenns.de',
    name: 'Waldemar Enns',
  },

  robots: {
    sitemap: '/sitemap_index.xml',
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "'nonce-{{nonce}}'",
          'https://plausible.io',
          'https://challenges.cloudflare.com',
        ],
        'script-src-attr': [
          "'unsafe-hashes'",
          // @nuxt/image onerror handler: this.setAttribute('data-error', 1)
          "'sha256-bwK6T5wZVTANitXbrTsel7kl/PyCjCd/Dq5Qoz3imjM='",
        ],
        'style-src': [
          "'self'",
          "'nonce-{{nonce}}'",
          "'unsafe-hashes'",
          // Vue v-show: style="" (empty) and style="display:none;"
          "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
          "'sha256-0EZqoz+oBhx7gF4nvY2bSqoGyy4zLjNF+SDQXGp/ZrY='",
          // Vue runtime-dom inline <style> injection
          "'sha256-WkCqVJ6FRErYJESB6IfF3p/817TwoS1efId687pMqsk='",
          'https://fonts.googleapis.com',
        ],
        'font-src': [
          "'self'",
          'https://fonts.gstatic.com',
          'data:',
        ],
        'img-src': [
          "'self'",
          'data:',
          'blob:',
        ],
        'connect-src': [
          "'self'",
          'https://plausible.io',
          'https://challenges.cloudflare.com',
        ],
        'frame-src': [
          'https://challenges.cloudflare.com',
        ],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'upgrade-insecure-requests': true,
      },
      crossOriginEmbedderPolicy: false,
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'strict-origin-when-cross-origin',
      xXSSProtection: '0',
      permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: [],
      },
    },
    rateLimiter: {
      tokensPerInterval: 10,
      interval: 'hour',
      headers: true,
      driver: { name: 'lruCache' },
      throwError: true,
    },
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true,
    },
    sri: false,
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