/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: '1440px',
      lg: '1024px',
      md: '768px',
      xs: '375px',
      'max-lg': { max: '1024px' },
      'max-mid': { max: '768px' },
      'max-sm': { max: '600px' },
      'max-xsm': { max: '450px' },
      'max-xsm': { max: '450px' },
    },
    extend: {},
  },
  plugins: [],
};
