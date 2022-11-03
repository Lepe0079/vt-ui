/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: [
    "./app/**/*.{html,js,ts,tsx}",
    "./app/*.{html,js,ts,tsx}",
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
    "./components/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
