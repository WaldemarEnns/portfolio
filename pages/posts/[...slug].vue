<script setup lang="ts">
const { path } = useRoute()
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
  
  // Fallback to static content with locale-aware paths
  const basePosts: Record<string, Omit<Post, '_path'> & { slug: string }> = {
    'getting-started-with-nuxt': {
      slug: 'getting-started-with-nuxt',
      title: 'Getting Started with Nuxt.js',
      description: 'A comprehensive guide to getting started with Nuxt.js development',
      date: '2024-01-15',
      tags: ['nuxt', 'javascript', 'vue', 'web-development'],
      author: 'Waldemar Enns',
      content: 'This is the full content of the Getting Started with Nuxt.js article. It would contain detailed explanations, code examples, and best practices for working with Nuxt.js framework.'
    },
    'understanding-vue-composition-api': {
      slug: 'understanding-vue-composition-api',
      title: 'Understanding Vue Composition API',
      description: 'Learn how to use Vue 3\'s Composition API to build more maintainable applications',
      date: '2024-01-20',
      tags: ['vue', 'composition-api', 'javascript', 'frontend'],
      author: 'Waldemar Enns',
      content: 'This is the full content of the Vue Composition API article. It would explain the concepts, provide examples, and show how to use the Composition API effectively in Vue 3 applications.'
    }
  }

  // Extract slug from path (remove locale prefix and /posts/)
  let slug = path
  if (locale.value !== 'de' && slug.startsWith(`/${locale.value}`)) {
    slug = slug.substring(`/${locale.value}`.length)
  }
  slug = slug.replace('/posts/', '')

  const basePost = basePosts[slug]
  if (!basePost) {
    return null
  }

  // Construct the proper path with locale prefix
  const properPath = locale.value === 'de' 
    ? `/posts/${basePost.slug}` 
    : `/${locale.value}/posts/${basePost.slug}`

  return {
    ...basePost,
    _path: properPath
  }
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
  <section v-if="post" class="relative overflow-hidden py-20">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    
    <div class="container relative z-10 mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Post Header -->
        <header class="card bg-base-100 shadow-2xl border border-base-300/50 backdrop-blur-sm mb-12">
          <div class="card-body p-8 md:p-12 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {{ post.title }}
            </h1>
            
            <div class="flex flex-wrap items-center justify-center gap-6 text-base-content/60 mb-6">
              <time 
                class="flex items-center gap-2 font-medium"
                :datetime="post.date"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ formatDate(post.date) }}
              </time>
              
              <div class="flex items-center gap-2" v-if="post.author">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="font-medium">{{ post.author }}</span>
              </div>
            </div>

            <div class="flex flex-wrap justify-center gap-3" v-if="post.tags">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="badge badge-primary badge-lg"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </header>

        <!-- Post Content -->
        <article class="card bg-base-100 shadow-xl border border-base-300/50">
          <div class="card-body p-8 md:p-12">
            <div class="prose prose-lg max-w-none">
              <div class="text-lg leading-relaxed text-base-content">
                <p class="text-xl mb-8 text-base-content/80 font-medium">{{ post.description }}</p>
                <div v-if="post.content" class="space-y-6">
                  <div class="text-base-content/90 leading-relaxed">
                    {{ post.content }}
                  </div>
                </div>
                <div v-else class="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span><em>Content is being loaded from the markdown files...</em></span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Navigation -->
        <footer class="mt-12 card bg-base-100 shadow-xl border border-base-300/50">
          <div class="card-body p-6">
            <div class="flex justify-between items-center">
              <NuxtLink 
                :to="localePath('/posts')" 
                class="btn btn-primary btn-outline group"
              >
                <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to all posts
              </NuxtLink>
              
              <div class="text-base-content/60 text-sm">
                Published {{ formatDate(post.date) }}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Remove custom styles since we're using daisyUI components */
.prose {
  max-width: none;
}
</style>