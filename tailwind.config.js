/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          100: '#f8f5ee',
          200:'#f7ebd5'
        },
        'texto':{
          100:'#fb9300',
          200:'#f5773c',
          900:'#182842'
        },
        'fondo':{
          100:'#1d354d'
        }
      }
    },
  },
  plugins: [],
}