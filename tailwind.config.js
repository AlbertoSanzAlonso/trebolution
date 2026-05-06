/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1B4332",    // Deep Green
          secondary: "#F8F5F0",  // Cream/Off-white
          accent: "#B59D7C",     // Gold/Sand
          dark: "#1E1E1E",       // Dark Slate
          light: "#FFFFFF",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
