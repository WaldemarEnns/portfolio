<script setup lang="ts">
interface Props {
  icon: string
  content: string
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full border border-secondary rounded-lg bg-base-300 px-12 py-8 flex flex-col items-center sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start">
    <div class="flex flex-row justify-center items-center mb-4">
      <font-awesome-icon :icon="icon" class="mr-4"></font-awesome-icon>
      <h2 class="card-title" v-if="title">{{ title }}</h2>
    </div>
    <p class="inline-block">{{ content }}</p>
  </div>
</template>