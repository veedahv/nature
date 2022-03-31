
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#475F45',
        'secondary': '#343D33',
        'tertiary': '#C4C4C4',
        'body': '#414840',
      }
    },
  },
  plugins: [],
}