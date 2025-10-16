<template>
  <section id="projects" class="bg-base-100 py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('home.projects.title') }}</h2>
        <p class="text-xl text-base-content/70 max-w-2xl mx-auto">{{ t('home.projects.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <!-- Project 1 -->
        <div class="card bg-base-200 shadow-lg hover-card group">
          <figure class="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
            <div class="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="120" height="80" viewBox="0 0 120 80" class="text-primary/60">
                <rect x="10" y="15" width="100" height="50" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
                <rect x="15" y="20" width="90" height="8" rx="2" fill="currentColor" opacity="0.3"/>
                <rect x="15" y="35" width="60" height="6" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="15" y="45" width="70" height="6" rx="1" fill="currentColor" opacity="0.4"/>
                <circle cx="90" cy="50" r="8" fill="currentColor" opacity="0.5"/>
                <path d="M82 46 L86 50 L98 38" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title text-xl mb-3">
              <font-awesome-icon icon="fa-solid fa-shopping-cart" class="text-primary mr-2"></font-awesome-icon>
              {{ t('home.projects.project1.title') }}
            </h3>
            <p class="text-base-content/80 mb-4">{{ t('home.projects.project1.description') }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-sm uppercase tracking-wide text-secondary mb-2">
                {{ t('home.projects.problem_solution') }}
              </h4>
              <p class="text-sm text-base-content/70">{{ t('home.projects.project1.problem_solution') }}</p>
            </div>

            <div class="mb-4">
              <h4 class="font-semibold text-sm uppercase tracking-wide text-accent mb-2">
                {{ t('home.projects.tech_stack') }}
              </h4>
              <div class="flex flex-wrap gap-1">
                <div class="badge badge-primary badge-sm">{{ t('badges.laravel') }}</div>
                <div class="badge badge-primary badge-sm">{{ t('badges.vue') }}</div>
                <div class="badge badge-primary badge-sm">{{ t('badges.typescript') }}</div>
                <div class="badge badge-secondary badge-sm">{{ t('badges.stripe') }}</div>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto">
              <button class="btn btn-primary btn-sm">
                {{ t('home.projects.view_details') }}
                <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1"></font-awesome-icon>
              </button>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="card bg-base-200 shadow-lg hover-card group">
          <figure class="aspect-video overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
            <div class="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="120" height="80" viewBox="0 0 120 80" class="text-secondary/60">
                <rect x="10" y="15" width="100" height="50" rx="4" stroke="currentColor" stroke-width="2" fill="none"/>
                <line x1="10" y1="25" x2="110" y2="25" stroke="currentColor" stroke-width="1"/>
                <rect x="15" y="30" width="30" height="20" rx="2" fill="currentColor" opacity="0.3"/>
                <rect x="50" y="30" width="25" height="12" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="50" y="45" width="35" height="8" rx="1" fill="currentColor" opacity="0.4"/>
                <circle cx="95" cy="40" r="6" fill="currentColor" opacity="0.5"/>
                <path d="M85 35 Q95 30 105 40" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title text-xl mb-3">
              <font-awesome-icon icon="fa-solid fa-chart-line" class="text-secondary mr-2"></font-awesome-icon>
              {{ t('home.projects.project2.title') }}
            </h3>
            <p class="text-base-content/80 mb-4">{{ t('home.projects.project2.description') }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-sm uppercase tracking-wide text-secondary mb-2">
                {{ t('home.projects.problem_solution') }}
              </h4>
              <p class="text-sm text-base-content/70">{{ t('home.projects.project2.problem_solution') }}</p>
            </div>

            <div class="mb-4">
              <h4 class="font-semibold text-sm uppercase tracking-wide text-accent mb-2">
                {{ t('home.projects.tech_stack') }}
              </h4>
              <div class="flex flex-wrap gap-1">
                <div class="badge badge-primary badge-sm">{{ t('badges.nestjs') }}</div>
                <div class="badge badge-primary badge-sm">{{ t('badges.nuxt') }}</div>
                <div class="badge badge-primary badge-sm">{{ t('badges.typescript') }}</div>
                <div class="badge badge-secondary badge-sm">{{ t('badges.postgresql') }}</div>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto">
              <button class="btn btn-primary btn-sm">
                {{ t('home.projects.view_details') }}
                <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1"></font-awesome-icon>
              </button>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="card bg-base-200 shadow-lg hover-card group">
          <figure class="aspect-video overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
            <div class="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="120" height="80" viewBox="0 0 120 80" class="text-accent/60">
                <rect x="20" y="10" width="80" height="60" rx="8" stroke="currentColor" stroke-width="2" fill="none"/>
                <rect x="25" y="15" width="70" height="8" rx="2" fill="currentColor" opacity="0.3"/>
                <rect x="25" y="28" width="20" height="6" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="50" y="28" width="20" height="6" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="75" y="28" width="20" height="6" rx="1" fill="currentColor" opacity="0.4"/>
                <rect x="25" y="40" width="45" height="4" rx="1" fill="currentColor" opacity="0.3"/>
                <rect x="25" y="48" width="35" height="4" rx="1" fill="currentColor" opacity="0.3"/>
                <circle cx="85" cy="55" r="8" fill="currentColor" opacity="0.5"/>
                <path d="M80 50 L84 54 L90 48" stroke="white" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title text-xl mb-3">
              <font-awesome-icon icon="fa-solid fa-mobile-alt" class="text-accent mr-2"></font-awesome-icon>
              {{ t('home.projects.project3.title') }}
            </h3>
            <p class="text-base-content/80 mb-4">{{ t('home.projects.project3.description') }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-sm uppercase tracking-wide text-secondary mb-2">
                {{ t('home.projects.problem_solution') }}
              </h4>
              <p class="text-sm text-base-content/70">{{ t('home.projects.project3.problem_solution') }}</p>
            </div>

            <div class="mb-4">
              <h4 class="font-semibold text-sm uppercase tracking-wide text-accent mb-2">
                {{ t('home.projects.tech_stack') }}
              </h4>
              <div class="flex flex-wrap gap-1">
                <div class="badge badge-primary badge-sm">{{ t('badges.python') }}</div>
                <div class="badge badge-primary badge-sm">{{ t('badges.vue') }}</div>
                <div class="badge badge-primary badge-sm">{{ t('badges.fastapi') }}</div>
                <div class="badge badge-secondary badge-sm">{{ t('badges.redis') }}</div>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto">
              <button class="btn btn-primary btn-sm">
                {{ t('home.projects.view_details') }}
                <font-awesome-icon icon="fa-solid fa-external-link-alt" class="ml-1"></font-awesome-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-12">
        <p class="text-lg text-base-content/70 mb-6">{{ t('home.projects.cta_text') }}</p>
        <RainbowButton
          class="btn btn-secondary btn-lg text-white"
          @click="scrollToContact"
        >
          {{ t('home.projects.cta_button') }}
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2"></font-awesome-icon>
        </RainbowButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

function scrollToContact() {
  document.querySelector('#contact')!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.hover-card {
  @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>