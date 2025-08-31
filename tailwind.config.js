/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'kasa-green': '#10b981',
        'kasa-green-dark': '#059669',
      }
    },
  },
  plugins: [],
}