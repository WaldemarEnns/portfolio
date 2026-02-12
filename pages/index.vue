<script setup lang="ts">
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
        <MorphingImage
          src="/images/me-nice.webp"
          alt="A picture of me in a suit."
          :width="400"
          :height="400"
          class="m-auto mb-8"
        />
        
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Waldemar Enns
        </h1>

        <!-- Role text with dots -->
        <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-base-content font-bold">
          {{ t('home.hero.developer') }} • {{ t('home.hero.freelancer') }} • {{ t('home.hero.consultant') }}
        </div>

        <div class="relative mb-8">
          <h2 class="text-lg sm:text-xl md:text-2xl font-semibold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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

    <ClientOnly>
      <LazyParticlesBg
        class="absolute inset-0"
        :quantity="100"
        :ease="100"
        :color="'#FFF'"
        :staticity="10"
        refresh
      />
    </ClientOnly>
  </div>

  <section id="about" class="container m-auto py-16 px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ t('home.about_me.title') }}</h2>
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

        <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-base-content/10 shadow-lg hover-card-special">
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
      <h2 class="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
        {{ t('home.workshops.hero_title') }}
        <span class="badge badge-primary py-1.5 px-3 sm:py-2 sm:px-4 text-sm sm:text-base font-bold shadow-lg shadow-primary/30 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300" style="animation: gentle-pulse 3s ease-in-out infinite;">
          <font-awesome-icon icon="fa-solid fa-sparkles" class="mr-1 sm:mr-2"></font-awesome-icon>
          {{ t('home.workshops.badge') }}
        </span>
      </h2>
      
      <p class="text-lg sm:text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto mb-6 font-medium px-4">
        {{ t('home.workshops.hero_subtitle') }}
      </p>
    </div>

    <!-- AI Services Teaser Cards -->
    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 px-4">
      <!-- AI Bots -->
      <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="card-body text-center p-6">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-robot" class="text-2xl text-primary"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ t('home.workshops.teaser_bot_title') }}</h3>
          <p class="text-base-content/70 text-sm">{{ t('home.workshops.teaser_bot_desc') }}</p>
        </div>
      </div>

      <!-- Workshops -->
      <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-secondary/20">
        <div class="card-body text-center p-6">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-chalkboard-user" class="text-2xl text-secondary"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ t('home.workshops.teaser_workshop_title') }}</h3>
          <p class="text-base-content/70 text-sm">{{ t('home.workshops.teaser_workshop_desc') }}</p>
        </div>
      </div>

      <!-- Automations -->
      <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="card-body text-center p-6">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-cogs" class="text-2xl text-accent"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ t('home.workshops.teaser_automation_title') }}</h3>
          <p class="text-base-content/70 text-sm">{{ t('home.workshops.teaser_automation_desc') }}</p>
        </div>
      </div>
    </div>

    <!-- CTA to AI Services Page -->
    <div class="text-center px-4">
      <p class="text-base-content/70 max-w-2xl mx-auto mb-6 text-base">
        {{ t('home.workshops.teaser_cta_text') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink :to="localePath('/services/ai')" class="btn btn-primary btn-lg">
          {{ t('home.workshops.teaser_cta_button') }}
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2"></font-awesome-icon>
        </NuxtLink>
        <button
          class="btn btn-outline btn-primary btn-lg"
          @click="scrollToContact"
        >
          {{ t('home.workshops.teaser_contact_button') }}
        </button>
      </div>
    </div>
  </section>

  <div class="divider divider-gradient text-primary">{{ t('dividers.interested') }}</div>
</template>