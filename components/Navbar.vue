<script setup lang="ts">
const { currentRoute } = useRouter()
const isHome = computed(() => currentRoute.value.path === '/')

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

function scrollToServices () {
  document.querySelector('#services')!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="navbar bg-base-100 sticky top-0 z-10">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">waldemar enns</NuxtLink>
    </div>
    <div v-if="isHome" class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a @click="scrollToAbout">About me</a></li>
        <li><a @click="scrollToServices">Service</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn" @click="scrollToContact">
        Get in touch
        <font-awesome-icon icon="fa-solid fa-envelope-open"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>