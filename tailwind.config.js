/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "yekan":["Yekan"],
        "DanaFaNum":["DanaFaNum-Bold"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  container: {
    center: true,
    padding: "20px",
  }
}