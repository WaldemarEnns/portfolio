<script setup lang="ts">
const { path } = useRoute()

definePageMeta({
  layout: 'post'
})

// Query the specific blog post
const { data: post } = await useAsyncData(`post-${path}`, () => 
  queryContent('posts').where({ _path: path }).findOne()
)

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
    { property: 'article:author', content: post.value.author },
    { property: 'article:published_time', content: post.value.date },
    { property: 'article:tag', content: post.value.tags?.join(', ') },
  ]
})

// Structured data for SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.value.title,
  description: post.value.description,
  author: {
    '@type': 'Person',
    name: post.value.author
  },
  datePublished: post.value.date,
  keywords: post.value.tags?.join(', ')
})
</script>

<template>
  <article class="container mx-auto my-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Article Header -->
      <header class="mb-12">
        <!-- Back to Posts Link -->
        <nav class="mb-8">
          <NuxtLink 
            to="/posts"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            Back to Posts
          </NuxtLink>
        </nav>

        <!-- Article Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {{ post.title }}
        </h1>

        <!-- Article Meta -->
        <div class="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div class="flex items-center space-x-6 mb-4 sm:mb-0">
            <!-- Author -->
            <div class="flex items-center" v-if="post.author">
              <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span class="text-white font-medium">
                  {{ post.author.charAt(0).toUpperCase() }}
                </span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ post.author }}</p>
              </div>
            </div>

            <!-- Date -->
            <time 
              class="text-sm text-gray-500"
              :datetime="post.date"
            >
              {{ formatDate(post.date) }}
            </time>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2" v-if="post.tags">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Article Description -->
        <p class="text-xl text-gray-600 leading-relaxed" v-if="post.description">
          {{ post.description }}
        </p>
      </header>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <!-- Article Footer -->
      <footer class="mt-16 pt-8 border-t border-gray-200">
        <div class="flex flex-col sm:flex-row items-center justify-between">
          <!-- Share Section -->
          <div class="mb-4 sm:mb-0">
            <p class="text-sm text-gray-600 mb-2">Share this article:</p>
            <div class="flex space-x-4">
              <a 
                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://waldemarenns.de' + post._path)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:text-blue-700 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a 
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://waldemarenns.de' + post._path)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-700 hover:text-blue-900 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Back to Posts -->
          <NuxtLink 
            to="/posts"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Back to all posts
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </footer>
    </div>
  </article>
</template>

<style>
/* Enhance prose styles for better readability */
.prose {
  color: #374151;
  line-height: 1.75;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  color: #111827;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h1 {
  font-size: 2.25rem;
  line-height: 1.2;
}

.prose h2 {
  font-size: 1.875rem;
  line-height: 1.3;
}

.prose h3 {
  font-size: 1.5rem;
  line-height: 1.4;
}

.prose p {
  margin-bottom: 1.5rem;
}

.prose ul,
.prose ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose pre {
  background-color: #1f2937;
  color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.prose code {
  background-color: #f3f4f6;
  color: #dc2626;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.prose pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

.prose blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #6b7280;
}

.prose a {
  color: #3b82f6;
  text-decoration: underline;
}

.prose a:hover {
  color: #1d4ed8;
}

.prose img {
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.prose th,
.prose td {
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  text-align: left;
}

.prose th {
  background-color: #f9fafb;
  font-weight: 600;
}
</style>