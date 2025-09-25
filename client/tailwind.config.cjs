/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b9dcfe',
          300: '#8cc5fe',
          400: '#5aa7fb',
          500: '#3d90f6',
          600: '#2672e6',
          700: '#1e5acc',
          800: '#1e4aa4',
          900: '#1d3e83',
        },
      },
    },
  },
  plugins: [],
};


