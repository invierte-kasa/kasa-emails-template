/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'kasa-green': '#00CC65',
        'kasa-green-dark': '#059669',
        'kasa-background': '#101A28',
      }
    },
  },
  plugins: [],
}