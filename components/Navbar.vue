<script setup lang="ts">
const { currentRoute } = useRouter()
const localePath = useLocalePath()

const isBlog = computed(() => currentRoute.value.path.startsWith('/posts'))

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
  <div class="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-40 border-b border-base-200">
    <div class="navbar-start">
      <NuxtLink :to="localePath('home')" class="btn btn-ghost text-xl">waldemar enns</NuxtLink>
    </div>
    <div v-if="!isBlog && currentRoute.path === '/'" class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a @click="scrollToAbout" href="#about">{{ $t('navbar.links.about_me') }}</a></li>
        <li><a @click="scrollToWorkshops" href="#workshops">{{ $t('navbar.links.workshops') }}</a></li>
      </ul>
    </div>
    <div v-if="isBlog" class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink :to="localePath('/posts')" class="gap-2">
            <font-awesome-icon icon="fa-solid fa-book-open"></font-awesome-icon>
            Blog
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink v-if="isBlog" :to="localePath('/')" class="btn btn-ghost btn-sm gap-2">
        <font-awesome-icon icon="fa-solid fa-home"></font-awesome-icon>
        {{ $t('cta.back_to_home') || 'Home' }}
      </NuxtLink>
      <a v-else class="btn btn-primary btn-sm" @click="scrollToContact" href="#contact">
        {{ $t('cta.get_in_touch') }}
        <font-awesome-icon icon="fa-solid fa-envelope-open"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>