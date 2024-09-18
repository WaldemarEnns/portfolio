<script setup lang="ts">
import type { Post } from '@/types/strapi'
import { StrapiBlocks } from 'vue-strapi-blocks-renderer'

const { findOne } = useStrapi<Post>()

definePageMeta({
  layout: 'post'
})

const { currentRoute } = useRouter()

const postId = computed(() => currentRoute.value.params.id as string)

const { data } = await useAsyncData(
  'post',
  () => findOne('posts', postId.value)
)

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
  <article class="container prose py-12 mx-auto">
    <i v-if="publicationDate">Veröffentlicht am {{ publicationDate }}</i>
    <i v-else>Zuletzt bearbeitet am {{ updatedAt }}</i>
    <h1>{{ title }}</h1>
    <StrapiBlocks
      v-if="content"
      :content="content"
    />
  </article>
</template>