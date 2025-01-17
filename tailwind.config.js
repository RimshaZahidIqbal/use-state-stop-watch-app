/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/imges/background.webp')",
      },
      boxShadow: {
        'custom-orange': '0 0 20px #ff8c00'
      }
    },
  },
  plugins: [],
}
