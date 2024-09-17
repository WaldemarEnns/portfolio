<script setup lang="ts">
definePageMeta({
  layout: 'post'
})

const { currentRoute } = useRouter()

const postId = computed(() => currentRoute.value.params.id)

const content = ref('Some Content')
</script>

<template>
  <article class="container prose py-12 mx-auto">
    {{ content }}: {{ postId }}
  </article>
</template>