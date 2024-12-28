<script setup lang="ts">
import type { Strapi4ResponseData } from '@nuxtjs/strapi';
import type { Post } from '~/types/strapi';

import { useI18n } from 'vue-i18n'

const localePath = useLocalePath()
const { t } = useI18n()

interface Props {
  post: Strapi4ResponseData<Post>
}

defineProps<Props>()

const isPublished = (post: Strapi4ResponseData<Post>) => post.attributes.publishedAt !== null

function getPath(post: Strapi4ResponseData<Post>) {
  return localePath({
    name: 'posts-slug',
    params: {
      slug: post.attributes.slug
    }
  })
}
</script>

<template>
  <div class="card bg-slate-800 max-w-full mb-4">
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
</template>