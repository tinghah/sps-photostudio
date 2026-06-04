/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800020',
        secondary: '#B8860B',
        accent: '#008080',
        cream: '#F5F5DC',
      },
    },
  },
  plugins: [],
}
