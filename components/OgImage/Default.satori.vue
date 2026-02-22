<template>
  <div
    class="w-full h-full flex flex-col justify-between p-12"
    style="background: linear-gradient(135deg, #1b1717 0%, #252020 50%, #1b1717 100%);"
  >
    <div class="flex items-center gap-4">
      <div 
        class="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
        style="background: linear-gradient(135deg, #1fb854 0%, #1eb88e 50%, #1fb8ab 100%);"
      >
        WE
      </div>
      <span style="color: #cac9c9; font-size: 1.25rem; font-weight: 500;">waldemarenns.de</span>
    </div>

    <div class="flex-1 flex flex-col justify-center">
      <h1 
        style="font-size: 3.75rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.1; color: #cac9c9;"
      >
        {{ title }}
      </h1>
      <p v-if="description" style="font-size: 1.5rem; color: rgba(202, 201, 201, 0.7); max-width: 48rem; line-height: 1.6;">
        {{ description }}
      </p>
    </div>

    <div class="flex items-center justify-between">
      <div style="display: flex; gap: 0.75rem;">
        <span 
          style="padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; color: #cac9c9; background: rgba(31, 184, 84, 0.15); border: 1px solid rgba(31, 184, 84, 0.3);"
        >
          Full-Stack Developer
        </span>
        <span 
          style="padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; color: #cac9c9; background: rgba(30, 184, 142, 0.15); border: 1px solid rgba(30, 184, 142, 0.3);"
        >
          Freelancer
        </span>
        <span 
          style="padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; color: #cac9c9; background: rgba(31, 184, 171, 0.15); border: 1px solid rgba(31, 184, 171, 0.3);"
        >
          Consultant
        </span>
      </div>
      <span style="color: rgba(202, 201, 201, 0.5); font-size: 0.875rem;">waldemarenns.de</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
