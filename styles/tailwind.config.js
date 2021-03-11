const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  darkMode: "media",
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      prime: colors.cyan,
      secon: colors.purple,
      gray: colors.trueGray
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
