const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['BenchNine',],
      'body': ['Open Sans'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      greenBright: '#6bb53e',
      //indigo: colors.indigo,
      //red: colors.rose,
      //yellow: colors.amber,
    },
    backgroundColor: theme => ({
      'greenbright': '#6bb53e',
      white: colors.white,
    }),
    customForms: theme => ({
      default: {
        checkbox: {
          icon: iconColor => `<svg fill="${iconColor}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>`,
          iconColor: theme('colors.gray.800'),
          '&:hover': {
            iconColor: theme('colors.gray.700'),
          },
        },
      },
    })
  },
  boxShadow: {
    button: '4px 6px 1px 0 rgba(0, 0, 0, 0.05)',
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-hyphens"),
    require('@tailwindcss/custom-forms'),
  ],
}
