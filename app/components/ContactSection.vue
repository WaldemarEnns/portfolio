<script setup lang="ts">
// Simple CTA section that opens a contact dialog
// Used on blog pages and other pages without the full contact form
</script>

<template>
  <div class="card bg-base-200 shadow-lg">
    <div class="card-body text-center">
      <h2 class="text-2xl font-bold mb-2">{{ $t('contact.title') }}</h2>
      <p class="text-base-content/70 mb-6">{{ $t('contact.text') }}</p>
      <div class="flex justify-center">
        <ContactDialog />
      </div>
    </div>
  </div>
</template>
