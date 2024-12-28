<script setup lang="ts">
import type { Strapi4ResponseMany, StrapiLocale } from '@nuxtjs/strapi';
import type { Post } from '~/types/strapi';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { find } = useStrapi<Post>()
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

const { data } = await useAsyncData<Strapi4ResponseMany<Post>>(
  'posts',
  () => find('posts', {
    locale: locale.value as StrapiLocale,
    pagination: {
      page: 1,
      pageSize: 3
    },
    sort: 'publishedAt:desc',
    publicationState: process.env.NODE_ENV === 'production' ? 'live' : 'preview'
  }),
)
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md prose">
        <img
          class="mask mask-squircle sepia-0  w-[100px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] m-auto mb-8"
          src="/assets/images/me-nice.webp"
          width="100"
          height="100"
          alt="A picture of me in a suit."
        />
        <h1 class="text-5xl font-bold mb-0">{{ t('home.nice_to_meet_you') }}</h1>
        <p class="py-6">
          {{  t('home.welcome') }}
        </p>
        <button
          class="btn btn-primary"
          @click="scrollToAbout"
        >
          {{ t('home.tell_me_more') }}
          <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
        </button>
      </div>
    </div>
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

  <section id="blog" class="container m-auto py-12">
    <article class="prose mb-4">
      <h2>Blog & Insights</h2>
    </article>
    <BlogPost
      v-for="post in data!.data"
      :key="post.id"
      :post="post"
    />

    <div class="flex justify-center w-full">
      <NuxtLink
        class="btn btn-primary btn-wide mt-4"
        :to="localePath('posts')"
      >
      <span>{{ t('read_more') }}</span>
      <font-awesome-icon icon="fa-solid fa-book" class="mr-2"></font-awesome-icon>
      </NuxtLink>
    </div>
    
  </section>

  <div class="divider">{{ t('dividers.interested') }}</div>
</template>