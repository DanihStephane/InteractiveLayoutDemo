/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        highlight: 'highlight 2s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};