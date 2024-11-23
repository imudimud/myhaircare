/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          900: '#1a365d', // Darker navy for better contrast
          800: '#1e429f',
          700: '#1a56db',
          600: '#3b82f6',
        },
        'gold': {
          400: '#f59e0b', // Accessible gold color
          500: '#d97706',
        },
      },
      backgroundColor: {
        'primary': 'var(--color-bg-primary)',
        'secondary': 'var(--color-bg-secondary)',
        'tertiary': 'var(--color-bg-tertiary)',
      },
      textColor: {
        'primary': 'var(--color-text-primary)',
        'secondary': 'var(--color-text-secondary)',
        'tertiary': 'var(--color-text-tertiary)',
      },
    },
  },
  plugins: [],
}