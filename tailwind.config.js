/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['bebas-neue', 'sans-serif'],
        'inter-reg': ['inter-reguler', 'sans-serif'],
        'inter-bold': ['inter-bold', 'sans-serif'],
        'inter-light': ['inter-light', 'sans-serif'],
       
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        loadingImage: 'loading 1s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        loading: {
          '0%': { transform: 'translate(500%, 500%)' },
          '100%': { transform: 'translate(-100%, -80%)' },
      },
      },
      
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}