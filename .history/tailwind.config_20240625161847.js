/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'bg2': 'url("/src/assets/images/bg2.jpg")'
      },
      colors: {
        "lightbaige": "#F8F5ED"
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.7s ease-out',
        slideInRight: 'slideInRight 0.7s ease-out',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
