<script setup lang="ts">
const { t } = useI18n()

const localePath = useLocalePath()
const isOpen = ref(false)

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
  resetStatus,
  formFocused,
  currentField,
  setFocus,
  removeFocus,
} = useContactMail()

const turnstileToken = ref('')

const openDialog = () => {
  isOpen.value = true
  resetStatus()
}

const closeDialog = () => {
  isOpen.value = false
}

const onSubmit = async () => {
  await submit(turnstileToken.value)
  
  if (isSuccess.value) {
    // Reset form after successful submission
    setTimeout(() => {
      reset()
      isOpen.value = false
    }, 3000)
  }
}
</script>

<template>
  <div>
    <!-- Trigger Button -->
    <button
      @click="openDialog"
      class="btn btn-primary btn-lg group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
    >
      <span class="relative z-10 flex items-center gap-2">
        <span>{{ t('cta.get_in_touch') }}</span>
        <font-awesome-icon
          icon="fa-solid fa-paper-plane"
          class="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
      <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>

    <!-- Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[100]"
          @click.self="closeDialog"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <div class="relative h-full flex items-center justify-center p-4">
            <Transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 scale-95 translate-y-4"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 translate-y-4"
            >
              <div
                v-if="isOpen"
                class="card bg-base-100 shadow-2xl border border-base-content/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              >
                <div class="card-body p-6 md:p-8">
                  <!-- Header -->
                  <div class="flex items-center justify-between mb-6">
                    <div>
                      <h2 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        {{ t('contact.title') }}
                      </h2>
                      <p class="text-base-content/70 mt-1">{{ t('contact.text') }}</p>
                    </div>
                    <button
                      @click="closeDialog"
                      class="btn btn-circle btn-ghost btn-sm"
                      aria-label="Close dialog"
                    >
                      <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl" />
                    </button>
                  </div>

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
                      class="alert alert-error mb-4"
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
                      class="alert alert-success mb-4"
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
                    size="compact"
                    @submit="onSubmit"
                    @focus="setFocus"
                    @blur="removeFocus"
                  >
                    <template #actions="{ isPending: pending, isValid: valid }">
                      <button
                        @click="closeDialog"
                        type="button"
                        class="btn btn-ghost"
                      >
                        {{ t('common.cancel') }}
                      </button>
                      <button
                        :class="[
                          'btn btn-primary group relative overflow-hidden transition-all duration-300',
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

                  <!-- Social Links -->
                  <div class="mt-6 pt-4 border-t border-base-content/10 text-center">
                    <p class="text-sm text-base-content/60 mb-3">{{ t('other_ways_to_connect') }}</p>
                    <div class="flex justify-center gap-3">
                      <a
                        href="https://github.com/WaldemarEnns"
                        target="_blank"
                        class="btn btn-circle btn-ghost btn-sm hover:btn-primary transition-colors duration-200"
                        aria-label="GitHub"
                      >
                        <font-awesome-icon icon="fa-brands fa-github" class="text-lg" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/waldemar-enns-09b73b168/"
                        target="_blank"
                        class="btn btn-circle btn-ghost btn-sm hover:btn-primary transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="text-lg" />
                      </a>
                      <a
                        href="mailto:kontakt@waldemarenns.de"
                        class="btn btn-circle btn-ghost btn-sm hover:btn-primary transition-colors duration-200"
                        aria-label="Email"
                      >
                        <font-awesome-icon icon="fa-solid fa-envelope" class="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>


