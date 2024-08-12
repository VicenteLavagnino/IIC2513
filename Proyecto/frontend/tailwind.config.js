/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cancel': '#C4663D',
        'custom-purple': '#803EC5',
        'custom-grey': '#E2E2E3',
        'custom-purple-70': 'rgba(128, 62, 197, 0.7)',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'long-gradient': 'linear-gradient(to top,  #E2E2E3, #803EC5, #E2E2E3, #803EC5)',
      },
      gradientColorStops: {
        'start': '#E2E2E3',
        'end': '#803EC5',
      },
      borderRadius: {
        'extra': '5rem',
        'low': '2rem',
        
      }
    },
  },
  plugins: [],
}

