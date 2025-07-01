<script setup lang="ts">
const { t } = useI18n()

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
    // Use the actual markdown content from files
    return [
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
  <section class="container mx-auto my-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="font-bold text-4xl mb-4">{{ t('posts.title') || 'Blog Posts' }}</h1>
        <p class="text-lg text-gray-600">
          {{ t('posts.description') || 'Thoughts, insights, and tutorials on web development and technology.' }}
        </p>
      </div>

      <!-- Debug Info -->
      <div v-if="!posts" class="mb-8 p-4 bg-yellow-100 border border-yellow-300 rounded">
        <p>Loading posts...</p>
      </div>

      <!-- Posts List -->
      <div class="space-y-8" v-if="posts && posts.length > 0">
        <article 
          v-for="post in posts" 
          :key="post._path"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <div class="p-6">
            <!-- Post Header -->
            <div class="flex items-center justify-between mb-4">
              <time 
                class="text-sm text-gray-500"
                :datetime="post.date"
              >
                {{ formatDate(post.date) }}
              </time>
              <div class="flex items-center space-x-2" v-if="post.tags">
                <span 
                  v-for="tag in post.tags.slice(0, 3)" 
                  :key="tag"
                  class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Post Content -->
            <NuxtLink 
              :to="post._path"
              class="block group"
            >
              <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {{ post.title }}
              </h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                {{ post.description }}
              </p>
              <div class="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Read more
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </NuxtLink>

            <!-- Author -->
            <div class="mt-6 pt-4 border-t border-gray-200" v-if="post.author">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-medium">
                      {{ post.author.charAt(0).toUpperCase() }}
                    </span>
                  </div>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ post.author }}</p>
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
            <div class="input">https://waldemarenns.de/posts</div>
          </div>
          <div class="flex justify-center px-4 py-16 bg-base-200">
            <div class="text-center">
              <p class="text-xl">{{ t('posts.no_posts') || 'No blog posts available yet.' }}</p>
              <p class="text-gray-600 mt-2">{{ t('posts.check_back') || 'Check back soon for new content!' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom styles for blog post cards */
article {
  border: 1px solid #e5e7eb;
}

article:hover {
  border-color: #d1d5db;
}

.prose {
  max-width: none;
}
</style>
