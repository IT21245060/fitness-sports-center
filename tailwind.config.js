/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#C99A10',
        'gold-light': '#E8B820',
        'dark-brown': '#2A2310',
        'jet': '#080808',
        'charcoal': '#2E2E2E',
        cream: '#F2EFE4',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
