import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

export interface ContactFormValues {
  fromMail: string
  senderName: string
  message: string
  privacyPolicyAgreed: boolean
}

export interface UseContactMailReturn {
  // Form values
  email: Ref<string | undefined>
  name: Ref<string | undefined>
  message: Ref<string | undefined>
  privacyPolicyAgreed: Ref<boolean | undefined>
  emailAttrs: Ref<Record<string, unknown>>
  nameAttrs: Ref<Record<string, unknown>>
  messageAttrs: Ref<Record<string, unknown>>
  privacyPolicyAgreedAttrs: Ref<Record<string, unknown>>
  
  // Form state
  errors: ComputedRef<Partial<Record<string, string | undefined>>>
  meta: ComputedRef<{ valid: boolean }>
  isValid: ComputedRef<boolean>
  
  // Submission state
  isPending: Ref<boolean>
  isError: Ref<boolean>
  isSuccess: Ref<boolean>
  
  // Actions
  submit: (turnstileToken: string) => Promise<void>
  reset: () => void
  resetStatus: () => void
  
  // Focus state
  formFocused: Ref<boolean>
  currentField: Ref<string>
  setFocus: (field: string) => void
  removeFocus: () => void
}

export function useContactMail(): UseContactMailReturn {
  const { t } = useI18n({
    useScope: 'local'
  })
  
  const CONTACT_MAIL_ENDPOINT = '/contact-mail'

  const schema = toTypedSchema(
    yup.object({
      fromMail: yup.string().email().required(),
      senderName: yup.string().required(),
      message: yup.string().required(),
      privacyPolicyAgreed: yup.boolean().required().isTrue()
    })
  )

  const { defineField, handleSubmit, meta, errors, resetForm } = useForm({
    validationSchema: schema,
  })
  
  const [email, emailAttrs] = defineField('fromMail')
  const [name, nameAttrs] = defineField('senderName')
  const [message, messageAttrs] = defineField('message')
  const [privacyPolicyAgreed, privacyPolicyAgreedAttrs] = defineField('privacyPolicyAgreed')

  const isPending = ref(false)
  const isError = ref(false)
  const isSuccess = ref(false)

  // Focus state for UI animations
  const formFocused = ref(false)
  const currentField = ref('')

  const setFocus = (field: string) => {
    formFocused.value = true
    currentField.value = field
  }

  const removeFocus = () => {
    formFocused.value = false
    currentField.value = ''
  }

  const submit = async (turnstileToken: string) => {
    await handleSubmit(async (values) => {
      isPending.value = true
      isError.value = false
      isSuccess.value = false

      try {
        const { status } = await useFetch(CONTACT_MAIL_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            fromMail: values.fromMail,
            senderName: values.senderName,
            message: values.message,
            privacyPolicyAgreed: values.privacyPolicyAgreed,
            'cf-turnstile-response': turnstileToken,
          },
        })

        if (status.value === 'error') {
          isError.value = true
        } else if (status.value === 'success') {
          isError.value = false
          isSuccess.value = true
        }
      } catch {
        isError.value = true
      } finally {
        isPending.value = false
      }
    })()
  }

  const reset = () => {
    resetForm()
    isError.value = false
    isSuccess.value = false
  }

  const resetStatus = () => {
    isError.value = false
    isSuccess.value = false
  }

  const isValid = computed(() => meta.value.valid)

  return {
    // Form values
    email,
    name,
    message,
    privacyPolicyAgreed,
    emailAttrs,
    nameAttrs,
    messageAttrs,
    privacyPolicyAgreedAttrs,
    
    // Form state
    errors,
    meta,
    isValid,
    
    // Submission state
    isPending,
    isError,
    isSuccess,
    
    // Actions
    submit,
    reset,
    resetStatus,
    
    // Focus state
    formFocused,
    currentField,
    setFocus,
    removeFocus,
  }
}
