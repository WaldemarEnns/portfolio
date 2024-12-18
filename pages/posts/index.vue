<script setup lang="ts">
import type { Strapi4ResponseData, StrapiLocale } from '@nuxtjs/strapi';
import type { Post } from '~/types/strapi';

const localePath = useLocalePath()

const { t } = useI18n()

definePageMeta({
  layout: 'post'
})

const { locale } = useI18n()
const { find } = useStrapi<Post>()

const { data } = await useAsyncData(
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

function getPath(post: Strapi4ResponseData<Post>) {
  return localePath({
    name: 'posts-slug',
    params: {
      slug: post.attributes.slug
    }
  })
}

const isPublished = (post: Strapi4ResponseData<Post>) => post.attributes.publishedAt !== null
</script>

<template>
  <section class="container mx-auto my-12">
    <h1 class="font-bold text-2xl mb-8">{{ t('posts.read_something_about') }}</h1>
    <div class="card bg-slate-800 max-w-full mb-4"
      v-for="post in data?.data"
      :key="post.id"
    >
      <div class="card-body flex flex-col sm:flex-row justify-between items-center">
        <div class="sm:mr-8">
          <h2 class="card-title block">{{ post.attributes.Title }}</h2>
          <i class="block text-sm mt-1">
            {{ isPublished(post) ? t('post.published_at') : t('post.edited_at') }}
            {{ formatToLocaleDate(post.attributes.publishedAt || post.attributes.updatedAt) }}
          </i>
        </div>
        <NuxtLink :to="getPath(post)" class="btn btn-primary btn-outline btn-sm sm:btn-md btn-wide mt-2 sm:mt-0">{{ t('post.have_a_read') }}</NuxtLink>
      </div>
    </div>

    <!-- <div class="flex flex-row justify-center items-start">
      <div class="join mt-4">
        <button
          v-for="i in data?.meta.pagination.total"
          class="join-item btn"
        >
          {{ i }}
        </button>
      </div>
    </div> -->
  </section>
</template>
