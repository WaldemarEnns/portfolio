<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  name: 'home',
  description: 'meta.descriptions.home'
})

function scrollToContact () {
  document.querySelector('#contact')!.scrollIntoView({
    behavior: 'smooth'
  })
}

function scrollToAbout () {
  document.querySelector('#about')!.scrollIntoView({
    behavior: 'smooth'
  })
}

function scrollToWorkshops () {
  document.querySelector('#workshops')!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="hero relative bg-base-200 min-h-screen">
    <div class="hero-content text-center z-10">
      <div class="max-w-2xl">
        <img
          class="mask mask-squircle sepia-0 w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[200px] m-auto mb-8"
          src="/assets/images/me-nice.webp"
          width="200"
          height="200" 
          alt="A picture of me in a suit."
        />
        
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Waldemar Enns
        </h1>

        <!-- Role text with dots -->
        <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-base-content font-bold">
          {{ t('home.hero.developer') }} • {{ t('home.hero.freelancer') }} • {{ t('home.hero.consultant') }}
        </div>

        <div class="relative mb-8">
          <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {{ t('home.hero.headline') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <!-- CTA Button -->
        <div class="flex justify-center">
          <button
            class="btn btn-primary btn-lg"
            @click="scrollToContact"
          >
            {{ t('home.hero.cta_primary') }}
            <font-awesome-icon icon="fa-solid fa-rocket" class="ml-2"></font-awesome-icon>
          </button>
        </div>
      </div>
    </div>

    <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="'#FFF'"
      :staticity="10"
      refresh
    />
  </div>

  <section id="about" class="container m-auto py-16 px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('home.about_me.title') }}</h2>
      <p class="text-xl text-base-content/70 max-w-2xl mx-auto">{{ t('home.about_me.subtitle') }}</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Left Column -->
      <div class="space-y-8">
        <div class="card bg-base-200 shadow-lg hover-card">
          <div class="card-body">
            <h3 class="card-title text-xl mb-4">
              <font-awesome-icon icon="fa-solid fa-rocket" class="text-primary"></font-awesome-icon>
              {{ t('home.about_me.what_i_do.title') }}
            </h3>
            <p class="text-base-content/80">{{ t('home.about_me.what_i_do.content') }}</p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-lg hover-card">
          <div class="card-body">
            <h3 class="card-title text-xl mb-4">
              <font-awesome-icon icon="fa-solid fa-bullseye" class="text-secondary"></font-awesome-icon>
              {{ t('home.about_me.my_approach.title') }}
            </h3>
            <p class="text-base-content/80">{{ t('home.about_me.my_approach.content') }}</p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-8">
        <div class="card bg-base-200 shadow-lg hover-card">
          <div class="card-body">
            <h3 class="card-title text-xl mb-4">
              <font-awesome-icon icon="fa-solid fa-chart-line" class="text-accent"></font-awesome-icon>
              {{ t('home.about_me.track_record.title') }}
            </h3>
            <p class="text-base-content/80 mb-4">{{ t('home.about_me.track_record.content') }}</p>
            
            <!-- Technology Stack -->
            <div class="flex flex-wrap gap-2">
              <div class="badge badge-primary">
                <font-awesome-icon icon="fa-brands fa-laravel" class="mr-1"></font-awesome-icon>
                {{ t('badges.laravel') }}
              </div>
              <div class="badge badge-primary">
                <font-awesome-icon icon="fa-brands fa-vuejs" class="mr-1"></font-awesome-icon>
                {{ t('badges.vue') }}
              </div>
              <div class="badge badge-primary">
                {{ t('badges.nuxt') }}
              </div>
              <div class="badge badge-primary">
                {{ t('badges.typescript') }}
              </div>
              <div class="badge badge-primary">
                {{ t('badges.nestjs') }}
              </div>
              <div class="badge badge-primary">
                {{ t('badges.python') }}
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-lg hover-card-special">
          <div class="card-body">
            <h3 class="card-title text-xl mb-4">
              <font-awesome-icon icon="fa-solid fa-handshake" class="text-primary"></font-awesome-icon>
              {{ t('home.about_me.why_work_with_me.title') }}
            </h3>
            <p class="text-base-content/80">{{ t('home.about_me.why_work_with_me.content') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="workshops" class="container m-auto py-16 px-4">

    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
        {{ t('home.workshops.hero_title') }}
        <span class="badge badge-primary py-1.5 px-3 sm:py-2 sm:px-4 text-sm sm:text-base font-bold shadow-lg shadow-primary/30 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300" style="animation: gentle-pulse 3s ease-in-out infinite;">
          <font-awesome-icon icon="fa-solid fa-star" class="mr-1 sm:mr-2"></font-awesome-icon>
          {{ t('home.workshops.badge') }}
        </span>
      </h2>
      
      <p class="text-lg sm:text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto mb-6 font-medium px-4">
        {{ t('home.workshops.hero_subtitle') }}
      </p>
      
    </div>

    <!-- Feature Highlights -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
      <div class="card bg-base-200 shadow-lg hover-card">
        <div class="card-body text-center p-4 sm:p-6">
          <div class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-bolt" class="text-xl sm:text-2xl text-primary"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-base sm:text-lg mb-2">{{ t('home.workshops.feature_1_title') }}</h3>
          <p class="text-base-content/70 text-xs sm:text-sm">{{ t('home.workshops.feature_1_desc') }}</p>
        </div>
      </div>

      <div class="card bg-base-200 shadow-lg hover-card">
        <div class="card-body text-center p-4 sm:p-6">
          <div class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-code" class="text-xl sm:text-2xl text-secondary"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-base sm:text-lg mb-2">{{ t('home.workshops.feature_2_title') }}</h3>
          <p class="text-base-content/70 text-xs sm:text-sm">{{ t('home.workshops.feature_2_desc') }}</p>
        </div>
      </div>

      <div class="card bg-base-200 shadow-lg hover-card sm:col-span-2 md:col-span-1">
        <div class="card-body text-center p-4 sm:p-6">
          <div class="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-chalkboard-user" class="text-xl sm:text-2xl text-accent"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-base sm:text-lg mb-2">{{ t('home.workshops.feature_3_title') }}</h3>
          <p class="text-base-content/70 text-xs sm:text-sm">{{ t('home.workshops.feature_3_desc') }}</p>
        </div>
      </div>
    </div>

    <!-- Workshop Cards -->
    <div class="mb-16 px-4">
      <h3 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">{{ t('home.workshops.workshops_title') }}</h3>
      
      <div class="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
        <!-- Workshop 1: AI Agentic Coding Fundamentals -->
        <div class="card bg-base-200 shadow-lg hover-card">
          <div class="card-body p-4 sm:p-6">
            <div class="flex justify-between items-start mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <font-awesome-icon icon="fa-solid fa-robot" class="text-lg sm:text-xl text-primary"></font-awesome-icon>
              </div>
              <div class="badge badge-primary badge-sm">{{ t('home.workshops.card_1_badge') }}</div>
            </div>
            
            <h4 class="card-title text-lg sm:text-xl mb-3 sm:mb-4">{{ t('home.workshops.card_1_title') }}</h4>
            
            <p class="text-base-content/70 text-xs sm:text-sm mb-4">{{ t('home.workshops.card_1_desc') }}</p>
            
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_1_feature_1') }}</span>
              </li>
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_1_feature_2') }}</span>
              </li>
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_1_feature_3') }}</span>
              </li>
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_1_feature_4') }}</span>
              </li>
            </ul>
            
            <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-base-300">
              <div class="badge badge-outline py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-terminal" class="mr-1"></font-awesome-icon>
                claude-code
              </div>
              <div class="badge badge-outline py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-code" class="mr-1"></font-awesome-icon>
                opencode
              </div>
              <div class="badge badge-outline py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-i-cursor" class="mr-1"></font-awesome-icon>
                cursor
              </div>
            </div>
          </div>
        </div>

        <!-- Workshop 2: Team Training -->
        <div class="card bg-base-200 shadow-lg hover-card">
          <div class="card-body p-4 sm:p-6">
            <div class="flex justify-between items-start mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <font-awesome-icon icon="fa-solid fa-users" class="text-lg sm:text-xl text-accent"></font-awesome-icon>
              </div>
              <div class="badge badge-accent badge-sm">{{ t('home.workshops.card_2_badge') }}</div>
            </div>
            
            <h4 class="card-title text-lg sm:text-xl mb-3 sm:mb-4">{{ t('home.workshops.card_2_title') }}</h4>
            
            <p class="text-base-content/70 text-xs sm:text-sm mb-4">{{ t('home.workshops.card_2_desc') }}</p>
            
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_2_feature_1') }}</span>
              </li>
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_2_feature_2') }}</span>
              </li>
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_2_feature_3') }}</span>
              </li>
              <li class="flex items-start gap-2 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent mt-1 flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.card_2_feature_4') }}</span>
              </li>
            </ul>
            
            <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-base-300">
              <div class="badge badge-outline py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-building" class="mr-1"></font-awesome-icon>
                Enterprise
              </div>
              <div class="badge badge-outline py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="mr-1"></font-awesome-icon>
                Training
              </div>
              <div class="badge badge-outline py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                <font-awesome-icon icon="fa-solid fa-handshake" class="mr-1"></font-awesome-icon>
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="mb-16 px-4">
      <h3 class="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">{{ t('home.workshops.pricing_title') }}</h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        <!-- Individual -->
        <div class="card bg-base-200 shadow-lg hover-card">
          <div class="card-body text-center p-4 sm:p-6">
            <h4 class="text-base sm:text-lg font-bold mb-2">{{ t('home.workshops.pricing_individual_title') }}</h4>
            <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">$299</div>
            <p class="text-xs sm:text-sm text-base-content/60 mb-4">{{ t('home.workshops.pricing_individual_desc') }}</p>
            <ul class="text-left space-y-2 mb-6 text-xs sm:text-sm">
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_individual_feature_1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_individual_feature_2') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_individual_feature_3') }}</span>
              </li>
            </ul>
            <button class="btn btn-outline btn-primary w-full btn-sm sm:btn-md" @click="scrollToContact">
              {{ t('home.workshops.pricing_cta_individual') }}
            </button>
          </div>
        </div>

        <!-- Team (Popular) -->
        <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-lg relative hover-card-special">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <div class="badge badge-primary badge-sm">{{ t('home.workshops.pricing_popular') }}</div>
          </div>
          <div class="card-body text-center pt-6 sm:pt-8 p-4 sm:p-6">
            <h4 class="text-base sm:text-lg font-bold mb-2">{{ t('home.workshops.pricing_team_title') }}</h4>
            <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">$999</div>
            <p class="text-xs sm:text-sm text-base-content/60 mb-4">{{ t('home.workshops.pricing_team_desc') }}</p>
            <ul class="text-left space-y-2 mb-6 text-xs sm:text-sm">
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_team_feature_1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_team_feature_2') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_team_feature_3') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-primary flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_team_feature_4') }}</span>
              </li>
            </ul>
            <button class="btn btn-primary w-full btn-sm sm:btn-md" @click="scrollToContact">
              {{ t('home.workshops.pricing_cta_team') }}
            </button>
          </div>
        </div>

        <!-- Enterprise -->
        <div class="card bg-base-200 shadow-lg hover-card sm:col-span-2 md:col-span-1">
          <div class="card-body text-center p-4 sm:p-6">
            <h4 class="text-base sm:text-lg font-bold mb-2">{{ t('home.workshops.pricing_enterprise_title') }}</h4>
            <div class="text-3xl sm:text-4xl font-bold text-accent mb-2">{{ t('home.workshops.pricing_enterprise_price') }}</div>
            <p class="text-xs sm:text-sm text-base-content/60 mb-4">{{ t('home.workshops.pricing_enterprise_desc') }}</p>
            <ul class="text-left space-y-2 mb-6 text-xs sm:text-sm">
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_enterprise_feature_1') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_enterprise_feature_2') }}</span>
              </li>
              <li class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-check" class="text-accent flex-shrink-0"></font-awesome-icon>
                <span>{{ t('home.workshops.pricing_enterprise_feature_3') }}</span>
              </li>
            </ul>
            <button class="btn btn-outline btn-accent w-full btn-sm sm:btn-md" @click="scrollToContact">
              {{ t('home.workshops.pricing_cta_enterprise') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA -->
    <div class="text-center px-4">
      <h3 class="text-xl sm:text-2xl font-bold mb-4">{{ t('home.workshops.final_cta_title') }}</h3>
      <p class="text-base-content/70 max-w-xl mx-auto mb-6 text-sm sm:text-base px-2">{{ t('home.workshops.final_cta_desc') }}</p>
      <button
        class="btn btn-primary btn-md sm:btn-lg"
        @click="scrollToContact"
      >
        {{ t('home.workshops.final_cta_button') }}
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2"></font-awesome-icon>
      </button>
    </div>
  </section>

  <div class="divider">{{ t('dividers.interested') }}</div>
</template>