<template>
  <component
    :is="is"
    :class="
      cn(
        'rainbow-button',
        'group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-2 font-medium !text-white transition-colors',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";

interface RainbowButtonProps {
  class?: string;
  is?: string;
  speed?: number;
}

const props = withDefaults(defineProps<RainbowButtonProps>(), {
  speed: 2,
  is: "button",
});

const speedInSeconds = computed(() => `${props.speed}s`);
</script>

<style scoped>
.rainbow-button {
  --color-1: hsl(0 100% 63%);
  --color-2: hsl(270 100% 63%);
  --color-3: hsl(210 100% 63%);
  --color-4: hsl(195 100% 63%);
  --color-5: hsl(90 100% 63%);
  --speed: v-bind(speedInSeconds);
  
  background: linear-gradient(#121213, #121213), 
              linear-gradient(#121213 50%, rgba(18,18,19,0.6) 80%, rgba(18,18,19,0)), 
              linear-gradient(90deg, var(--color-1), var(--color-5), var(--color-3), var(--color-4), var(--color-2));
  background-clip: padding-box, border-box, border-box;
  background-origin: border-box;
  background-size: 200%;
  border: calc(0.08 * 1rem) solid transparent;
  animation: rainbow var(--speed) infinite linear;
  z-index: 1;
}

.rainbow-button::before {
  content: '';
  position: absolute;
  bottom: -20%;
  left: 50%;
  z-index: -1;
  height: 20%;
  width: 60%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, var(--color-1), var(--color-5), var(--color-3), var(--color-4), var(--color-2));
  background-size: 200%;
  filter: blur(calc(0.8 * 1rem));
  animation: rainbow var(--speed) infinite linear;
}

.rainbow-button:hover {
  color: white !important;
}

@keyframes rainbow {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 200%;
  }
}

/* DaisyUI 5 compatibility - ensure text stays white */
.rainbow-button,
.rainbow-button * {
  color: white !important;
}
</style>
