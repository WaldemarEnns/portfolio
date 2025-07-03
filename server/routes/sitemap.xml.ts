interface SitemapPage {
  url: string
  priority: string
  changefreq: string
  lastmod?: string
}

export default defineEventHandler(async (event) => {
  const hostname = 'https://waldemarenns.de'
  
  // Static pages
  const staticPages: SitemapPage[] = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/imprint', priority: '0.5', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { url: '/posts', priority: '0.8', changefreq: 'weekly' },
    { url: '/en', priority: '1.0', changefreq: 'weekly' },
    { url: '/en/imprint', priority: '0.5', changefreq: 'monthly' },
    { url: '/en/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { url: '/en/posts', priority: '0.8', changefreq: 'weekly' },
    { url: '/es', priority: '1.0', changefreq: 'weekly' },
    { url: '/es/imprint', priority: '0.5', changefreq: 'monthly' },
    { url: '/es/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { url: '/es/posts', priority: '0.8', changefreq: 'weekly' }
  ]

  // Blog posts
  const blogPosts = [
    'getting-started-with-nuxt',
    'understanding-vue-composition-api'
  ]

  const blogPages: SitemapPage[] = []
  const locales = ['de', 'en', 'es']

  for (const locale of locales) {
    for (const post of blogPosts) {
      if (locale === 'de') {
        // Default locale doesn't need prefix
        blogPages.push({
          url: `/posts/${post}`,
          priority: '0.7',
          changefreq: 'monthly',
          lastmod: '2024-01-20'
        })
      } else {
        blogPages.push({
          url: `/${locale}/posts/${post}`,
          priority: '0.7',
          changefreq: 'monthly',
          lastmod: '2024-01-20'
        })
      }
    }
  }

  const allPages = [...staticPages, ...blogPages]

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