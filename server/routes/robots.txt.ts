export default defineEventHandler(async (event) => {
  const hostname = 'https://waldemarenns.de'
  
  // Dynamic robots.txt configuration
  const robotsConfig = {
    userAgent: '*',
    disallow: [
      '/error',
      '/404',
      '/500',
      '/api/',
      '/_nuxt/',
      '/.nuxt/'
    ],
    allow: [
      '/',
      '/posts/',
      '/en/',
      '/es/',
      '/imprint',
      '/privacy-policy'
    ],
    sitemap: `${hostname}/sitemap.xml`
  }

  // Generate robots.txt content
  const robotsTxt = `User-agent: ${robotsConfig.userAgent}
${robotsConfig.disallow.map(path => `Disallow: ${path}`).join('\n')}

Sitemap: ${robotsConfig.sitemap}`

  setHeader(event, 'Content-Type', 'text/plain')
  return robotsTxt
})