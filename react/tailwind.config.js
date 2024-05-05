/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.jsx', './src/components/*.jsx'],
  theme: {
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1200px',
      'xl': '1440px',
      'xxl': '1920px',
    },
    extend: {
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      height: {
        '1px': '1',
      },
      colors: {
        'almost-white': '#FEFFFF',
        'light-green': '#DEF2F1',
        'green': '#33AAAA',
        'dark-green': '#2B7A78',
        'almost-black': '#17252A',
      },
      fontSize: {
        'h1': ['3.75rem', {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        'h1-mobile': ['2.5rem', {
          lineHeight: '120%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        'h2': ['2.25rem', {
          lineHeight: '140%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        'h2-mobile': ['1.875rem', {
          lineHeight: '140%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        'h3': ['1.875rem', {
          lineHeight: '140%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        'h3-mobile': ['1.75rem', {
          lineHeight: '140%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        'h4': ['1.5rem', {
          lineHeight: '150%',
          fontWeight: '600',
        }],
        'h5': ['1.25rem', {
          lineHeight: '150%',
          fontWeight: '600',
        }],
        'x-large': ['1.25rem', {
          lineHeight: '160%',
          fontWeight: '400',
        }],
        'large': ['1rem', {
          lineHeight: '160%',
          fontWeight: '400',
          letterSpacing: '-0.008em'
        }],
        'medium': ['0.875rem', {
          lineHeight: '170%',
          fontWeight: '400',
        }],
        'medium-bold': ['0.875rem', {
          lineHeight: '170%',
          fontWeight: '600',
          letterSpacing: '-0.008em'
        }],
        sm: ['0.75rem', {
          lineHeight: '170%',
          fontWeight: '400',
        }],
        base: ['1rem', {
          lineHeight: '160%',
          fontWeight: '400',
          letterSpacing: '-0.008em'
        }],
      },
    },
  },
  plugins: [],
}

