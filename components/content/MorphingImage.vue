<template>
  <div class="morphing-image-container">
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      format="webp"
      class="morphing-image"
    />
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
.morphing-image-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  position: relative;
}

.morphing-image {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 0 4px rgba(var(--primary), 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: morphBlob 8s ease-in-out infinite;
}

.morphing-image:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.2),
    0 0 0 6px rgba(var(--primary), 0.2);
}

@keyframes morphBlob {
  0%, 100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
}

@media (max-width: 768px) {
  .morphing-image {
    width: 220px;
    height: 220px;
  }
}
</style>
