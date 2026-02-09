// Catch-all for undefined API routes (handles browser extension requests like /api/scan-meta)
export default defineEventHandler((event) => {
  throw createError({
    statusCode: 404,
    statusMessage: 'API endpoint not found'
  })
})
