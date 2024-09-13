<script setup lang="ts">
interface Props {
  icon: string
  content: string
  title?: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full border border-secondary rounded-lg bg-primary-content px-12 py-8 flex flex-col items-center sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start">
    <div class="flex flex-row justify-center items-start">
      <font-awesome-icon :icon="icon" size="2xl" class="mb-8 mr-4"></font-awesome-icon>
      <h3 class="text-xl font-medium prose" v-if="title">{{ title }}</h3>
    </div>
    <p class="inline-block">{{ content }}</p>
  </div>
</template>