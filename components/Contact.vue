<template>
  <section id="contact" class="container flex flex-col justify-center items-center m-auto p-12 min-h-[50vh]">
    <article class="prose mb-2">
      <h2 class="text-center">Get in touch</h2>
      <p class="text-center">Let's build something great, drop me a message:</p>
    </article>
    <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3">
      <label class="input input-bordered flex items-center gap-2 mb-4">
        <font-awesome-icon icon="fa-solid fa-envelope"></font-awesome-icon>
        <input type="email" class="grow" placeholder="Email" />
      </label>
      <textarea
        class="textarea textarea-bordered w-full mb-4 resize-none"
        placeholder="Let's talk about ..."
        rows="4"
      ></textarea>
      <div class="flex justify-center">
        <button class="btn btn-primary w-full" disabled>
          Connect
          <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"></font-awesome-icon>
        </button>
      </div>
    </div>
  </section>
</template>