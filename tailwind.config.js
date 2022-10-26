/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xl': '1440px',
      'lg': '1024px',
      'md':	'768px',
      'xs': '375px'
    },
    extend: {},
  },
  plugins: [],
};
