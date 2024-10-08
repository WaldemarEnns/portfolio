<script setup lang="ts">
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <footer class="footer bg-neutral text-neutral-content p-10">
    <nav class="w-full flex flex-row justify-start items-start">
      <div class="flex flex-col justify-start items-start mr-12">
        <span class="footer-title text-white mb-4">{{ $t('footer.legal') }}</span>
        <NuxtLink :to="localePath('imprint')" class="link link-hover mb-2">{{ $t('footer.imprint') }}</NuxtLink>
        <NuxtLink :to="localePath('privacy-policy')" class="link link-hover mb-2">{{ $t('footer.privacy') }}</NuxtLink>
      </div>

      <div class="flex flex-col justify-start items-start mr-12">
        <span class="footer-title text-white mb-4">{{ $t('footer.more') }}</span>
        <NuxtLink :to="localePath('/posts')" class="link link-hover mb-2">{{ $t('footer.blog') }}</NuxtLink>
      </div>

      <div class="flex flex-col justify-start items-start">
        <span class="footer-title text-white mb-4">{{ $t('footer.languages') }}</span>
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </NuxtLink>
      </div>
    </nav>
  </footer>
</template>