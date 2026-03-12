import { defineCollection, defineContentConfig } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { asOgImageCollection } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSitemapCollection(
        asOgImageCollection({
          type: 'page',
          source: {
            include: 'blog/*.md',
            prefix: '/posts'
          },
        })
      )
    )
  }
})
