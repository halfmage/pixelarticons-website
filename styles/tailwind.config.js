const colors = require('tailwindcss/colors')

module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  darkMode: "media",
  theme: {
    colors: {
      "white": "#fff",
      primary: colors.cyan,
      gray: colors.neutral
    },
    fontFamily: {
      pixel: ['"Press Start 2P"', 'sans-serf'],
    },
    container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '4rem',
            '2xl': '4rem',
            },
    },
  },
  plugins: [],
}
