<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

definePageMeta({
  layout: 'post'
})

// Get the slug from the route
const slug = computed(() => {
  const slugParam = route.params.slug
  return Array.isArray(slugParam) ? slugParam.join('/') : slugParam
})

// Query the blog post for the current locale
const { data: post } = await useAsyncData(`blog-post-${locale.value}-${slug.value}`, () => {
  return queryContent(`/blog/${locale.value}/${slug.value}`).findOne()
})

// Handle 404
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

// Set SEO meta tags
useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogImage: post.value.image,
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <article class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-4 text-gray-600 mb-4">
          <time :datetime="post.date">
            {{ new Date(post.date).toLocaleDateString(locale) }}
          </time>
        </div>
        <div v-if="post.tags" class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-3 py-1 text-sm bg-gray-200 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <div class="mt-12 pt-8 border-t">
        <NuxtLink
          to="/posts"
          class="text-primary hover:underline"
        >
          ← Back to blog
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<style>
/* Prose styling for content */
.prose {
  color: inherit;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  font-weight: bold;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose h1 {
  font-size: 2em;
}

.prose h2 {
  font-size: 1.5em;
}

.prose h3 {
  font-size: 1.25em;
}

.prose p {
  margin-bottom: 1em;
  line-height: 1.75;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.prose pre {
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 1em;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1em;
}

.prose pre code {
  background-color: transparent;
  padding: 0;
  color: inherit;
  font-size: inherit;
}

.prose ul,
.prose ol {
  margin-bottom: 1em;
  padding-left: 1.5em;
}

.prose li {
  margin-bottom: 0.5em;
}

.prose a {
  color: #3b82f6;
  text-decoration: underline;
}

.prose a:hover {
  color: #2563eb;
}
</style>
