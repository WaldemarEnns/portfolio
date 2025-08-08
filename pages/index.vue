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
          <RainbowButton
            class="btn btn-primary btn-lg text-white"
            @click="scrollToContact"
          >
            {{ t('home.hero.cta_primary') }}
            <font-awesome-icon icon="fa-solid fa-rocket" class="ml-2"></font-awesome-icon>
          </RainbowButton>
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

  <section id="about" class="container m-auto py-16">
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
              <font-awesome-icon icon="fa-solid fa-target" class="text-secondary"></font-awesome-icon>
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
 
  

  <div class="divider">{{ t('dividers.interested') }}</div>
</template>