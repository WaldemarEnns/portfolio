<template>
  <section id="contact" class="container flex flex-col justify-center items-center m-auto p-12 min-h-[50vh]">
    <article class="prose mb-2">
      <h2 class="text-center">{{ $t('contact.title') }}</h2>
      <p class="text-center">{{ $t('contact.text') }}</p>
    </article>
    <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3">
      <label class="input input-bordered flex items-center gap-2 mb-4">
        <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
        <input name="senderName" type="text" class="grow" :placeholder="$t('form.placeholders.name')" />
      </label>
      <label class="input input-bordered flex items-center gap-2 mb-4">
        <font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon>
        <input name="fromMail" type="email" class="grow" :placeholder="$t('form.placeholders.email')" />
      </label>
      <textarea
        class="textarea textarea-bordered w-full mb-4 resize-none"
        :placeholder="$t('form.placeholders.contact_message')"
        rows="4"
        name="message"
      ></textarea>
      <div class="flex justify-center">
        <button class="btn btn-primary w-full" disabled>
          {{ $t('cta.connect')}}
          <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"></font-awesome-icon>
        </button>
      </div>
    </div>
  </section>
</template>