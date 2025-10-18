<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const selectedCategory = ref<string | null>(null)

interface SkillCard {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
  color: string
  tags: string[]
  projects: { labelKey: string; descKey: string }[]
}

const skills: SkillCard[] = [
  {
    id: 'vue-migrations',
    titleKey: 'career.skills.vue_migrations.title',
    descriptionKey: 'career.skills.vue_migrations.description',
    icon: 'fa-brands fa-vuejs',
    color: 'bg-primary',
    tags: ['Vue 2', 'Vue 3', 'Composition API', 'Pinia'],
    projects: [
      { 
        labelKey: 'career.skills.vue_migrations.project_1_label',
        descKey: 'career.skills.vue_migrations.project_1_desc'
      },
      { 
        labelKey: 'career.skills.vue_migrations.project_2_label',
        descKey: 'career.skills.vue_migrations.project_2_desc'
      }
    ]
  },
  {
    id: 'keycloak',
    titleKey: 'career.skills.keycloak.title',
    descriptionKey: 'career.skills.keycloak.description',
    icon: 'fa-solid fa-shield-halved',
    color: 'bg-secondary',
    tags: ['Keycloak', 'SSO', 'OAuth2', 'Custom Themes'],
    projects: [
      { 
        labelKey: 'career.skills.keycloak.project_1_label',
        descKey: 'career.skills.keycloak.project_1_desc'
      },
      { 
        labelKey: 'career.skills.keycloak.project_2_label',
        descKey: 'career.skills.keycloak.project_2_desc'
      }
    ]
  },
  {
    id: 'laravel',
    titleKey: 'career.skills.laravel.title',
    descriptionKey: 'career.skills.laravel.description',
    icon: 'fa-brands fa-laravel',
    color: 'bg-accent',
    tags: ['Laravel', 'REST APIs', 'Queue Jobs', 'Event Sourcing'],
    projects: [
      { 
        labelKey: 'career.skills.laravel.project_1_label',
        descKey: 'career.skills.laravel.project_1_desc'
      },
      { 
        labelKey: 'career.skills.laravel.project_2_label',
        descKey: 'career.skills.laravel.project_2_desc'
      }
    ]
  },
  {
    id: 'golang',
    titleKey: 'career.skills.golang.title',
    descriptionKey: 'career.skills.golang.description',
    icon: 'fa-solid fa-code',
    color: 'bg-primary',
    tags: ['Go', 'Microservices', 'gRPC', 'High Performance'],
    projects: [
      { 
        labelKey: 'career.skills.golang.project_1_label',
        descKey: 'career.skills.golang.project_1_desc'
      },
      { 
        labelKey: 'career.skills.golang.project_2_label',
        descKey: 'career.skills.golang.project_2_desc'
      }
    ]
  },
  {
    id: 'python',
    titleKey: 'career.skills.python.title',
    descriptionKey: 'career.skills.python.description',
    icon: 'fa-brands fa-python',
    color: 'bg-secondary',
    tags: ['Python', 'FastAPI', 'Data Processing', 'Automation'],
    projects: [
      { 
        labelKey: 'career.skills.python.project_1_label',
        descKey: 'career.skills.python.project_1_desc'
      },
      { 
        labelKey: 'career.skills.python.project_2_label',
        descKey: 'career.skills.python.project_2_desc'
      }
    ]
  },
  {
    id: 'nestjs',
    titleKey: 'career.skills.nestjs.title',
    descriptionKey: 'career.skills.nestjs.description',
    icon: 'fa-solid fa-server',
    color: 'bg-accent',
    tags: ['NestJS', 'TypeScript', 'GraphQL', 'Microservices'],
    projects: [
      { 
        labelKey: 'career.skills.nestjs.project_1_label',
        descKey: 'career.skills.nestjs.project_1_desc'
      },
      { 
        labelKey: 'career.skills.nestjs.project_2_label',
        descKey: 'career.skills.nestjs.project_2_desc'
      }
    ]
  }
]

interface TimelineItem {
  id: string
  type: 'job' | 'education' | 'freelance'
  titleKey: string
  periodKey: string
  descriptionKey: string
  icon: string
  color: string
}

const timeline: TimelineItem[] = [
  {
    id: 'job-1',
    type: 'job',
    titleKey: 'career.timeline.current_job.title',
    periodKey: 'career.timeline.current_job.period',
    descriptionKey: 'career.timeline.current_job.description',
    icon: 'fa-solid fa-briefcase',
    color: 'primary'
  },
  {
    id: 'freelance-1',
    type: 'freelance',
    titleKey: 'career.timeline.freelance.title',
    periodKey: 'career.timeline.freelance.period',
    descriptionKey: 'career.timeline.freelance.description',
    icon: 'fa-solid fa-rocket',
    color: 'secondary'
  },
  {
    id: 'education-1',
    type: 'education',
    titleKey: 'career.timeline.education.title',
    periodKey: 'career.timeline.education.period',
    descriptionKey: 'career.timeline.education.description',
    icon: 'fa-solid fa-graduation-cap',
    color: 'accent'
  }
]

function toggleCategory(categoryId: string) {
  if (selectedCategory.value === categoryId) {
    selectedCategory.value = null
  } else {
    selectedCategory.value = categoryId
  }
}
</script>

<template>
  <section id="career-skills" class="py-20 bg-base-100">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-base-content">
          {{ t('career.title') }}
        </h2>
        <p class="text-xl text-base-content max-w-3xl mx-auto opacity-90">
          {{ t('career.subtitle') }}
        </p>
      </div>

      <!-- Career Timeline -->
      <div class="mb-20">
        <h3 class="text-3xl font-bold text-center mb-12 text-base-content">
          {{ t('career.timeline_title') }}
        </h3>
        
        <div class="relative max-w-5xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block"></div>
          
          <!-- Timeline Items -->
          <div class="space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.id"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
              class="relative"
            >
              <div 
                class="flex flex-col md:flex-row gap-8 items-center"
                :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
              >
                <!-- Content Card -->
                <div class="flex-1 w-full">
                  <div 
                    class="card bg-base-200 shadow-xl hover-card-special border-2 transition-all duration-300"
                    :class="{
                      'border-primary/30 hover:border-primary': item.color === 'primary',
                      'border-secondary/30 hover:border-secondary': item.color === 'secondary',
                      'border-accent/30 hover:border-accent': item.color === 'accent'
                    }"
                  >
                    <div class="card-body">
                      <div class="flex items-start gap-4">
                        <div 
                          class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                          :class="{
                            'bg-primary text-primary-content': item.color === 'primary',
                            'bg-secondary text-secondary-content': item.color === 'secondary',
                            'bg-accent text-accent-content': item.color === 'accent'
                          }"
                        >
                          <font-awesome-icon :icon="item.icon" class="text-xl" />
                        </div>
                        <div class="flex-1">
                          <h4 class="card-title text-2xl mb-2 text-base-content">
                            {{ t(item.titleKey) }}
                          </h4>
                          <div 
                            class="badge mb-3"
                            :class="{
                              'badge-primary': item.color === 'primary',
                              'badge-secondary': item.color === 'secondary',
                              'badge-accent': item.color === 'accent'
                            }"
                          >
                            {{ t(item.periodKey) }}
                          </div>
                          <p class="text-base-content opacity-90">
                            {{ t(item.descriptionKey) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Timeline Dot -->
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div 
                    class="w-6 h-6 rounded-full border-4 border-base-100 z-10"
                    :class="{
                      'bg-primary': item.color === 'primary',
                      'bg-secondary': item.color === 'secondary',
                      'bg-accent': item.color === 'accent'
                    }"
                  ></div>
                </div>

                <!-- Spacer for the other side -->
                <div class="flex-1 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mb-12">
        <h3 class="text-3xl font-bold text-center mb-4 text-base-content">
          {{ t('career.skills_title') }}
        </h3>
        <p class="text-center text-base-content mb-12 max-w-2xl mx-auto opacity-90">
          {{ t('career.skills_subtitle') }}
        </p>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div
            v-for="(skill, index) in skills"
            :key="skill.id"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { delay: index * 100 } }"
            class="skill-card-wrapper"
          >
            <div 
              class="card bg-base-200 shadow-xl hover-card h-full cursor-pointer transition-all duration-300 border-2"
              :class="selectedCategory === skill.id ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-base-100' : 'border-base-300 hover:border-primary/50'"
              @click="toggleCategory(skill.id)"
            >
              <div class="card-body">
                <!-- Icon and Title -->
                <div class="flex items-center gap-4 mb-4">
                  <div 
                    class="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                    :class="{
                      'bg-primary text-primary-content': skill.color === 'bg-primary',
                      'bg-secondary text-secondary-content': skill.color === 'bg-secondary',
                      'bg-accent text-accent-content': skill.color === 'bg-accent'
                    }"
                  >
                    <font-awesome-icon :icon="skill.icon" class="text-2xl" />
                  </div>
                  <h4 class="card-title text-xl flex-1 text-base-content">
                    {{ t(skill.titleKey) }}
                  </h4>
                </div>

                <!-- Description -->
                <p class="text-base-content mb-4 opacity-90">
                  {{ t(skill.descriptionKey) }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <div 
                    v-for="tag in skill.tags" 
                    :key="tag"
                    class="badge badge-sm badge-outline badge-primary"
                  >
                    {{ tag }}
                  </div>
                </div>

                <!-- Expandable Projects Section -->
                <transition
                  enter-active-class="transition-all duration-300 ease-out"
                  leave-active-class="transition-all duration-200 ease-in"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-96"
                  leave-from-class="opacity-100 max-h-96"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-if="selectedCategory === skill.id" class="border-t border-primary/30 pt-4 overflow-hidden">
                    <h5 class="font-bold mb-3 flex items-center gap-2 text-base-content">
                      <font-awesome-icon icon="fa-solid fa-check-circle" class="text-success" />
                      {{ t('career.projects_delivered') }}
                    </h5>
                    <ul class="space-y-3">
                      <li 
                        v-for="(project, idx) in skill.projects" 
                        :key="idx"
                        class="bg-base-300 rounded-lg p-3 border border-base-content/10"
                      >
                        <div class="font-semibold text-sm mb-1 text-base-content">
                          {{ t(project.labelKey) }}
                        </div>
                        <div class="text-xs text-base-content opacity-80">
                          {{ t(project.descKey) }}
                        </div>
                      </li>
                    </ul>
                  </div>
                </transition>

                <!-- Click Indicator -->
                <div class="text-center mt-4 text-sm text-base-content opacity-70">
                  <font-awesome-icon 
                    :icon="selectedCategory === skill.id ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" 
                    class="animate-bounce"
                  />
                  {{ selectedCategory === skill.id ? t('career.click_to_hide') : t('career.click_to_see_projects') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 600 } }"
        class="text-center mt-16"
      >
        <div class="card bg-base-200 border-2 border-primary shadow-2xl max-w-3xl mx-auto hover-card-special">
          <div class="card-body">
            <h3 class="text-2xl font-bold mb-4 text-base-content">
              {{ t('career.cta_title') }}
            </h3>
            <p class="text-base-content mb-6 opacity-90">
              {{ t('career.cta_description') }}
            </p>
            <div class="card-actions justify-center">
              <button
                class="btn btn-primary"
                @click="() => document.querySelector('#contact')!.scrollIntoView({ behavior: 'smooth' })"
              >
                {{ t('cta.get_in_touch') }}
                <font-awesome-icon icon="fa-solid fa-envelope" class="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card-wrapper {
  perspective: 1000px;
}

/* Enhanced hover effect for skill cards */
.hover-card {
  transform-style: preserve-3d;
  transition: all 0.3s ease-in-out;
}

.hover-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Smooth transitions for expandable content */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}
</style>
