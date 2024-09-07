<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import *  as yup from 'yup'

const localePath = useLocalePath()

const schema = toTypedSchema(
  yup.object({
    fromMail: yup.string().email().required(),
    senderName: yup.string().required(),
    message: yup.string().required(),
    privacyPolicyAgreed: yup.string().required()
  })
)

const { defineField, handleSubmit, meta } = useForm({
  validationSchema: schema,
})
const [email, emailAttrs] = defineField('fromMail')
const [name, nameAttrs] = defineField('senderName')
const [message, messageAttrs] = defineField('message')
const [privacyPolicyAgreed, privacyPolicyAgreedAttrs] = defineField('privacyPolicyAgreed')

const onSubmit = handleSubmit(async values => {
  console.log(values)

  const response = await fetch('http://127.0.0.1:54321/functions/v1/send-contact-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
})
</script>

<template>
  <section id="contact" class="container flex flex-col justify-center items-center m-auto p-12 min-h-[50vh]">
    <article class="prose mb-2">
      <h2 class="text-center">{{ $t('contact.title') }}</h2>
      <p class="text-center">{{ $t('contact.text') }}</p>
    </article>
    <form novlaidate @submit.prevent="onSubmit" class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3">
      <label class="input input-bordered flex items-center gap-2 mb-4">
        <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
        <input
          v-model="name"
          v-bind="nameAttrs"
          name="senderName"
          type="text"
          class="grow"
          :placeholder="$t('form.placeholders.name')"
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 mb-4">
        <font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon>
        <input
          v-model="email"
          v-bind="emailAttrs"
          name="fromMail"
          type="email"
          class="grow"
          :placeholder="$t('form.placeholders.email')"
        />
      </label>
      <textarea
        v-model="message"
        v-bind="messageAttrs"
        :placeholder="$t('form.placeholders.contact_message')"
        class="textarea textarea-bordered w-full mb-4 resize-none"
        rows="4"
        name="message"
      ></textarea>

      <div class="form-control mb-4">
        <label class="label cursor-pointer">
          <input
            v-model="privacyPolicyAgreed"
            v-bind="privacyPolicyAgreedAttrs"
            required
            name="privacyPolicyAgreed"
            type="checkbox"
            class="checkbox checkbox-primary mr-4"
          />
          <span class="label-text">
            I agree to the <NuxtLink class="link" :to="localePath('privacy-policy')">Privacy Policy</NuxtLink> and allow you to store my submitted information for responding to my inquiry.
          </span>
        </label>
      </div>

      <div class="flex justify-center">
        <button
          class="btn btn-primary w-full"
          :disabled="!meta.valid"
          type="submit"
        >
          {{ $t('cta.connect')}}
          <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"></font-awesome-icon>
        </button>
      </div>
    </form>
  </section>
</template>