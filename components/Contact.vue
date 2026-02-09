<script setup lang="ts">
const { t } = useI18n()

const turnstileToken = ref('')

const {
  email,
  name,
  message,
  privacyPolicyAgreed,
  errors,
  isValid,
  isPending,
  isError,
  isSuccess,
  submit,
  reset,
  formFocused,
  currentField,
  setFocus,
  removeFocus,
} = useContactMail()

const onSubmit = async () => {
  await submit(turnstileToken.value)
  
  if (isSuccess.value) {
    // Reset success message after 5 seconds
    setTimeout(() => {
      reset()
    }, 5000)
  }
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden py-20">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    
    <div class="container relative z-10 mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {{ t('contact.title') }}
          </h2>
          <p class="text-xl text-base-content/70">{{ t('contact.text') }}</p>
        </div>

        <!-- Form Container -->
        <div class="card bg-base-100 shadow-2xl border border-base-content/10 backdrop-blur-sm">
          <div class="card-body p-8 md:p-12">
            <!-- Success/Error Messages -->
            <Transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-if="isError"
                role="alert"
                class="alert alert-error mb-6"
              >
                <font-awesome-icon icon="fa-solid fa-exclamation-triangle"></font-awesome-icon>
                <span>{{ t('contact.mail.error') }}</span>
              </div>
            </Transition>
            
            <Transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div
                v-if="isSuccess"
                role="alert"
                class="alert alert-success mb-6"
              >
                <font-awesome-icon icon="fa-solid fa-check"></font-awesome-icon>
                <span>{{ t('contact.mail.success') }}</span>
              </div>
            </Transition>

            <!-- Form -->
            <ContactForm
              v-model:email="email"
              v-model:name="name"
              v-model:message="message"
              v-model:privacy-policy-agreed="privacyPolicyAgreed"
              :is-pending="isPending"
              :is-error="isError"
              :is-success="isSuccess"
              :errors="errors"
              :is-valid="isValid"
              :form-focused="formFocused"
              :current-field="currentField"
              size="default"
              @submit="onSubmit"
              @focus="setFocus"
              @blur="removeFocus"
            >
              <template #actions="{ isPending: pending, isValid: valid }">
                <button
                  :class="[
                    'btn btn-primary btn-lg group relative overflow-hidden transition-all duration-300',
                    !valid || pending ? 'btn-disabled' : 'hover:shadow-lg hover:shadow-primary/25 hover:scale-105'
                  ]"
                  :disabled="!valid || pending"
                  type="submit"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    <span v-if="pending" class="loading loading-spinner loading-sm"></span>
                    <span v-else>{{ t('cta.send_message') }}</span>
                    <font-awesome-icon 
                      v-if="!pending" 
                      icon="fa-solid fa-paper-plane" 
                      class="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </template>
            </ContactForm>
          </div>
        </div>

        <!-- Additional Contact Options -->
        <div class="mt-12 text-center">
          <p class="text-base-content/60 mb-4">{{ t('other_ways_to_connect') }}</p>
          <div class="flex justify-center gap-4">
            <a 
              href="https://github.com/WaldemarEnns" 
              target="_blank" 
              class="btn btn-circle btn-ghost hover:btn-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <font-awesome-icon icon="fa-brands fa-github" class="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/waldemar-enns-09b73b168/" 
              target="_blank" 
              class="btn btn-circle btn-ghost hover:btn-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <font-awesome-icon icon="fa-brands fa-linkedin" class="text-xl" />
            </a>
            <a 
              href="mailto:kontakt@waldemarenns.de" 
              class="btn btn-circle btn-ghost hover:btn-primary transition-colors duration-200"
              aria-label="Email"
            >
              <font-awesome-icon icon="fa-solid fa-envelope" class="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
