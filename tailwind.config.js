/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006EFF',
        secondary: '#E73030',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif','system-ui'],
      },
    },
  },
  plugins: [],
}