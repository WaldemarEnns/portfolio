<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  layout: 'post'
})
</script>

<template>
  <section class="container mx-auto my-12">
    <div class="text-center py-16">
      <h1 class="font-bold text-4xl mb-8">{{ t('posts.coming_soon') }}</h1>
      <p class="text-lg text-gray-600 mb-8">
        {{ t('posts.coming_soon_description') }}
      </p>
      <div class="mockup-browser border bg-base-300">
        <div class="mockup-browser-toolbar">
          <div class="input">https://waldemarenns.de/posts</div>
        </div>
        <div class="flex justify-center px-4 py-16 bg-base-200">
          <div class="text-center">
            <p class="text-xl">{{ t('posts.blog_placeholder') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
