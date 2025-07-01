<script setup lang="ts">
const { path } = useRoute()

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
  content?: string
}

// Get the post content
const { data: post } = await useAsyncData(`post-${path}`, async (): Promise<Post | null> => {
  try {
    // First try to get content from the API
    const contentData = await $fetch(`/api/_content/query`, {
      method: 'GET',
      query: {
        where: [{ _path: path }]
      }
    }) as any[]
    
    if (contentData && contentData.length > 0) {
      return contentData[0] as Post
    }
  } catch (error) {
    console.log('Content API not available, using static data')
  }
  
  // Fallback to static content
  const posts: Record<string, Post> = {
    '/posts/getting-started-with-nuxt': {
      _path: '/posts/getting-started-with-nuxt',
      title: 'Getting Started with Nuxt.js',
      description: 'A comprehensive guide to getting started with Nuxt.js development',
      date: '2024-01-15',
      tags: ['nuxt', 'javascript', 'vue', 'web-development'],
      author: 'Waldemar Enns',
      content: 'This is the full content of the Getting Started with Nuxt.js article. It would contain detailed explanations, code examples, and best practices for working with Nuxt.js framework.'
    },
    '/posts/understanding-vue-composition-api': {
      _path: '/posts/understanding-vue-composition-api',
      title: 'Understanding Vue Composition API',
      description: 'Learn how to use Vue 3\'s Composition API to build more maintainable applications',
      date: '2024-01-20',
      tags: ['vue', 'composition-api', 'javascript', 'frontend'],
      author: 'Waldemar Enns',
      content: 'This is the full content of the Vue Composition API article. It would explain the concepts, provide examples, and show how to use the Composition API effectively in Vue 3 applications.'
    }
  }

  const foundPost = posts[path]
  return foundPost || null
})

// Handle 404 if post doesn't exist
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

// Format date helper
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Set up SEO meta tags
useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description },
    { name: 'keywords', content: post.value.tags?.join(', ') },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:type', content: 'article' },
  ]
})
</script>

<template>
  <article v-if="post" class="container mx-auto my-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Post Header -->
      <header class="mb-12 text-center border-b border-gray-200 pb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ post.title }}
        </h1>
        
        <div class="flex flex-wrap items-center justify-center gap-4 text-gray-600 mb-6">
          <time 
            class="flex items-center gap-2"
            :datetime="post.date"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {{ formatDate(post.date) }}
          </time>
          
          <div class="flex items-center gap-2" v-if="post.author">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            {{ post.author }}
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-2" v-if="post.tags">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            #{{ tag }}
          </span>
        </div>
      </header>

      <!-- Post Content -->
      <div class="prose prose-lg prose-gray max-w-none">
        <div class="text-lg leading-relaxed text-gray-700">
          <p class="text-xl mb-6">{{ post.description }}</p>
          <div v-if="post.content" class="space-y-4">
            <p>{{ post.content }}</p>
          </div>
          <div v-else>
            <p><em>Content is being loaded from the markdown files...</em></p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <footer class="mt-16 pt-8 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <NuxtLink 
            to="/posts" 
            class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to all posts
          </NuxtLink>
          
          <div class="text-gray-500 text-sm">
            Published {{ formatDate(post.date) }}
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>

<style scoped>
/* Custom styles for blog post layout */
.prose {
  max-width: none;
}
</style>