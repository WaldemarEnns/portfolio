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
      <div class="dropdown lg:hidden">
        <button 
          tabindex="0" 
          class="btn btn-ghost btn-circle"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <font-awesome-icon 
            :icon="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" 
            class="text-xl"
          />
        </button>
        <!-- Mobile Dropdown Menu -->
        <ul 
          v-show="mobileMenuOpen"
          tabindex="0" 
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          @click="closeMobileMenu"
        >
          <li v-if="!isBlog && isHomePage">
            <a @click="scrollToAbout" href="#about">{{ $t('navbar.links.about_me') }}</a>
          </li>
          <li v-if="!isBlog && isHomePage">
            <a @click="scrollToWorkshops" href="#workshops">{{ $t('navbar.links.workshops') }}</a>
          </li>
          <li v-if="isBlog">
            <NuxtLink :to="localePath('/posts')" class="gap-2">
              <font-awesome-icon icon="fa-solid fa-book-open"></font-awesome-icon>
              Blog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/posts')" class="gap-2">
              <font-awesome-icon icon="fa-solid fa-book-open"></font-awesome-icon>
              {{ $t('navbar.links.blog') || 'Blog' }}
            </NuxtLink>
          </li>
          <li class="menu-title pt-2">{{ $t('navbar.language') || 'Language' }}</li>
          <li><NuxtLink :to="switchLocalePath('de')">🇩🇪 Deutsch</NuxtLink></li>
          <li><NuxtLink :to="switchLocalePath('en')">🇬🇧 English</NuxtLink></li>
          <li><NuxtLink :to="switchLocalePath('es')">🇪🇸 Español</NuxtLink></li>
        </ul>
      </div>
      
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
            <font-awesome-icon icon="fa-solid fa-book-open"></font-awesome-icon>
            Blog
          </NuxtLink>
        </li>
      </ul>
    </div>
    
    <div class="navbar-end">
      <NuxtLink v-if="isBlog" :to="localePath('/')" class="btn btn-ghost btn-sm gap-2 hidden sm:inline-flex">
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
