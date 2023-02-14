/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'proza-libre': '"Proza Libre"'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#5c87bc',
      'blue': '#a3f7f4',
      'green': '#5addc8',
    },
    extend: {},
  },
  plugins: [],
}
