/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#088F8F",
        secondary: "#EEE",
        text: {
          primary: "#111",
        }
      },
    },
  },
  plugins: [],
}

