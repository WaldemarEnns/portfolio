<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { scrollToContact, scrollToServices } = useScrollTo()

definePageMeta({
  name: 'home',
  description: 'meta.descriptions.home'
})

defineOgImage('Default', {
  title: 'Waldemar Enns',
  description: t('home.hero.headline')
})
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

        <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-base-content font-bold">
          {{ t('home.hero.developer') }} • {{ t('home.hero.freelancer') }} • {{ t('home.hero.consultant') }}
        </div>

        <div class="relative mb-8">
          <h2 class="text-lg sm:text-xl md:text-2xl font-semibold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {{ t('home.hero.headline') }}
          </h2>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

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
    
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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

    <div class="card bg-base-200 shadow-lg max-w-6xl mx-auto">
      <div class="card-body">
        <h3 class="card-title text-xl mb-6 justify-center">
          <font-awesome-icon icon="fa-solid fa-code" class="text-accent mr-2"></font-awesome-icon>
          {{ t('home.tech_stack.title') }}
        </h3>
        <p class="text-base-content/70 text-center mb-6 max-w-2xl mx-auto">{{ t('home.tech_stack.subtitle') }}</p>
        <div class="flex flex-wrap justify-center gap-3">
          <div class="badge badge-primary badge-lg gap-2">
            <font-awesome-icon icon="fa-brands fa-laravel" class="text-lg"></font-awesome-icon>
            {{ t('badges.laravel') }}
          </div>
          <div class="badge badge-primary badge-lg gap-2">
            <font-awesome-icon icon="fa-brands fa-vuejs" class="text-lg"></font-awesome-icon>
            {{ t('badges.vue') }}
          </div>
          <div class="badge badge-primary badge-lg gap-2">
            {{ t('badges.nuxt') }}
          </div>
          <div class="badge badge-primary badge-lg gap-2">
            <font-awesome-icon icon="fa-solid fa-code" class="text-lg"></font-awesome-icon>
            {{ t('badges.typescript') }}
          </div>
          <div class="badge badge-primary badge-lg gap-2">
            {{ t('badges.nestjs') }}
          </div>
          <div class="badge badge-primary badge-lg gap-2">
            <font-awesome-icon icon="fa-brands fa-python" class="text-lg"></font-awesome-icon>
            {{ t('badges.python') }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="container m-auto py-16 px-4 bg-base-100">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ t('home.services.title') }}</h2>
      <p class="text-xl text-base-content/70 max-w-2xl mx-auto">{{ t('home.services.subtitle') }}</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
      <NuxtLink :to="localePath('/services/ai')" class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div class="card-body text-center p-6">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-robot" class="text-2xl text-primary"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ t('home.services_overview.ai_title') }}</h3>
          <p class="text-base-content/70 text-sm">{{ t('home.services_overview.ai_desc') }}</p>
          <div class="text-primary text-sm mt-4 font-medium">
            {{ t('home.services_overview.learn_more') }}
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-1"></font-awesome-icon>
          </div>
        </div>
      </NuxtLink>

      <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="card-body text-center p-6">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-code" class="text-2xl text-secondary"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ t('home.services.frontend_title') }}</h3>
          <p class="text-base-content/70 text-sm">{{ t('home.services_overview.frontend_desc') }}</p>
        </div>
      </div>

      <div class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div class="card-body text-center p-6">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-server" class="text-2xl text-accent"></font-awesome-icon>
          </div>
          <h3 class="font-bold text-lg mb-2">{{ t('home.services.saas_title') }}</h3>
          <p class="text-base-content/70 text-sm">{{ t('home.services_overview.saas_desc') }}</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
        class="btn btn-outline btn-primary btn-lg"
        @click="scrollToContact"
      >
        {{ t('cta.get_in_touch') }}
        <font-awesome-icon icon="fa-solid fa-envelope" class="ml-2"></font-awesome-icon>
      </button>
    </div>
  </section>

  <div class="divider divider-gradient text-primary">{{ t('dividers.interested') }}</div>
</template>
