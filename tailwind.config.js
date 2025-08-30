/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        turret: ['Turret Road', 'sans-serif'],
      },
      colors: {
        'pink-500': '#f43f5e',
        'gray-900': 'hsl(242, 19%, 5%)',
        'gray-800': 'hsl(242, 14%, 10%)',
        'gray-200': 'hsl(242, 8%, 85%)',
        'blue-900': '#1f2a44',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}