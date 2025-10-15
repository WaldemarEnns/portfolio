<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import *  as yup from 'yup'
const { t } = useI18n({
  useScope: 'local'
})

const localePath = useLocalePath()

const CONTACT_MAIL_ENDPOINT = `/contact-mail`

const schema = toTypedSchema(
  yup.object({
    fromMail: yup.string().email().required(),
    senderName: yup.string().required(),
    message: yup.string().required(),
    privacyPolicyAgreed: yup.string().required()
  })
)

const { defineField, handleSubmit, meta, errors } = useForm({
  validationSchema: schema,
})
const [email, emailAttrs] = defineField('fromMail')
const [name, nameAttrs] = defineField('senderName')
const [message, messageAttrs] = defineField('message')
const [privacyPolicyAgreed, privacyPolicyAgreedAttrs] = defineField('privacyPolicyAgreed')

const contactMailPending = ref(false)
const contactMailError = ref(false)
const contactMailSuccess = ref(false)

// Animation states
const formFocused = ref(false)
const currentField = ref('')

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  contactMailPending.value = true

  const { status } = await useFetch(CONTACT_MAIL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: values,
  })

  if (status.value === 'error') {
    contactMailError.value = true
  } else if (status.value === 'success') {
    contactMailError.value = false
    contactMailSuccess.value = true
    resetForm()
    // Reset success message after 5 seconds
    setTimeout(() => {
      contactMailSuccess.value = false
    }, 5000)
  }

  contactMailPending.value = false
})

const setFocus = (field: string) => {
  formFocused.value = true
  currentField.value = field
}

const removeFocus = () => {
  formFocused.value = false
  currentField.value = ''
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
            {{ $t('contact.title') }}
          </h2>
          <p class="text-xl text-base-content/70">{{ $t('contact.text') }}</p>
        </div>

        <!-- Form Container -->
        <div class="card bg-base-100 shadow-2xl border border-base-300/50 backdrop-blur-sm">
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
                v-if="contactMailError"
                role="alert"
                class="alert alert-error mb-6"
              >
                <font-awesome-icon icon="fa-solid fa-exclamation-triangle"></font-awesome-icon>
                <span>{{ $t('contact.mail.error') }}</span>
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
                v-if="contactMailSuccess"
                role="alert"
                class="alert alert-success mb-6"
              >
                <font-awesome-icon icon="fa-solid fa-check"></font-awesome-icon>
                <span>{{ $t('contact.mail.success') }}</span>
              </div>
            </Transition>

            <!-- Form -->
            <form novalidate @submit.prevent="onSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Name Field -->
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-medium">{{ t('form.labels.name') }}</span>
                  </label>
                  <div class="relative">
                    <input
                      v-model="name"
                      v-bind="nameAttrs"
                      :disabled="contactMailPending"
                      @focus="setFocus('name')"
                      @blur="removeFocus"
                      name="senderName"
                      type="text"
                      :class="[
                        'input input-bordered w-full pl-12 transition-all duration-200',
                        currentField === 'name' ? 'input-primary ring-2 ring-primary/20' : '',
                        errors.senderName ? 'input-error' : ''
                      ]"
                      :placeholder="$t('form.placeholders.name')"
                    />
                    <font-awesome-icon 
                      icon="fa-solid fa-user" 
                      :class="[
                        'absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200',
                        currentField === 'name' ? 'text-primary' : 'text-base-content/40'
                      ]"
                    />
                  </div>
                  <Transition name="slide-fade">
                    <label v-if="errors.senderName" class="label">
                      <span class="label-text-alt text-error">{{ t('form.errors.name_required') }}</span>
                    </label>
                  </Transition>
                </div>

                <!-- Email Field -->
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-medium">{{ t('form.labels.email') }}</span>
                  </label>
                  <div class="relative">
                    <input
                      v-model="email"
                      v-bind="emailAttrs"
                      :disabled="contactMailPending"
                      @focus="setFocus('email')"
                      @blur="removeFocus"
                      name="fromMail"
                      type="email"
                      :class="[
                        'input input-bordered w-full pl-12 transition-all duration-200',
                        currentField === 'email' ? 'input-primary ring-2 ring-primary/20' : '',
                        errors.fromMail ? 'input-error' : ''
                      ]"
                      :placeholder="$t('form.placeholders.email')"
                    />
                    <font-awesome-icon 
                      icon="fa-solid fa-envelope" 
                      :class="[
                        'absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200',
                        currentField === 'email' ? 'text-primary' : 'text-base-content/40'
                      ]"
                    />
                  </div>
                  <Transition name="slide-fade">
                    <label v-if="errors.fromMail" class="label">
                      <span class="label-text-alt text-error">{{ t('form.errors.email_invalid') }}</span>
                    </label>
                  </Transition>
                </div>
              </div>

              <!-- Message Field -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-medium">{{ t('form.labels.message') }}</span>
                </label>
                <div class="relative">
                  <textarea
                    v-model="message"
                    v-bind="messageAttrs"
                    :disabled="contactMailPending"
                    @focus="setFocus('message')"
                    @blur="removeFocus"
                    :placeholder="$t('form.placeholders.contact_message')"
                    :class="[
                      'textarea textarea-bordered w-full min-h-[120px] transition-all duration-200',
                      currentField === 'message' ? 'textarea-primary ring-2 ring-primary/20' : '',
                      errors.message ? 'textarea-error' : ''
                    ]"
                    rows="5"
                    name="message"
                  ></textarea>
                  <font-awesome-icon 
                    icon="fa-solid fa-message" 
                    :class="[
                      'absolute left-4 top-4 transition-colors duration-200',
                      currentField === 'message' ? 'text-primary' : 'text-base-content/40'
                    ]"
                  />
                </div>
                <Transition name="slide-fade">
                  <label v-if="errors.message" class="label">
                    <span class="label-text-alt text-error">{{ t('form.errors.message_required') }}</span>
                  </label>
                </Transition>
              </div>

              <!-- Privacy Policy -->
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-3 p-4 rounded-lg hover:bg-base-200/50 transition-colors duration-200">
                  <input
                    v-model="privacyPolicyAgreed"
                    v-bind="privacyPolicyAgreedAttrs"
                    :disabled="contactMailPending"
                    required
                    name="privacyPolicyAgreed"
                    type="checkbox"
                    class="checkbox checkbox-primary"
                  />
                  <span class="label-text">
                    {{t('i_agree')}} <NuxtLink class="link link-primary font-medium" :to="localePath('privacy-policy')">{{ $t('meta.titles.privacy') }}</NuxtLink> {{ t('data_processing') }}
                  </span>
                </label>
              </div>

              <!-- Turnstile -->
              <NuxtTurnstile />

              <!-- Submit Button -->
              <div class="flex justify-center pt-4">
                <button
                  :class="[
                    'btn btn-primary btn-lg group relative overflow-hidden transition-all duration-300',
                    !meta.valid || contactMailPending ? 'btn-disabled' : 'hover:shadow-lg hover:shadow-primary/25 hover:scale-105'
                  ]"
                  :disabled="!meta.valid || contactMailPending"
                  type="submit"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    <span v-if="contactMailPending" class="loading loading-spinner loading-sm"></span>
                    <span v-else>{{ $t('cta.send_message') }}</span>
                    <font-awesome-icon 
                      v-if="!contactMailPending" 
                      icon="fa-solid fa-paper-plane" 
                      class="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
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

<i18n lang="json">
  {
    "de": {
      "i_agree": "Ich stimme zu, dass meine Daten gemäß der",
      "data_processing": "für die Kontaktaufnahme gespeichert und verarbeitet werden.",
      "other_ways_to_connect": "Oder verbinde dich über soziale Medien",
      "form": {
        "labels": {
          "name": "Dein Name",
          "email": "Deine E-Mail",
          "message": "Deine Nachricht"
        },
        "errors": {
          "name_required": "Bitte gib deinen Namen ein",
          "email_invalid": "Bitte gib eine gültige E-Mail-Adresse ein",
          "message_required": "Bitte schreibe eine Nachricht"
        }
      }
    },
    "en": {
      "i_agree": "I agree that my data will be stored and processed according to the",
      "data_processing": "for contacting purposes.",
      "other_ways_to_connect": "Or connect via social media",
      "form": {
        "labels": {
          "name": "Your Name",
          "email": "Your Email",
          "message": "Your Message"
        },
        "errors": {
          "name_required": "Please enter your name",
          "email_invalid": "Please enter a valid email address",
          "message_required": "Please write a message"
        }
      }
    },
    "es": {
      "i_agree": "Acepto que mis datos se almacenen y procesen según la",
      "data_processing": "para fines de contacto.",
      "other_ways_to_connect": "O conéctate a través de redes sociales",
      "form": {
        "labels": {
          "name": "Tu Nombre",
          "email": "Tu Correo",
          "message": "Tu Mensaje"
        },
        "errors": {
          "name_required": "Por favor ingresa tu nombre",
          "email_invalid": "Por favor ingresa un correo válido",
          "message_required": "Por favor escribe un mensaje"
        }
      }
    }
  }
</i18n>