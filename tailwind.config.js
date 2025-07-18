import pluginTypography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import animate from 'tailwindcss-animate';
import { setupInspiraUI } from '@inspira-ui/plugins';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './assets/css/**/*.{css,scss}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  safelist: ['dark'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      // Uncomment to customize border radius based on CSS variables
      // borderRadius: {
      //   xl: 'calc(var(--radius) + 4px)',
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
    },
  },
  daisyui: {
    themes: ['forest'],
  },
  plugins: [
    pluginTypography,
    daisyui,
    animate,
    setupInspiraUI,
  ],
};
