<script setup lang="ts">
const { currentRoute } = useRouter()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const isBlog = computed(() => {
  const routeName = currentRoute.value.name?.toString() || ''
  return routeName.includes('posts-slug') || routeName.includes('posts-index')
})

const isHomePage = computed(() => {
  const routeName = currentRoute.value.name?.toString() || ''
  return routeName.includes('home') || routeName === 'index'
})

const mobileMenuOpen = ref(false)

function scrollToContact () {
  document.querySelector('#contact')!.scrollIntoView({
    behavior: 'smooth'
  })
  mobileMenuOpen.value = false
}

function scrollToAbout () {
  document.querySelector('#about')!.scrollIntoView({
    behavior: 'smooth'
  })
  mobileMenuOpen.value = false
}

function scrollToWorkshops () {
  document.querySelector('#workshops')!.scrollIntoView({
    behavior: 'smooth'
  })
  mobileMenuOpen.value = false
}

function toggleMobileMenu () {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu () {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-40 border-b border-base-200">
    <div class="navbar-start">
      <!-- Mobile Menu Button -->
      <button 
        class="btn btn-ghost btn-circle lg:hidden"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
        aria-expanded="mobileMenuOpen"
      >
        <font-awesome-icon 
          :icon="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" 
          class="text-xl"
        />
      </button>
      
      <NuxtLink :to="localePath('home')" class="btn btn-ghost text-xl">waldemar enns</NuxtLink>
    </div>
    
    <!-- Desktop Menu -->
    <div v-if="!isBlog && isHomePage" class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a @click="scrollToAbout" href="#about">{{ $t('navbar.links.about_me') }}</a></li>
        <li><a @click="scrollToWorkshops" href="#workshops">{{ $t('navbar.links.workshops') }}</a></li>
        <li>
          <NuxtLink :to="localePath('/posts')">
            {{ $t('navbar.links.blog') || 'Blog' }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-if="isBlog" class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink :to="localePath('/posts')" class="gap-2">
            <font-awesome-icon icon="fa-solid fa-book-open" class="w-5 text-center"></font-awesome-icon>
            Blog
          </NuxtLink>
        </li>
      </ul>
    </div>
    
    <div class="navbar-end">
      <NuxtLink v-if="isBlog" :to="localePath('/')" class="btn btn-ghost btn-sm gap-2 hidden sm:inline-flex">
        <font-awesome-icon icon="fa-solid fa-home" class="w-5 text-center"></font-awesome-icon>
        {{ $t('cta.back_to_home') || 'Home' }}
      </NuxtLink>
      <a v-else class="btn btn-primary btn-sm gap-2" @click="scrollToContact" href="#contact">
        <font-awesome-icon icon="fa-solid fa-envelope-open" class="w-5 text-center"></font-awesome-icon>
        {{ $t('cta.get_in_touch') }}
      </a>
    </div>
  </div>
  
  <!-- Mobile Menu Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-show="mobileMenuOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="closeMobileMenu"
    ></div>
  </Transition>
  
  <!-- Mobile Menu Drawer -->
  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div
      v-show="mobileMenuOpen"
      class="fixed top-[64px] left-0 bottom-0 w-72 bg-base-100 z-50 shadow-2xl lg:hidden overflow-y-auto"
    >
      <ul class="menu menu-lg p-4">
        <li class="menu-title">Navigation</li>
        <li v-if="!isBlog && isHomePage">
          <a @click="scrollToAbout" href="#about" class="gap-2">
            <font-awesome-icon icon="fa-solid fa-user" class="w-5 text-center"></font-awesome-icon>
            {{ $t('navbar.links.about_me') }}
          </a>
        </li>
        <li v-if="!isBlog && isHomePage">
          <a @click="scrollToWorkshops" href="#workshops" class="gap-2">
            <font-awesome-icon icon="fa-solid fa-chalkboard-user" class="w-5 text-center"></font-awesome-icon>
            {{ $t('navbar.links.workshops') }}
          </a>
        </li>
        <li>
          <NuxtLink :to="localePath('/posts')" @click="closeMobileMenu" class="gap-2">
            <font-awesome-icon icon="fa-solid fa-book-open" class="w-5 text-center"></font-awesome-icon>
            {{ $t('navbar.links.blog') || 'Blog' }}
          </NuxtLink>
        </li>
        <li v-if="!isBlog && isHomePage">
          <a @click="scrollToContact" href="#contact" class="gap-2">
            <font-awesome-icon icon="fa-solid fa-envelope" class="w-5 text-center"></font-awesome-icon>
            {{ $t('cta.get_in_touch') }}
          </a>
        </li>
        
        <li class="menu-title mt-6">{{ $t('navbar.language') || 'Language' }}</li>
        <li>
          <NuxtLink :to="switchLocalePath('de')" @click="closeMobileMenu" class="gap-2">
            <span>🇩🇪</span> Deutsch
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="switchLocalePath('en')" @click="closeMobileMenu" class="gap-2">
            <span>🇬🇧</span> English
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="switchLocalePath('es')" @click="closeMobileMenu" class="gap-2">
            <span>🇪🇸</span> Español
          </NuxtLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>
