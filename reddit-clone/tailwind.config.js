const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      white: colors.white,
      orange: colors.orange,
      black: colors.black
    },
    extend: {
      outline: ['hover', 'active'],
      colors: {
        yellow: {
          "450": "#fed001"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}