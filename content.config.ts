import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { asOgImageCollection } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        url: z.string().optional(),
        image: z.string().optional(),
        featured: z.boolean().optional(),
      })
    }),
    blog: defineCollection(
      asSitemapCollection(
        asOgImageCollection({
          type: 'page',
          source: {
            include: 'blog/*.md',
            prefix: '/posts'
          },
          schema: z.object({
            title: z.string(),
            description: z.string(),
            date: z.string(),
            image: z.string().optional(),
            heroImage: z.string().optional(),
            tags: z.array(z.string()).optional(),
          })
        })
      )
    )
  }
})
