/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens:{
      'xs': '50px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        Raleway:['Raleway','sans-serif'],
        Lobster:['Lobster','sans-serif'],
      },
    },
  },
  plugins: [
    require('./node_modules/tw-elements/dist/plugin'),
  ],
}