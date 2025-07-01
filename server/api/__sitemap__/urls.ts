import { defineEventHandler } from 'h3'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  try {
    // Query all blog posts from content
    const posts = await serverQueryContent(event, 'posts').find()
    
    // Transform posts to sitemap URLs
    const urls = posts.map((post) => ({
      loc: post._path,
      lastmod: post.date || post.updatedAt || new Date().toISOString(),
      changefreq: post.sitemap?.changefreq || 'monthly',
      priority: post.sitemap?.priority || 0.8
    }))
    
    return urls
  } catch (error) {
    console.error('Error generating sitemap URLs for posts:', error)
    return []
  }
})