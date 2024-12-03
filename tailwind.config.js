/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: { 'Work': ['Work Sans', 'sans-serif'], },
      fontFamily: { 'montserrat': ['montserrat', 'sans-serif'], },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        orbit: 'orbit 1s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};