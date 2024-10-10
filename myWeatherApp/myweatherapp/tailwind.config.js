/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}
