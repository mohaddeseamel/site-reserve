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
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1170px',
      'xl':'1280px',
      '2xl':'1536px'
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