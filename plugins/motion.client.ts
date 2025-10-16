import { MotionPlugin } from 'motion-v'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(MotionPlugin)
  }
})
