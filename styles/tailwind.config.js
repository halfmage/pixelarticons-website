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
      },
      fontFamily: {
        sans: ['Nippo-Variable', 'sans-serif'],
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
