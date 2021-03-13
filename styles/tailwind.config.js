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
      "white": "#fff",
      primary: colors.blue,
      gray: colors.gray
    },
    fontFamily: {
      sans: ['Source Code Pro', 'sans-serf'],
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}
