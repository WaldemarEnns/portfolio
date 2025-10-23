<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({
  layout: 'post'
})

useSeoMeta({
  title: () => t('posts.title'),
  description: () => t('posts.description'),
})

// Query all blog posts from the blog collection
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog')
    .all()
})
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="font-bold text-4xl mb-8">{{ t('posts.title') }}</h1>

      <div v-if="posts && posts.length > 0" class="space-y-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="post.path"
          class="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <div class="flex flex-col gap-2">
            <h2 class="text-2xl font-bold hover:text-primary transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-sm text-gray-500">
              {{ new Date(post.date).toLocaleDateString(locale) }}
            </p>
            <p class="text-gray-700">
              {{ post.description }}
            </p>
            <div v-if="post.tags" class="flex flex-wrap gap-2 mt-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="text-center py-16">
        <p class="text-lg text-gray-600">
          {{ t('posts.no_posts') }}
        </p>
      </div>
    </div>
  </section>
</template>
