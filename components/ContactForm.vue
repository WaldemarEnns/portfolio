<script setup lang="ts">
const { t } = useI18n()

const localePath = useLocalePath()

interface Props {
  // Form values
  email?: string
  name?: string
  message?: string
  privacyPolicyAgreed?: boolean
  
  // Form state
  isPending: boolean
  isError: boolean
  isSuccess: boolean
  errors: Partial<Record<string, string | undefined>>
  isValid: boolean
  
  // UI state
  formFocused: boolean
  currentField: string
  
  // Size variant
  size?: 'default' | 'compact'
}

const props = withDefaults(defineProps<Props>(), {
  email: '',
  name: '',
  message: '',
  privacyPolicyAgreed: false,
  size: 'default'
})

const emit = defineEmits<{
  'update:email': [value: string]
  'update:name': [value: string]
  'update:message': [value: string]
  'update:privacyPolicyAgreed': [value: boolean]
  'submit': []
  'focus': [field: string]
  'blur': []
}>()

const turnstileToken = ref('')

const onSubmit = () => {
  emit('submit')
}

const setFocus = (field: string) => {
  emit('focus', field)
}

const removeFocus = () => {
  emit('blur')
}

const inputClass = (field: string, hasError?: boolean) => {
  const baseClasses = props.size === 'compact'
    ? 'input input-bordered w-full pl-10 transition-all duration-200'
    : 'input input-bordered w-full pl-12 transition-all duration-200'
  
  const focusedClass = props.currentField === field ? 'input-primary ring-2 ring-primary/20' : ''
  const errorClass = hasError ? 'input-error' : ''
  
  return [baseClasses, focusedClass, errorClass].filter(Boolean).join(' ')
}

const textareaClass = (hasError?: boolean) => {
  const baseClasses = props.size === 'compact'
    ? 'textarea textarea-bordered w-full min-h-[100px] transition-all duration-200'
    : 'textarea textarea-bordered w-full min-h-[120px] transition-all duration-200'
  
  const focusedClass = props.currentField === 'message' ? 'textarea-primary ring-2 ring-primary/20' : ''
  const errorClass = hasError ? 'textarea-error' : ''
  
  return [baseClasses, focusedClass, errorClass].filter(Boolean).join(' ')
}

const iconClass = (field: string) => {
  const baseClasses = props.size === 'compact'
    ? 'absolute left-3 transition-colors duration-200'
    : 'absolute left-4 transition-colors duration-200'
  
  const colorClass = props.currentField === field ? 'text-primary' : 'text-base-content/40'
  
  return [baseClasses, colorClass].filter(Boolean).join(' ')
}
</script>

<template>
  <form novalidate @submit.prevent="onSubmit" :class="size === 'compact' ? 'space-y-4' : 'space-y-6'">
    <div :class="size === 'compact' ? 'grid md:grid-cols-2 gap-4' : 'grid md:grid-cols-2 gap-6'">
      <!-- Name Field -->
      <div class="form-control">
        <label :class="size === 'compact' ? 'label py-1' : 'label'">
          <span class="label-text font-medium">{{ t('form.labels.name') }}</span>
        </label>
        <div class="relative">
          <input
            :value="name"
            @input="$emit('update:name', ($event.target as HTMLInputElement).value)"
            :disabled="isPending"
            @focus="setFocus('name')"
            @blur="removeFocus"
            name="senderName"
            type="text"
            :class="inputClass('name', !!errors.senderName)"
            :placeholder="t('form.placeholders.name')"
          />
          <font-awesome-icon
            icon="fa-solid fa-user"
            :class="[iconClass('name'), size === 'compact' ? 'top-1/2 -translate-y-1/2' : 'top-1/2 -translate-y-1/2']"
          />
        </div>
        <Transition name="slide-fade">
          <label v-if="errors.senderName" :class="size === 'compact' ? 'label py-0' : 'label'">
            <span class="label-text-alt text-error">{{ t('form.errors.name_required') }}</span>
          </label>
        </Transition>
      </div>

      <!-- Email Field -->
      <div class="form-control">
        <label :class="size === 'compact' ? 'label py-1' : 'label'">
          <span class="label-text font-medium">{{ t('form.labels.email') }}</span>
        </label>
        <div class="relative">
          <input
            :value="email"
            @input="$emit('update:email', ($event.target as HTMLInputElement).value)"
            :disabled="isPending"
            @focus="setFocus('email')"
            @blur="removeFocus"
            name="fromMail"
            type="email"
            :class="inputClass('email', !!errors.fromMail)"
            :placeholder="t('form.placeholders.email')"
          />
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            :class="[iconClass('email'), size === 'compact' ? 'top-1/2 -translate-y-1/2' : 'top-1/2 -translate-y-1/2']"
          />
        </div>
        <Transition name="slide-fade">
          <label v-if="errors.fromMail" :class="size === 'compact' ? 'label py-0' : 'label'">
            <span class="label-text-alt text-error">{{ t('form.errors.email_invalid') }}</span>
          </label>
        </Transition>
      </div>
    </div>

    <!-- Message Field -->
    <div class="form-control">
      <label :class="size === 'compact' ? 'label py-1' : 'label'">
        <span class="label-text font-medium">{{ t('form.labels.message') }}</span>
      </label>
      <div class="relative">
        <textarea
          :value="message"
          @input="$emit('update:message', ($event.target as HTMLTextAreaElement).value)"
          :disabled="isPending"
          @focus="setFocus('message')"
          @blur="removeFocus"
          :placeholder="t('form.placeholders.contact_message')"
          :class="textareaClass(!!errors.message)"
          :rows="size === 'compact' ? 4 : 5"
          name="message"
        ></textarea>
        <font-awesome-icon
          icon="fa-solid fa-message"
          :class="[iconClass('message'), size === 'compact' ? 'top-3' : 'top-4']"
        />
      </div>
      <Transition name="slide-fade">
        <label v-if="errors.message" :class="size === 'compact' ? 'label py-0' : 'label'">
          <span class="label-text-alt text-error">{{ t('form.errors.message_required') }}</span>
        </label>
      </Transition>
    </div>

    <!-- Privacy Policy -->
    <div class="form-control">
      <label 
        :class="size === 'compact' 
          ? 'label cursor-pointer justify-start gap-2 p-3 rounded-lg hover:bg-base-200/50 transition-colors duration-200' 
          : 'label cursor-pointer justify-start gap-3 p-4 rounded-lg hover:bg-base-200/50 transition-colors duration-200'"
      >
        <input
          :checked="privacyPolicyAgreed"
          @change="$emit('update:privacyPolicyAgreed', ($event.target as HTMLInputElement).checked)"
          :disabled="isPending"
          required
          name="privacyPolicyAgreed"
          type="checkbox"
          :class="size === 'compact' ? 'checkbox checkbox-primary checkbox-sm' : 'checkbox checkbox-primary'"
        />
        <span :class="size === 'compact' ? 'label-text text-sm' : 'label-text'">
          {{ t('i_agree') }} <NuxtLink class="link link-primary font-medium" :to="localePath('privacy-policy')">{{ t('meta.titles.privacy') }}</NuxtLink> {{ t('data_processing') }}
        </span>
      </label>
    </div>

    <!-- Turnstile -->
    <NuxtTurnstile v-model="turnstileToken" />

    <!-- Submit Button -->
    <div :class="size === 'compact' ? 'flex justify-end gap-3 pt-2' : 'flex justify-center pt-4'">
      <slot name="actions" :is-pending="isPending" :is-valid="isValid" :turnstile-token="turnstileToken">
        <button
          :class="[
            'btn btn-primary group relative overflow-hidden transition-all duration-300',
            !isValid || isPending ? 'btn-disabled' : 'hover:shadow-lg hover:shadow-primary/25 hover:scale-105',
            size === 'compact' ? '' : 'btn-lg'
          ]"
          :disabled="!isValid || isPending"
          type="submit"
        >
          <span class="relative z-10 flex items-center gap-2">
            <span v-if="isPending" class="loading loading-spinner" :class="size === 'compact' ? 'loading-sm' : ''"></span>
            <span v-else>{{ t('cta.send_message') }}</span>
            <font-awesome-icon
              v-if="!isPending"
              icon="fa-solid fa-paper-plane"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </slot>
    </div>
  </form>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
