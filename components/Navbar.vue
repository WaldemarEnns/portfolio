<script setup lang="ts">
const { currentRoute } = useRouter()
const localePath = useLocalePath()

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
  <div class="navbar bg-base-100 sticky top-0 z-20">
    <div class="navbar-start">
      <NuxtLink :to="localePath('home')" class="btn btn-ghost text-xl">waldemar enns</NuxtLink>
    </div>
    <div v-if="currentRoute.path === '/'" class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a @click="scrollToAbout" href="#about">{{ $t('navbar.links.about_me') }}</a></li>
        <li><a @click="scrollToWorkshops" href="#workshops">{{ $t('navbar.links.workshops') }}</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn" @click="scrollToContact" href="#contact">
        {{ $t('cta.get_in_touch') }}
        <font-awesome-icon icon="fa-solid fa-envelope-open"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>