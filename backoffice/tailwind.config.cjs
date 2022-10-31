/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Barlow Condensed', 'sans-serif']
    },
    extend: {
      colors: {
        orange: {
          50: '#ea5933'
        },
        black: {
          50: '#22281B'
        },
        gray: {
          50: '#7F847A'
        },
        white: {
          0: '#fff',
          50: '#C7BAAE',
          100: '#F5F1E9'
        }
      }
    },
    plugins: []
  }
}
