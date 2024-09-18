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

  routeRules: {
    '/': { prerender: true },
    '/imprint': { prerender: true },
    '/privacy-policy': { prerender: true },
  },

  pages: true,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/strapi',
    '@nuxt/test-utils/module'
  ],
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
  },

  site: {
    url: 'https://waldemarenns.de',
    name: 'Waldemar Enns',
  },

  robots: {
    sitemap: '/sitemap_index.xml',
  },

  hooks: {
    async 'prerender:routes'(ctx) {
      const strapiUrl = process.env.STRAPI_URL || 'http://localhost:1337'
      const postsResponse = await fetch(`${strapiUrl}/api/posts?publicationState=preview&locale=de&locale=en&locale=es&pagination[page]=1&pagination[pageSize=1000]`)
      const posts: Strapi4ResponseMany<Post> = await postsResponse.json()

      const routes = posts.data.map((post: Strapi4ResponseData<Post>) => {
        const locale = post.attributes.locale
        const slug = post.attributes.slug
        const id = post.id

        if (locale === 'de') {
          return `/posts/${id}`
        } else {
          return `/${locale}/posts/${id}`
        }
      })

      for (const route of routes) {
        ctx.routes.add(route)
      }
    }
  }
})