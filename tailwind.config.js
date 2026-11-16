/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  safelist: [
    "max-w-2xl",
    "md:max-w-3xl",
    "lg:max-w-4xl",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

