const colors = require('tailwindcss/colors')

module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        primary: colors.cyan,
        gray: colors.neutral,
        violet: colors.violet,
        cyan: colors.cyan,
        blue: colors.blue
      },
      fontFamily: {
        pixel: ['"Superstar"', 'sans-serf'],
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
