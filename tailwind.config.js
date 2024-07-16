/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'tertiary': 'var(--tertiary)',

        'pr-1': 'var(--pr-1)',
        'pr-2': 'var(--pr-2)',
        'sr-1': 'var(--sr-1)',
        'sr-2': 'var(--sr-2)',
        'sr-3': 'var(--sr-3)',
        'black': 'var(--black)',
        'white': 'var(--white)',
      },

      fontFamily: {
        gloock: ['Gloock', 'serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        playfairDisplay: ['Playfair Display', 'serif'],
      },

      gridTemplateColumns: {
        "18": "18rem 18rem",
        "18x3": "18rem 18rem 18rem"
      },

      keyframes: {
        openMenu: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        backgroundColors: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },

      animation: {
        openMenu: 'openMenu 500ms linear',
        backgroundColors: 'backgroundColors 3s ease infinite'
      },
    },
  },
  plugins: [],
}
