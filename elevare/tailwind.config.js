/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",   // blue
        secondary: "#9333EA", // purple
        accent: "#F59E0B",    // yellow
      },
    },
  },
  plugins: [],
}
