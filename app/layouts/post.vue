<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const description = computed(() => {
  return route.meta.description as string
})
</script>

<template>
  <div class="min-h-screen bg-base-100 relative">
    <!-- Subtle background gradient decoration -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
    </div>
    
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
        <Meta v-if="description" name="description" :content="description" />
      </Head>
      <Body class="relative z-10">
        <Navbar />
        <main class="relative z-10">
          <slot />
        </main>
        <Footer />
        <BackToTop />
      </Body>
    </Html>
  </div>
</template>