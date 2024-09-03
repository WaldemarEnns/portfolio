<script setup lang="ts">
definePageMeta({
  title: 'Waldemar Enns',
  name: 'home'
})

function scrollToContact () {
  document.querySelector('#contact')!.scrollIntoView({
    behavior: 'smooth'
  })
}

function scrollToAbout () {
  document.querySelector('#about')!.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md prose">
        <img
          class="mask mask-squircle sepia-0  w-[100px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] m-auto mb-8"
          src="/assets/images/me-nice.webp"
          alt="A picture of me in a suit."
        />
        <h1 class="text-5xl font-bold mb-0">it's a pleasure to meet you</h1>
        <p class="py-6">
          Hi! Thank you for visiting my page and getting to know me!
          Let me introduce myself and my work 🚀
        </p>
        <button
          class="btn btn-primary"
          @click="scrollToAbout"
        >
          tell me more
          <font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon>
        </button>
      </div>
    </div>
  </div>

  <section id="about" class="container m-auto py-12">
    <article class="prose">
      <h2>About me</h2>
    </article>
    <article class="prose m-auto">
      <h3>
        <font-awesome-icon icon="fa-solid fa-user-astronaut"></font-awesome-icon>
        Who am I?
      </h3>
      <p>I am an experienced fullstack-developer and team-lead, focussed on solutions with VueJS, TypeScript and Laravel. For many years I support companies, building robust and scalable solutions.</p>

      <h3>
        <font-awesome-icon icon="fa-solid fa-wand-magic-sparkles"></font-awesome-icon>
        Experience
      </h3>
      <p>In the past 7+ years I contributed across many different projects, including platforms for companies like https://monkeybox.de, https://impax-tours.com and https://aedifion.com. It's my goal to provide clean code, structured processes and onholding value.</p>
      <div class="badge badge-neutral mr-2">
        <font-awesome-icon icon="fa-brands fa-laravel" class="mr-2"></font-awesome-icon>
        Laravel
      </div>

      <div class="badge badge-neutral mr-2">
        <font-awesome-icon icon="fa-brands fa-vuejs" class="mr-2"></font-awesome-icon>
        Vue
      </div>

      <div class="badge badge-neutral mr-2">
        TypeScript
      </div>

      <div class="badge badge-neutral mr-2">
        NestJS
      </div>

      <div class="badge badge-neutral mr-2">
        Python
      </div>

      <h3>
        <font-awesome-icon icon="fa-solid fa-hand-spock"></font-awesome-icon>
        Values
      </h3>
      <p>Reliability, precision and continuous learning are at the heart of my work. I value open communication and close collaboration with my clients in order to achieve the best possible results.</p>

    </article>
  </section>

  <section id="services" class="container m-auto py-12">
    <article class="prose mb-4">
      <h2>Services</h2>
    </article>

    <div class="flex flex-row flex-wrap justify-between items-start">
      <div class="card bg-base-300 mb-4 mx-2 w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-palette"></font-awesome-icon>
            Frontend development with Vue & TypeScript
          </h2>
          <p>Implementation of modern and efficient web-applications and websites.</p>
          <p>My deep expertise of Vue and it's ecosystem ensures that my solutions are up-to-date with state of the art technology and best practises.</p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">Let's talk</button>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">
              <font-awesome-icon class="mr-2" icon="fa-brands fa-vuejs"></font-awesome-icon>
              Vue
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 mb-4 mx-2 w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-sitemap"></font-awesome-icon>
            SaaS and more with Laravel
          </h2>
          <p>From setup & development up to release and rollout. Scalable and stable solutions for your business needs.</p>
          <p>Custom solutions for booking-systems, inventory management, payment gateways and API development.</p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">Start your business idea</button>
          </div>
          <div class="mt-4">
            <div class="badge badge-neutral">
              <font-awesome-icon class="mr-2" icon="fa-brands fa-laravel"></font-awesome-icon>
              Laravel
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-300 mb-4 mx-2 w-full sm:w-full md:w-full lg:w-full xl:w-3/12 2xl:min-w-[450px] shadow-xl border border-secondary">
        <div class="card-body">
          <h2 class="card-title">
            <font-awesome-icon class="mr-2" icon="fa-solid fa-user-check"></font-awesome-icon>
            Consultancy
          </h2>
          <p>
            I offer sound advice and strategic planning for your web development projects.
          </p>
          <p>
            With my experience in front-end and back-end development and team management, I can help you make the right technological decisions and implement your projects efficiently.
          </p>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-secondary btn-outline w-full sm:w-full md:w-full lg:w-fit xl:w-fit 2xl:w-fit" @click="scrollToContact">Get consultancy</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="divider">Interested?</div>
</template>