<template>
  <div ref="turnstileContainer"></div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const siteKey = config.public.turnstile.siteKey as string

const token = defineModel<string | null>()
const turnstileContainer = ref<HTMLElement | null>(null)
const widgetId = ref<string | null>(null)

// Load Cloudflare Turnstile script
const loadTurnstileScript = () => {
  return new Promise<void>((resolve, reject) => {
    if (window.turnstile) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Turnstile script'))
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  try {
    await loadTurnstileScript()
    
    if (turnstileContainer.value && window.turnstile) {
      widgetId.value = window.turnstile.render(turnstileContainer.value, {
        sitekey: siteKey,
        callback: (tkn: string) => {
          token.value = tkn
        },
        'error-callback': () => {
          token.value = null
        },
        'expired-callback': () => {
          token.value = null
        },
      })
    }
  } catch (error) {
    console.error('Failed to initialize Turnstile:', error)
  }
})

onUnmounted(() => {
  if (widgetId.value && window.turnstile) {
    window.turnstile.remove(widgetId.value)
  }
})

// Global type declaration
declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: any) => string
      remove: (widgetId: string) => void
      reset: (widgetId: string) => void
    }
  }
}
</script>

<style scoped>
/* Ensure the container has minimum height to prevent layout shift */
div {
  min-height: 65px;
}
</style>
