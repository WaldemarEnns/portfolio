<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { locale } = useI18n()

definePageMeta({
  layout: 'post'
})

// Define post type for better TypeScript support
interface Post {
  _path: string
  title: string
  description: string
  date: string
  tags: string[]
  author: string
}

// Use the content composable directly
const { data: posts } = await useAsyncData('posts', async (): Promise<Post[]> => {
  try {
    // Try the $content global that should be available
    const contentFiles = await $fetch('/api/_content/query', {
      method: 'GET',
      query: { 
        where: [{ _path: { $regex: '/posts' } }],
        sort: [{ date: -1 }]
      }
    }) as Post[]
    return contentFiles
  } catch (error) {
    console.error('Content query failed:', error)
    // Use the actual markdown content from files with proper locale-aware paths
    const basePosts = [
      {
        _path: '/posts/getting-started-with-nuxt',
        title: 'Getting Started with Nuxt.js',
        description: 'A comprehensive guide to getting started with Nuxt.js development',
        date: '2024-01-15',
        tags: ['nuxt', 'javascript', 'vue', 'web-development'],
        author: 'Waldemar Enns'
      },
      {
        _path: '/posts/understanding-vue-composition-api',
        title: 'Understanding Vue Composition API',
        description: 'Learn how to use Vue 3\'s Composition API to build more maintainable applications',
        date: '2024-01-20',
        tags: ['vue', 'composition-api', 'javascript', 'frontend'],
        author: 'Waldemar Enns'
      }
    ]
    
    // Add locale prefix if not default locale (German)
    return basePosts.map(post => ({
      ...post,
      _path: locale.value === 'de' ? post._path : `/${locale.value}${post._path}`
    }))
  }
})

// Helper function to format dates
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <section class="relative overflow-hidden py-20">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    
    <div class="container relative z-10 mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {{ t('posts.title') || 'Blog Posts' }}
          </h1>
          <p class="text-xl text-base-content/70">
            {{ t('posts.description') || 'Thoughts, insights, and tutorials on web development and technology.' }}
          </p>
        </div>

        <!-- Debug Info -->
        <div v-if="!posts" class="mb-8 alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span>Loading posts...</span>
        </div>

        <!-- Posts List -->
        <div class="space-y-8" v-if="posts && posts.length > 0">
          <article 
            v-for="post in posts" 
            :key="post._path"
            class="card bg-base-100 shadow-xl border border-base-300/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
          >
            <div class="card-body p-8">
              <!-- Post Header -->
              <div class="flex items-center justify-between mb-6">
                <time 
                  class="text-sm text-base-content/60 flex items-center gap-2"
                  :datetime="post.date"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ formatDate(post.date) }}
                </time>
                <div class="flex items-center space-x-2" v-if="post.tags">
                  <span 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    class="badge badge-primary badge-outline text-xs"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Post Content -->
              <NuxtLink 
                :to="post._path"
                class="block group-hover:scale-[1.02] transition-transform duration-300"
              >
                <h2 class="text-2xl md:text-3xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-200">
                  {{ post.title }}
                </h2>
                <p class="text-base-content/70 leading-relaxed mb-6 text-lg">
                  {{ post.description }}
                </p>
                <div class="flex items-center text-primary font-medium group-hover:text-secondary transition-colors duration-200">
                  Read more
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </NuxtLink>

              <!-- Author -->
              <div class="mt-6 pt-4 border-t border-base-300" v-if="post.author">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="avatar placeholder">
                      <div class="w-10 h-10 bg-primary text-primary-content rounded-full">
                        <span class="text-sm font-medium">
                          {{ post.author.charAt(0).toUpperCase() }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-base-content">{{ post.author }}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- No Posts Message -->
        <div v-else-if="posts && posts.length === 0" class="text-center py-16">
          <div class="mockup-browser border bg-base-300">
            <div class="mockup-browser-toolbar">
              <div class="input">https://waldemarenns.de{{ localePath('/posts') }}</div>
            </div>
            <div class="flex justify-center px-4 py-16 bg-base-200">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto text-base-content/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <p class="text-xl text-base-content">{{ t('posts.no_posts') || 'No blog posts available yet.' }}</p>
                <p class="text-base-content/60 mt-2">{{ t('posts.check_back') || 'Check back soon for new content!' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Remove custom styles since we're using daisyUI components */
</style>
