/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Kanit', 'sans-serif'],
      'primary': ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
