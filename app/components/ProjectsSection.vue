<script setup lang="ts">
const { t } = useI18n()
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)
</script>

<template>
  <section id="projects" class="container m-auto py-16 px-4">
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{{ t('home.projects.title') }}</h2>
      <p class="text-xl text-base-content/70 max-w-2xl mx-auto">{{ t('home.projects.subtitle') }}</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div class="card-body">
          <h3 class="card-title text-lg mb-2">{{ project.title }}</h3>
          <p class="text-base-content/70 text-sm mb-4 flex-1">{{ project.description }}</p>

          <div class="mb-4">
            <p class="text-xs text-base-content/50 uppercase tracking-wide mb-2">{{ t('home.projects.built_with') }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="badge badge-outline badge-sm"
              >{{ tag }}</span>
            </div>
          </div>

          <div v-if="project.url" class="card-actions">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm btn-outline w-full"
            >
              {{ t('home.projects.view_project') }}
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="ml-1"></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
