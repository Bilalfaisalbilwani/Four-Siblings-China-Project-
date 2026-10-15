/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C9F1C",
        "primary-dark": "#1e6b13",
        "primary-light": "#4ade80",
      },
    },
  },
  plugins: [],
}
