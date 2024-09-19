<script setup lang="ts">
import type { Post } from '@/types/strapi'
import { StrapiBlocks } from 'vue-strapi-blocks-renderer'

definePageMeta({
  layout: 'post',
})

const { findOne } = useStrapi<Post>()

const { currentRoute } = useRouter()

const postId = computed(() => currentRoute.value.params.id as string)

const { data } = await useAsyncData(
  'post',
  () => findOne('posts', postId.value)
)

useSeoMeta({
  title: `${data.value?.data?.attributes?.meta_title} | waldemar enns software solutions`,
  meta: [
    {
      name: 'description',
      content: data.value?.data?.attributes?.meta_description
    }
  ]
})

const content = computed(() => data.value?.data?.attributes?.Content)
const title = computed(() => data.value?.data?.attributes?.Title)

const publicationDate = computed(() => {
  if (data.value?.data?.attributes?.publishedAt) {
    return new Date(data.value?.data.attributes.publishedAt).toLocaleDateString()
  } else {
    return null
  }
})

const updatedAt = computed(() => new Date(data.value?.data?.attributes?.updatedAt!).toLocaleDateString())
</script>

<template>
  <article class="container prose my-12 mx-auto">
    <i v-if="publicationDate">Veröffentlicht am {{ publicationDate }}</i>
    <i v-else>Zuletzt bearbeitet am {{ updatedAt }}</i>
    <h1 class="block mt-4">{{ title }}</h1>
    <StrapiBlocks
      v-if="content"
      :content="content"
    />
  </article>
</template>