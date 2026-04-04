/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#22c55e",
        accent: "#7c3aed",
        dark: "#1f2937",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        'lg': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 50px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
