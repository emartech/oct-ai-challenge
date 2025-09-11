/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oct-blue': '#394255',
        'oct-bg': '#a5b2c4',
      },
      animation: {
        'bounce-horizontal': 'bounceHorizontal 3s ease-in-out infinite',
        'highway-right-fast': 'highwayRightFast 8s linear infinite',
        'highway-left-fast': 'fullScreenRightToLeft 6s linear infinite',
        'highway-right-slow': 'highwayRightSlow 12s linear infinite',
        'highway-left-medium': 'fullScreenRightToLeft 8s linear infinite',
      },
      keyframes: {
        bounceHorizontal: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        highwayRightFast: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(calc(500px + 100%))' },
        },
        fullScreenRightToLeft: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        highwayRightSlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(calc(500px + 100%))' },
        },
        highwayLeftMedium: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}
