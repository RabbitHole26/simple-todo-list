import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        fadeOut: 'fadeOut 0.2s ease-in-out'
      }
    }
  },
  plugins: [
    require("daisyui"),
    plugin(({ addVariant }) => {
      addVariant("has-hover", "@media (hover: hover) and (pointer: fine)")
    }),
  ],
  daisyui: {
    themes: ['dracula']
  }
}
