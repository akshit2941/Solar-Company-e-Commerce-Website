import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      backgroundImage: {
        'bg-img-1': "url('/video.jpg')"
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px'
      },
      maxWidth: {
        '10xl': '1512px'
      },
      borderRadius: {
        '5xl': '40px'
      },
      scale: {
        '104': '1.04'
      }
    }
  },
  plugins: []
}

export default config
