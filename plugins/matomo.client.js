import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMatomo, {
    host: 'https://waldemarenns.matomo.cloud',
    siteId: 1,
    disableCookies: true,
    router: nuxtApp.$router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    requireCookieConsent: false,
  })
})