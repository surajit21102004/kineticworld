/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          900: '#1e3a8a'
        },
        obsidian: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#172129',
          900: '#0b0f17',
          950: '#060910'
        },
        slatePage: '#f6f7f5',
        slateSurface: '#ffffff',
        slateBorder: '#d8e0e1'
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      }
    },
  },
  plugins: [],
}
