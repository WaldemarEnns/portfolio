<template>
  <div class="intro-section">
    <div class="intro-image">
      <MorphingImage
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
      />
    </div>
    <div class="intro-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  width?: number
  height?: number
}

withDefaults(defineProps<Props>(), {
  width: 400,
  height: 400
})
</script>

<style scoped>
.intro-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 2rem 0;
}

.intro-content {
  flex: 1;
}

.intro-image {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
    gap: 2rem;
  }
  
  .intro-content {
    text-align: center;
  }
}
</style>
