/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nav-bar-bg': '#BC9CB0',
        'nav-text-color': '#88958D'
      },
      fontFamily: {
        'rouge': ['Just Another Hand', 'serif']
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

