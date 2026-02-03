<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const localePath = useLocalePath()

definePageMeta({
  layout: 'post'
})

// Get the full path from the route and remove locale prefix
const fullPath = route.path
// Remove locale prefix (e.g., /en/posts/... -> /posts/...)
const contentPath = fullPath.replace(/^\/(en|de|es)\//, '/')

// Query the blog post from the collection by path
const { data: post } = await useAsyncData(`blog-post-${fullPath}`, () => {
  return queryCollection('blog')
    .path(contentPath)
    .first()
})

// Query related posts (same tags, excluding current)
const { data: relatedPosts } = await useAsyncData(`related-posts-${fullPath}`, async () => {
  if (!post.value?.tags?.length) return []
  
  const allPosts = await queryCollection('blog')
    .order('date', 'DESC')
    .limit(10)
    .all()
  
  // Filter posts with matching tags, excluding current
  return allPosts
    .filter(p => p.path !== fullPath)
    .filter(p => p.tags?.some((tag: string) => post.value?.tags?.includes(tag)))
    .slice(0, 2)
})

// Handle 404
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

// Calculate reading time (estimate based on typical markdown content)
const readingTime = computed(() => {
  const wordsPerMinute = 200
  // Estimate words from the description (fallback to 300 words = 5 min read)
  const description = post.value?.description
  const estimatedWordCount = typeof description === 'string' 
    ? description.split(/\s+/).length 
    : 300
  return Math.ceil(Math.max(estimatedWordCount, 300) / wordsPerMinute)
})

// Format date
const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Set SEO meta tags
useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description,
  ogImage: post.value?.image,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  articlePublishedTime: post.value?.date,
  articleTag: post.value?.tags,
})
</script>

<template>
  <article v-if="post" class="min-h-screen">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-1 z-50 bg-base-300">
      <div class="h-full bg-gradient-to-r from-primary via-secondary to-accent" id="reading-progress"></div>
    </div>

    <!-- Hero Section -->
    <header class="relative bg-base-200">
      <!-- Background Image with Overlay (only if heroImage is explicitly set) -->
      <div v-if="post.heroImage" class="absolute inset-0">
        <img
          :src="post.heroImage"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-base-200/90 via-base-200/95 to-base-100"></div>
      </div>
      
      <div class="container mx-auto px-4 py-16 md:py-24 relative">
        <div class="max-w-4xl mx-auto">
          <!-- Back Link -->
          <NuxtLink
            :to="localePath('/posts')"
            class="inline-flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors mb-8 group"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="transition-transform group-hover:-translate-x-1"></font-awesome-icon>
            <span>Back to blog</span>
          </NuxtLink>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {{ post.title }}
          </h1>
          
          <!-- Gradient underline accent -->
          <div class="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>

          <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-4 text-base-content/70 mb-6">
            <time :datetime="post.date" class="flex items-center gap-2">
              <font-awesome-icon icon="fa-regular fa-calendar" class="text-primary"></font-awesome-icon>
              {{ formattedDate }}
            </time>
            <span class="flex items-center gap-2">
              <font-awesome-icon icon="fa-regular fa-clock" class="text-secondary"></font-awesome-icon>
              {{ readingTime }} min read
            </span>
          </div>

          <!-- Tags -->
          <div v-if="post.tags" class="flex flex-wrap gap-2">
            <span
              v-for="(tag, index) in post.tags"
              :key="tag"
              class="badge badge-lg"
              :class="[
                index % 3 === 0 ? 'badge-primary' :
                index % 3 === 1 ? 'badge-secondary' :
                'badge-accent'
              ]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- Content Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="prose prose-lg max-w-none">
          <ContentRenderer :value="post" />
        </div>

        <!-- Author Section -->
        <div class="mt-16 pt-8 border-t border-base-content/10">
          <div class="card bg-base-200 shadow-lg">
            <div class="card-body flex flex-col sm:flex-row items-center gap-6">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 flex-shrink-0">
                <div class="w-full h-full rounded-full bg-base-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/me-nice.webp"
                    alt="Waldemar Enns"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="text-center sm:text-left">
                <p class="text-xl font-bold mb-2">Waldemar Enns</p>
                <p class="text-base-content/70 mb-4">
                  Full-stack developer, freelancer, and consultant passionate about building great software and teaching others.
                </p>
                <div class="flex justify-center sm:justify-start gap-3">
                  <a href="https://github.com/WaldemarEnns" target="_blank" rel="noopener" class="btn btn-circle btn-sm btn-ghost">
                    <font-awesome-icon icon="fa-brands fa-github" class="text-lg"></font-awesome-icon>
                  </a>
                  <a href="https://linkedin.com/in/waldemar-enns" target="_blank" rel="noopener" class="btn btn-circle btn-sm btn-ghost">
                    <font-awesome-icon icon="fa-brands fa-linkedin" class="text-lg"></font-awesome-icon>
                  </a>
                  <a href="mailto:your@email.com" class="btn btn-circle btn-sm btn-ghost">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="text-lg"></font-awesome-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Posts -->
        <div v-if="relatedPosts && relatedPosts.length > 0" class="mt-16">
          <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <font-awesome-icon icon="fa-solid fa-book-open" class="text-primary"></font-awesome-icon>
            Related Articles
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <NuxtLink
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.id"
              :to="relatedPost.path"
              class="card bg-base-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div class="card-body">
                <h3 class="card-title text-lg group-hover:text-primary transition-colors">
                  {{ relatedPost.title }}
                </h3>
                <p class="text-base-content/70 text-sm line-clamp-2">
                  {{ relatedPost.description }}
                </p>
                <div class="flex items-center gap-2 text-sm text-base-content/60 mt-4">
                  <font-awesome-icon icon="fa-regular fa-calendar" class="text-primary"></font-awesome-icon>
                  {{ new Date(relatedPost.date).toLocaleDateString(locale) }}
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Navigation -->
        <div class="mt-12 pt-8 border-t border-base-content/10">
          <NuxtLink
            :to="localePath('/posts')"
            class="btn btn-outline btn-primary gap-2"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-left"></font-awesome-icon>
            Back to all articles
          </NuxtLink>
        </div>

        <!-- Contact CTA -->
        <div class="mt-16 pt-8 border-t border-base-content/10">
          <ContactSection />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* Reading Progress Bar Animation */
#reading-progress {
  width: 0%;
  transition: width 0.1s;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
