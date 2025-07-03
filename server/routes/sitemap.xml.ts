interface SitemapPage {
  url: string
  priority: string
  changefreq: string
  lastmod?: string
}

export default defineEventHandler(async (event) => {
  const hostname = 'https://waldemarenns.de'
  const locales = ['de', 'en', 'es']
  
  // Static pages configuration
  const staticPageConfigs = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/imprint', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { path: '/posts', priority: '0.8', changefreq: 'weekly' }
  ]

  const allPages: SitemapPage[] = []

  // Generate static pages for all locales
  for (const pageConfig of staticPageConfigs) {
    for (const locale of locales) {
      if (locale === 'de') {
        // Default locale doesn't need prefix
        allPages.push({
          url: pageConfig.path || '/',
          priority: pageConfig.priority,
          changefreq: pageConfig.changefreq
        })
      } else {
        allPages.push({
          url: `/${locale}${pageConfig.path}`,
          priority: pageConfig.priority,
          changefreq: pageConfig.changefreq
        })
      }
    }
  }

  // Dynamically fetch blog posts from Content API
  try {
    // Try to fetch posts using the content API endpoint
    const postsResponse = await $fetch('/api/_content/query', {
      method: 'GET',
      query: { 
        where: [{ _path: { $regex: '^/posts/' } }],
        sort: [{ date: -1 }]
      }
    }) as any[]

    // Generate blog post URLs for all locales
    for (const post of postsResponse) {
      const slug = post._path?.replace('/posts/', '') || ''
      const lastmod = post.date ? new Date(post.date).toISOString().split('T')[0] : undefined

      for (const locale of locales) {
        if (locale === 'de') {
          // Default locale doesn't need prefix
          allPages.push({
            url: `/posts/${slug}`,
            priority: '0.7',
            changefreq: 'monthly',
            lastmod
          })
        } else {
          allPages.push({
            url: `/${locale}/posts/${slug}`,
            priority: '0.7',
            changefreq: 'monthly',
            lastmod
          })
        }
      }
    }
  } catch (error) {
    console.warn('Could not fetch blog posts for sitemap, using fallback posts:', error)
    
    // Fallback to static list if Content API is not available
    const fallbackPosts = [
      { slug: 'getting-started-with-nuxt', date: '2024-01-15' },
      { slug: 'understanding-vue-composition-api', date: '2024-01-20' }
    ]

    for (const post of fallbackPosts) {
      for (const locale of locales) {
        if (locale === 'de') {
          allPages.push({
            url: `/posts/${post.slug}`,
            priority: '0.7',
            changefreq: 'monthly',
            lastmod: post.date
          })
        } else {
          allPages.push({
            url: `/${locale}/posts/${post.slug}`,
            priority: '0.7',
            changefreq: 'monthly',
            lastmod: post.date
          })
        }
      }
    }
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${hostname}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.lastmod ? `
    <lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})