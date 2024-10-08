<script setup lang="ts">
import type { PostBySlug } from '@/types/strapi'
import { StrapiBlocks } from 'vue-strapi-blocks-renderer'

definePageMeta({
  layout: 'post',
})

const { locales } = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const robotsRule = useRobotsRule(true)

const client = useStrapiClient()

const { currentRoute } = useRouter()

const { locale } = useI18n()

const slug = computed(() => currentRoute.value.params.slug as string)

const { data } = await useAsyncData(
  'post',
  () => client<PostBySlug>(
    `/posts/bySlug/${slug.value}`,
    {
      query: {
        locale: locale.value
      }
    }
  ),
)

useSeoMeta({
  title: `${data?.value?.data?.attributes?.meta_title} | waldemar enns software solutions`,
})

const content = computed(() => data.value?.data?.attributes?.Content)
const title = computed(() => data.value?.data?.attributes?.Title)

const publicationDate = computed(() => {
  if (data.value?.data?.attributes?.publishedAt) {
    return new Date(data.value?.data?.attributes.publishedAt).toLocaleDateString()
  } else {
    return null
  }
})

const updatedAt = computed(() => new Date(data.value?.data?.attributes?.updatedAt!).toLocaleDateString())

function switchTranslation (locale: string) {
  const localeSlug = data.value?.data?.attributes?.localeSlugs[locale]
  return localePath(`/posts/${localeSlug}`, locale)
}
</script>

<template>
  <article class="container prose my-12 mx-auto">
    <i v-if="publicationDate">Veröffentlicht am {{ publicationDate }}</i>
    <i v-else>Zuletzt bearbeitet am {{ updatedAt }}</i>
    <h1 class="block mt-4">{{ title }}</h1>
    <div class="my-4 flex flex-row justify-start items-center">
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        class="first:ml-0 mx-2 btn btn-sm btn-info btn-outline"
        :to="switchTranslation(locale.code)"
      >{{ locale.flag }} {{ locale.name }}</NuxtLink>
    </div>
    <StrapiBlocks
      v-if="content"
      :content="content"
    />
  </article>
</template>