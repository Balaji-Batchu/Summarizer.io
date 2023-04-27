/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'hero-pattern': "url('../v960-ning-05.jpg')",
      },
      fontFamily: {
        'rufina': ['Rufina'],
        'blackHanSans': ['Black Han Sans'],
      }
    },
  },
  plugins: [],
}