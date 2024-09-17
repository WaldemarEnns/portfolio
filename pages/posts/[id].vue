<script setup lang="ts">
import type { Post } from '@/types/strapi'
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

const content = computed(() => data.value?.data.attributes.Content)
</script>

<template>
  <article class="container prose py-12 mx-auto">
    {{ content }}
  </article>
</template>