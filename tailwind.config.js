/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#38BDF8',
      secondary: '#F472B6',
      dark: '#0F172A',
      darkSecondary: '#1E293B',
      light: '#F1F5F9',
      textSecondary: '#94A3B8',
    }
  }
},
  plugins: [],
}