<script setup lang="ts">
import type { Strapi4ResponseMany, StrapiLocale } from '@nuxtjs/strapi';
import type { Post } from '~/types/strapi';

const { t } = useI18n()

definePageMeta({
  layout: 'post'
})

const { locale } = useI18n()
const { find } = useStrapi<Post>()

const { data } = await useAsyncData<Strapi4ResponseMany<Post>>(
  'posts',
  () => find('posts', {
    locale: locale.value as StrapiLocale,
    pagination: {
      page: 1,
      pageSize: 20
    },
    sort: 'publishedAt:desc',
    publicationState: process.env.NODE_ENV === 'production' ? 'live' : 'preview'
  }),
)
</script>

<template>
  <section class="container mx-auto my-12">
    <h1 class="font-bold text-2xl mb-8">{{ t('posts.read_something_about') }}</h1>
    <BlogPost
      v-for="post in data!.data"
      :key="post.id"
      :post="post"
    />
  </section>
</template>
