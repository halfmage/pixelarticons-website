const colors = require('tailwindcss/colors')

module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        primary: "#FFDD2D",
        gray: colors.neutral,
        violet: colors.violet,
        cyan: colors.cyan,
        blue: colors.blue
      },
      fontFamily: {
        sans: ['Nippo-Variable', 'sans-serf'],
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
    }
  },
  plugins: [],
}
