<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  name: 'ai-services',
  description: 'meta.descriptions.ai_services'
})

useSeoMeta({
  title: t('services.ai.meta_title'),
  description: t('services.ai.meta_description')
})

function scrollToContact() {
  document.querySelector('#contact')!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <!-- Hero Section -->
    <div class="hero relative bg-gradient-to-br from-base-200 via-base-200 to-primary/5 py-20 lg:py-32">
      <div class="hero-content text-center z-10">
        <div class="max-w-4xl">
          <div class="mb-6">
            <span class="badge badge-primary badge-lg py-3 px-6 text-base">
              <font-awesome-icon icon="fa-solid fa-sparkles" class="mr-2"></font-awesome-icon>
              {{ t('services.ai.hero_badge') }}
            </span>
          </div>
          
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {{ t('services.ai.hero_title') }}
          </h1>
          
          <p class="text-lg sm:text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto mb-10">
            {{ t('services.ai.hero_subtitle') }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="btn btn-primary btn-lg"
              @click="scrollToContact"
            >
              {{ t('services.ai.cta_primary') }}
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2"></font-awesome-icon>
            </button>
            <NuxtLink :to="localePath('/#workshops')" class="btn btn-outline btn-lg">
              {{ t('services.ai.cta_secondary') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <section class="container mx-auto py-16 lg:py-24 px-4">
      <div class="text-center mb-16">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {{ t('services.ai.services_title') }}
        </h2>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
          {{ t('services.ai.services_subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <!-- AI Bot Implementation -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div class="card-body p-6 lg:p-8">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <font-awesome-icon icon="fa-solid fa-robot" class="text-2xl text-primary"></font-awesome-icon>
            </div>
            
            <h3 class="card-title text-xl lg:text-2xl mb-4">
              {{ t('services.ai.bot_title') }}
            </h3>
            
            <p class="text-base-content/70 mb-6">
              {{ t('services.ai.bot_description') }}
            </p>
            
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.bot_feature_1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.bot_feature_2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.bot_feature_3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.bot_feature_4') }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 pt-4 border-t border-base-content/10">
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-brain" class="mr-1"></font-awesome-icon>
                OpenAI
              </div>
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-comments" class="mr-1"></font-awesome-icon>
                Claude
              </div>
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-code" class="mr-1"></font-awesome-icon>
                AI SDK
              </div>
            </div>
          </div>
        </div>

        <!-- AI Workshops -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <div class="badge badge-primary badge-sm">{{ t('services.ai.popular_badge') }}</div>
          </div>
          <div class="card-body p-6 lg:p-8 pt-10">
            <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <font-awesome-icon icon="fa-solid fa-chalkboard-user" class="text-2xl text-secondary"></font-awesome-icon>
            </div>
            
            <h3 class="card-title text-xl lg:text-2xl mb-4">
              {{ t('services.ai.workshops_title') }}
            </h3>
            
            <p class="text-base-content/70 mb-6">
              {{ t('services.ai.workshops_description') }}
            </p>
            
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-secondary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.workshops_feature_1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-secondary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.workshops_feature_2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-secondary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.workshops_feature_3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-secondary mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.workshops_feature_4') }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 pt-4 border-t border-base-content/10">
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-terminal" class="mr-1"></font-awesome-icon>
                Claude Code
              </div>
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-i-cursor" class="mr-1"></font-awesome-icon>
                Cursor
              </div>
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-users" class="mr-1"></font-awesome-icon>
                Teams
              </div>
            </div>
          </div>
        </div>

        <!-- n8n Automations -->
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
          <div class="card-body p-6 lg:p-8">
            <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <font-awesome-icon icon="fa-solid fa-network-wired" class="text-2xl text-accent"></font-awesome-icon>
            </div>
            
            <h3 class="card-title text-xl lg:text-2xl mb-4">
              {{ t('services.ai.automation_title') }}
            </h3>
            
            <p class="text-base-content/70 mb-6">
              {{ t('services.ai.automation_description') }}
            </p>
            
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.automation_feature_1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.automation_feature_2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.automation_feature_3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span class="text-sm">{{ t('services.ai.automation_feature_4') }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 pt-4 border-t border-base-content/10">
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-robot" class="mr-1"></font-awesome-icon>
                n8n
              </div>
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-plug" class="mr-1"></font-awesome-icon>
                APIs
              </div>
              <div class="badge badge-outline badge-sm">
                <font-awesome-icon icon="fa-solid fa-database" class="mr-1"></font-awesome-icon>
                CRM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who I Help Section -->
    <section class="container mx-auto py-16 lg:py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {{ t('services.ai.audience_title') }}
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            {{ t('services.ai.audience_subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          <!-- For Developers -->
          <div class="card bg-gradient-to-br from-primary/5 to-secondary/5 border border-base-content/10">
            <div class="card-body p-6 lg:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <font-awesome-icon icon="fa-solid fa-code" class="text-xl text-primary"></font-awesome-icon>
                </div>
                <h3 class="text-xl font-bold">{{ t('services.ai.for_developers_title') }}</h3>
              </div>
              
              <p class="text-base-content/70 mb-6">
                {{ t('services.ai.for_developers_desc') }}
              </p>
              
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <font-awesome-icon icon="fa-solid fa-lightbulb" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                  <span class="text-sm">{{ t('services.ai.for_developers_item_1') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <font-awesome-icon icon="fa-solid fa-lightbulb" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                  <span class="text-sm">{{ t('services.ai.for_developers_item_2') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <font-awesome-icon icon="fa-solid fa-lightbulb" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                  <span class="text-sm">{{ t('services.ai.for_developers_item_3') }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- For Businesses -->
          <div class="card bg-gradient-to-br from-accent/5 to-primary/5 border border-base-content/10">
            <div class="card-body p-6 lg:p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <font-awesome-icon icon="fa-solid fa-building" class="text-xl text-accent"></font-awesome-icon>
                </div>
                <h3 class="text-xl font-bold">{{ t('services.ai.for_businesses_title') }}</h3>
              </div>
              
              <p class="text-base-content/70 mb-6">
                {{ t('services.ai.for_businesses_desc') }}
              </p>
              
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <font-awesome-icon icon="fa-solid fa-rocket" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                  <span class="text-sm">{{ t('services.ai.for_businesses_item_1') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <font-awesome-icon icon="fa-solid fa-rocket" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                  <span class="text-sm">{{ t('services.ai.for_businesses_item_2') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <font-awesome-icon icon="fa-solid fa-rocket" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                  <span class="text-sm">{{ t('services.ai.for_businesses_item_3') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="container mx-auto py-16 lg:py-24 px-4 bg-base-100">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {{ t('services.ai.process_title') }}
          </h2>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            {{ t('services.ai.process_subtitle') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card bg-base-200">
            <div class="card-body text-center p-6">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span class="text-xl font-bold text-primary">1</span>
              </div>
              <h4 class="font-bold mb-2">{{ t('services.ai.process_step_1_title') }}</h4>
              <p class="text-sm text-base-content/70">{{ t('services.ai.process_step_1_desc') }}</p>
            </div>
          </div>

          <div class="card bg-base-200">
            <div class="card-body text-center p-6">
              <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <span class="text-xl font-bold text-secondary">2</span>
              </div>
              <h4 class="font-bold mb-2">{{ t('services.ai.process_step_2_title') }}</h4>
              <p class="text-sm text-base-content/70">{{ t('services.ai.process_step_2_desc') }}</p>
            </div>
          </div>

          <div class="card bg-base-200">
            <div class="card-body text-center p-6">
              <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span class="text-xl font-bold text-accent">3</span>
              </div>
              <h4 class="font-bold mb-2">{{ t('services.ai.process_step_3_title') }}</h4>
              <p class="text-sm text-base-content/70">{{ t('services.ai.process_step_3_desc') }}</p>
            </div>
          </div>

          <div class="card bg-base-200">
            <div class="card-body text-center p-6">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span class="text-xl font-bold text-primary">4</span>
              </div>
              <h4 class="font-bold mb-2">{{ t('services.ai.process_step_4_title') }}</h4>
              <p class="text-sm text-base-content/70">{{ t('services.ai.process_step_4_desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto py-16 lg:py-24 px-4">
      <div class="card bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-base-content/10 max-w-4xl mx-auto">
        <div class="card-body text-center p-8 lg:p-12">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {{ t('services.ai.cta_title') }}
          </h2>
          <p class="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
            {{ t('services.ai.cta_description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="btn btn-primary btn-lg"
              @click="scrollToContact"
            >
              {{ t('services.ai.cta_button') }}
              <font-awesome-icon icon="fa-solid fa-paper-plane" class="ml-2"></font-awesome-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
}
</style>