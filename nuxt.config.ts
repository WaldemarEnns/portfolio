import type { Strapi4ResponseMany, Strapi4ResponseData } from "@nuxtjs/strapi"
import type { Post } from "./types/strapi"

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
    strapi: {
      url: process.env.STRAPI_URL
    },
    postmarkServerToken: process.env.POSTMARK_SERVER_TOKEN,
    public: {
      strapi: {
        url: process.env.STRAPI_URL
      }
    }
  },

  pages: true,

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/strapi', '@nuxt/test-utils/module', '@nuxtjs/plausible'],

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

  sitemap: {
    urls: async () => {
      const strapiUrl = process.env.STRAPI_URL
      let postsResponse
      if (process.env.NODE_ENV === 'production') {
        postsResponse = await fetch(`${strapiUrl}/api/posts?publicationState=live&locale=all&pagination[page]=1&pagination[pageSize=1000]`)
      } else {
        postsResponse = await fetch(`${strapiUrl}/api/posts?publicationState=preview&locale=all&pagination[page]=1&pagination[pageSize=1000]`)
      }
      const posts: Strapi4ResponseMany<Post> = await postsResponse.json()

      const routes = posts.data?.map((post: Strapi4ResponseData<Post>) => {
        const locale = post.attributes.locale
        const slug = post.attributes.slug

        if (locale === 'de') {
          return `/posts/${slug}`
        } else {
          return `/${locale}/posts/${slug}`
        }
      }) || []

      return routes
    }
  },

  robots: {
    sitemap: '/sitemap_index.xml',
  }
})