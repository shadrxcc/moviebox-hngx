/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonred: 'var(--rose-700, #BE123C);'
      }
    },
  },
  plugins: [],
}