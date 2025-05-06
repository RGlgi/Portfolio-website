/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'delay-100': 'fade-in-up 0.8s ease-out forwards 0.1s',
        'delay-300': 'fade-in-up 0.8s ease-out forwards 0.3s',
      },
      backgroundImage: {
        'rabia-bg': "url('./src/components/assets/m-background.png')",
      },
    },
  },
  plugins: [],
}
