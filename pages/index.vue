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

  <section id="about" class="container m-auto py-12">
    <article class="prose">
      <h2>{{ t('home.about_me.about_me') }}</h2>
    </article>
    <article class="prose m-auto">
      <h3>
        <font-awesome-icon icon="fa-solid fa-user-astronaut"></font-awesome-icon>
       {{ t('home.about_me.who_am_i') }}
      </h3>
      <p>{{ t('home.about_me.who_i_am')}}</p>

      <h3>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"></font-awesome-icon>
        {{  t('home.about_me.experience') }}
      </h3>
      <p>{{ t('home.about_me.my_experience') }}</p>
      <div class="badge badge-neutral mr-2">
        <font-awesome-icon icon="fa-brands fa-laravel" class="mr-2"></font-awesome-icon>
        {{ t('badges.laravel') }}
      </div>

      <div class="badge badge-neutral mr-2">
        <font-awesome-icon icon="fa-brands fa-vuejs" class="mr-2"></font-awesome-icon>
        {{ t('badges.vue') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ t('badges.nuxt') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ t('badges.typescript') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ t('badges.nestjs') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ t('badges.python') }}
      </div>

      <h3>
        <font-awesome-icon icon="fa-solid fa-hand-spock"></font-awesome-icon>
        {{  t('home.about_me.values') }}
      </h3>
      <p>{{ t('home.about_me.values_text') }}</p>

    </article>
  </section>

  <section id="services" class="container m-auto py-12">
    <article class="prose mb-4">
      <h2>{{ t('home.services.services')}}</h2>
    </article>

    <!-- w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] -->

    <div class="flex gap-4 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
      <div class="card flex-1 bg-base-300 mb-4 shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-palette"></font-awesome-icon>
            {{  t('home.services.frontend_title') }}
          </h2>
          <p>{{ t('home.services.frontend_text_1') }}</p>
          <p>{{ t('home.services.frontend_text_2') }}</p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">{{ t('cta.lets_talk') }}</button>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">
              <font-awesome-icon class="mr-2" icon="fa-brands fa-vuejs"></font-awesome-icon>
              {{ t('badges.vue')}}
            </div>
          </div>
        </div>
      </div>

      <div class="card flex-1 bg-base-300 mb-4 shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-sitemap"></font-awesome-icon>
            {{ t('home.services.saas') }}
          </h2>
          <p>{{ t('home.services.saas_text_1') }}</p>
          <p>{{ t('home.services.saas_text_2') }}</p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">{{ t('cta.start_your_business_idea') }}</button>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">
              <font-awesome-icon class="mr-2" icon="fa-brands fa-laravel"></font-awesome-icon>
              {{ t('badges.laravel') }}
            </div>
          </div>
        </div>
      </div>

      <div class="card flex-1 bg-base-300 mb-4 shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-user-check"></font-awesome-icon>
            {{ t('home.services.consultancy') }}
          </h2>
          <p>
            {{ t('home.services.consultancy_text_1') }}
          </p>
          <p>
            {{ t('home.services.consultancy_text_2') }}
          </p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">{{ t('cta.get_consultancy') }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="methods" class="container m-auto py-12">
    <article class="prose mb-4">
      <h2>{{ t('home.methods.methods')}}</h2>
    </article>
    <Method
      icon="fa-fas fa-arrows-split-up-and-left"
      :content="t('home.methods.agile')"
      :title="t('home.methods.titles.agile')"
      class="mb-4"
    />
    <Method
      icon="fa-fas fa-flask-vial"
      :content="t('home.methods.testing')"
      :title="t('home.methods.titles.testing')"
      class="mb-4"
    />
    <Method
      icon="fa-fas fa-code-branch"
      :content="t('home.methods.git_flow')"
      :title="t('home.methods.titles.git_flow')"
      class="mb-4"
    />
    <Method
      icon="fa-fas fa-server"
      :content="t('home.methods.ci_cd')"
      :title="t('home.methods.titles.ci_cd')"
      class="mb-4"
    />
  </section>

  <div class="divider">{{ t('dividers.interested') }}</div>
</template>