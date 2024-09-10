<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer class="footer bg-neutral text-neutral-content p-10">
    <nav>
      <span class="footer-title text-white">{{ $t('footer.legal') }}</span>
      <NuxtLink :to="localePath('imprint')" class="link link-hover">{{ $t('footer.imprint') }}</NuxtLink>
      <NuxtLink :to="localePath('privacy-policy')" class="link link-hover">{{ $t('footer.privacy') }}</NuxtLink>
    </nav>
  </footer>
</template>