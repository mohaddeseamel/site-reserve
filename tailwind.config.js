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
    colors:{
      green:{
        light:'#dff8e5',
        DEFAULT:'',
        dark:'#62c17d'
      },
      gray:{
        lighten:'#ededed',
        light:'#969495',
        default:'#7c766a',
        dark:'#928b85',
        darken:'#cdcac1',
        neutralLight:'#f3f4f6',
        neutral:'#171717',
        lightgray:'#6b7280',
        secondgray:'#f5f5f5'
      },
      white:{
        default:'#fff'
      },
      red:{
        default:'#ef4444'
      },
      fontColor:{
        white:'#fff',
        dark:'#000',
        gray:'#999',
        brown:'#8c6f60'
      },
    }
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