<template>
  <div
    class="w-full h-full flex flex-col justify-between p-12"
    style="background: linear-gradient(135deg, #1b1717 0%, #252020 50%, #1b1717 100%);"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div 
          class="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
          style="background: linear-gradient(135deg, #1fb854 0%, #1eb88e 50%, #1fb8ab 100%);"
        >
          WE
        </div>
        <span style="color: #cac9c9; font-size: 1.125rem;">waldemarenns.de</span>
      </div>
      <div v-if="date" style="display: flex; align-items: center; gap: 0.5rem; color: rgba(202, 201, 201, 0.6);">
        <span>{{ date }}</span>
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-center" style="padding: 2rem 0;">
      <h1 
        style="font-size: 3rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.1; color: #cac9c9;"
      >
        {{ title }}
      </h1>
      <p v-if="description" style="font-size: 1.25rem; color: rgba(202, 201, 201, 0.7); max-width: 56rem; line-height: 1.6;">
        {{ description }}
      </p>
    </div>

    <div class="flex items-center justify-between">
      <div v-if="tags && tags.length > 0" style="display: flex; gap: 0.5rem; flex-wrap: wrap; max-width: 32rem;">
        <span 
          v-for="(tag, index) in tags.slice(0, 4)" 
          :key="tag"
          style="padding: 0.375rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; color: #cac9c9;"
          :style="{
            background: index % 3 === 0 ? 'rgba(31, 184, 84, 0.15)' : index % 3 === 1 ? 'rgba(30, 184, 142, 0.15)' : 'rgba(31, 184, 171, 0.15)',
            border: index % 3 === 0 ? '1px solid rgba(31, 184, 84, 0.3)' : index % 3 === 1 ? '1px solid rgba(30, 184, 142, 0.3)' : '1px solid rgba(31, 184, 171, 0.3)'
          }"
        >
          {{ tag }}
        </span>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span v-if="readingTime" style="color: rgba(202, 201, 201, 0.6); font-size: 0.875rem;">
          {{ readingTime }} min read
        </span>
        <span style="color: rgba(202, 201, 201, 0.5); font-size: 0.875rem;">Blog</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  date?: string
  tags?: string[]
  readingTime?: number
}>()
</script>
