/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {

      animation: {
        'bubble-1': 'bubble1 25s ease-in-out infinite',
        'bubble-2': 'bubble2 30s ease-in-out infinite',
        'bubble-3': 'bubble3 35s ease-in-out infinite',
      },
      keyframes: {
        bubble1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, 50px) scale(1.2)' },
          '66%': { transform: 'translate(-50px, 30px) scale(0.9)' },
        },
        bubble2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-30px, -50px) scale(0.9)' },
          '66%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        bubble3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-40px, 40px) scale(1.1)' },
          '66%': { transform: 'translate(30px, -40px) scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
} 