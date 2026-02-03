<script setup lang="ts">
const { t, locale } = useI18n()

const localePath = useLocalePath()

definePageMeta({
  layout: 'post'
})

useSeoMeta({
  title: () => t('posts.title'),
  description: () => t('posts.description'),
})

// Calculate reading time (approx 200 words per minute)
function calculateReadingTime(content: any): number {
  const wordsPerMinute = 200
  // Estimate based on content length or default to 5 min
  // Content is MarkdownRoot, estimate ~5 chars per word
  let estimatedWords = 300 // default 5 min read
  if (content) {
    const contentStr = typeof content === 'string' ? content : JSON.stringify(content)
    estimatedWords = contentStr.length / 5
  }
  return Math.ceil(Math.max(estimatedWords, 300) / wordsPerMinute)
}

// Format date with locale
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Query all blog posts from the blog collection
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Header with gradient accent -->
      <header class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {{ t('posts.title') }}
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        <p class="text-lg text-base-content/70 mt-4 max-w-2xl mx-auto">
          {{ t('posts.description') }}
        </p>
      </header>

      <!-- Blog Posts Grid -->
      <div v-if="posts && posts.length > 0" class="space-y-6">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="post.path"
          class="block group"
        >
          <article class="card bg-base-200 shadow-lg hover-card border border-primary/20 overflow-hidden">
            <div class="flex flex-col md:flex-row">
              <!-- Featured Image -->
              <div v-if="post.image" class="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              <!-- Content -->
              <div class="card-body flex-1 p-6">
                <div class="flex items-center gap-3 text-sm text-base-content/60 mb-3">
                  <time :datetime="post.date" class="flex items-center gap-1">
                    <font-awesome-icon icon="fa-regular fa-calendar" class="text-primary"></font-awesome-icon>
                    {{ formatDate(post.date) }}
                  </time>
                  <span v-if="post.body" class="flex items-center gap-1">
                    <font-awesome-icon icon="fa-regular fa-clock" class="text-secondary"></font-awesome-icon>
                    {{ calculateReadingTime(post.body) }} min read
                  </span>
                </div>

                <h2 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {{ post.title }}
                </h2>
                
                <p class="text-base-content/70 mb-4 line-clamp-2">
                  {{ post.description }}
                </p>

                <!-- Tags -->
                <div v-if="post.tags" class="flex flex-wrap gap-2">
                  <span
                    v-for="(tag, index) in post.tags"
                    :key="tag"
                    class="badge badge-sm"
                    :class="[
                      index % 3 === 0 ? 'badge-primary' :
                      index % 3 === 1 ? 'badge-secondary' :
                      'badge-accent'
                    ]"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Read more indicator -->
                <div class="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read article</span>
                  <font-awesome-icon icon="fa-solid fa-arrow-right" class="transition-transform group-hover:translate-x-1"></font-awesome-icon>
                </div>
              </div>
            </div>
          </article>
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-base-200 flex items-center justify-center">
          <font-awesome-icon icon="fa-regular fa-newspaper" class="text-3xl text-base-content/40"></font-awesome-icon>
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ t('posts.no_posts_title') || 'No posts yet' }}</h3>
        <p class="text-lg text-base-content/60">
          {{ t('posts.no_posts') }}
        </p>
      </div>

      <!-- Contact CTA -->
      <div class="mt-16 pt-8 border-t border-primary/30">
        <ContactSection />
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
