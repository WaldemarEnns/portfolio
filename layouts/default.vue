<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const title = computed(() => {
  return route.meta.title
    ? `${t(route.meta.title as string)} | waldemar enns`
    : 'waldemar enns'
})

const description = computed(() => {
  return route.meta.description
    ? t(route.meta.description as string)
    : null
})
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
        <Meta v-if="description" name="description" :content="description" />
      </Head>
      <Body>
        <Navbar />
        <slot />
        <Contact />
        <Footer />
      </Body>
    </Html>
  </div>
</template>