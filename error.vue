<script setup lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError
}

defineProps<Props>()

const handleError = () => clearError( { redirect: '/' })
</script>

<template>
  <NuxtLayout
    name="default"
  >
    <div class="container h-[50vh] m-auto flex flex-col justify-center items-center py-12">
      <h2 class="font-bold text-xl text-center">{{ $t('errors.title') }}</h2>

      <div role="alert" class="alert alert-error prose my-8">
        <font-awesome-icon icon="fa-solid fa-exclamation-triangle" class="mr-2"></font-awesome-icon>
        <p class="my-0">
          {{ error.message }}
        </p>
      </div>
      
      <div class="prose mb-8">
        <q class="italic">If at first you don’t succeed, skydiving is probably not for you.</q>
      </div>

      <button
        class="btn w-[300px] btn-primary"
        @click="handleError"
      >
        {{ $t('errors.return_back_home') }}
        <font-awesome-icon icon="fa-solid fa-right-from-bracket"></font-awesome-icon>
      </button>
    </div>
  </NuxtLayout>
</template>