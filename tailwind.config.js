module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        rotate360: 'rotate360 100ms ease-in-out',
        fadeIn: 'fadeIn 100ms ease-in-out',
        fadeOut: 'fade 100ms ease-in-out',
      },
      spacing: {
        '360px': '360px',
        '691px': '691px',
      },
      colors: {
        genGray: '#808191',
        myPurple: '#6C5DD3',
        main: '#242731',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-question-mark')],
}
