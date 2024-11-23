/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '950': '#0c1e47', // Darkest blue - main background
          '900': '#1a365d', // Navbar and secondary backgrounds
          '800': '#1e429f', // Accent color
          '700': '#1a56db', // Links and interactive elements
          '600': '#3b82f6', // Primary buttons and highlights
          '500': '#60a5fa', // Secondary buttons
          '400': '#93c5fd', // Icons and small accents
          '300': '#bfdbfe',
          '200': '#dbeafe',
          '100': '#e0e7ff',
          '50': '#f0f5ff',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, var(--tw-colors-blue-950), var(--tw-colors-blue-900))',
        'navbar-gradient': 'linear-gradient(to bottom, var(--tw-colors-blue-950), var(--tw-colors-blue-900))',
        'section-gradient': 'linear-gradient(to bottom, var(--tw-colors-blue-900), var(--tw-colors-blue-800))'
      }
    },
  },
  plugins: [],
}