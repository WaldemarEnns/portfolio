<script setup lang="ts">
definePageMeta({
  title: 'Waldemar Enns',
  name: 'home'
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
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md prose">
        <img
          class="mask mask-squircle sepia-0  w-[100px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] m-auto mb-8"
          src="/assets/images/me-nice.webp"
          alt="A picture of me in a suit."
        />
        <h1 class="text-5xl font-bold mb-0">{{ $t('home.nice_to_meet_you') }}</h1>
        <p class="py-6">
          {{  $t('home.welcome') }}
        </p>
        <button
          class="btn btn-primary"
          @click="scrollToAbout"
        >
          {{ $t('home.tell_me_more') }}
          <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
        </button>
      </div>
    </div>
  </div>

  <section id="about" class="container m-auto py-12">
    <article class="prose">
      <h2>{{ $t('home.about_me.about_me') }}</h2>
    </article>
    <article class="prose m-auto">
      <h3>
        <font-awesome-icon icon="fa-solid fa-user-astronaut"></font-awesome-icon>
       {{ $t('home.about_me.who_am_i') }}
      </h3>
      <p>{{ $t('home.about_me.who_i_am')}}</p>

      <h3>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"></font-awesome-icon>
        {{  $t('home.about_me.experience') }}
      </h3>
      <p>{{ $t('home.about_me.my_experience') }}</p>
      <div class="badge badge-neutral mr-2">
        <font-awesome-icon icon="fa-brands fa-laravel" class="mr-2"></font-awesome-icon>
        {{ $t('badges.laravel') }}
      </div>

      <div class="badge badge-neutral mr-2">
        <font-awesome-icon icon="fa-brands fa-vuejs" class="mr-2"></font-awesome-icon>
        {{ $t('badges.vue') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ $t('badges.nuxt') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ $t('badges.typescript') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ $t('badges.nestjs') }}
      </div>

      <div class="badge badge-neutral mr-2">
        {{ $t('badges.python') }}
      </div>

      <h3>
        <font-awesome-icon icon="fa-solid fa-hand-spock"></font-awesome-icon>
        {{  $t('home.about_me.values') }}
      </h3>
      <p>{{ $t('home.about_me.values_text') }}</p>

    </article>
  </section>

  <section id="services" class="container m-auto py-12">
    <article class="prose mb-4">
      <h2>{{ $t('home.services.services')}}</h2>
    </article>

    <div class="flex flex-row flex-wrap justify-between items-start">
      <div class="card bg-base-300 mb-4 mx-2 w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-palette"></font-awesome-icon>
            {{  $t('home.services.frontend_title') }}
          </h2>
          <p>{{ $t('home.services.frontend_text_1') }}</p>
          <p>{{ $t('home.services.frontend_text_2') }}</p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">{{ $t('cta.lets_talk') }}</button>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">
              <font-awesome-icon class="mr-2" icon="fa-brands fa-vuejs"></font-awesome-icon>
              {{ $t('badges.vue')}}
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 mb-4 mx-2 w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-sitemap"></font-awesome-icon>
            {{ $t('home.services.saas') }}
          </h2>
          <p>{{ $t('home.services.saas_text_1') }}</p>
          <p>{{ $t('home.services.saas_text_2') }}</p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">{{ $t('cta.start_your_business_idea') }}</button>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">
              <font-awesome-icon class="mr-2" icon="fa-brands fa-laravel"></font-awesome-icon>
              {{ $t('badges.laravel') }}
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 mb-4 mx-2 w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-user-check"></font-awesome-icon>
            {{ $t('home.services.consultancy') }}
          </h2>
          <p>
            {{ $t('home.services.consultancy_text_1') }}
          </p>
          <p>
            {{ $t('home.services.consultancy_text_2') }}
          </p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">{{ $t('cta.get_consultancy') }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider">{{ $t('dividers.interested') }}</div>
</template>