<script setup lang="ts">
const showButton = ref(false)

function handleScroll() {
  showButton.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="btn btn-primary btn-circle fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl"
      aria-label="Back to top"
      title="Back to top"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-lg"></font-awesome-icon>
    </button>
  </Transition>
</template>
