import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      'light-blue': '#ABBCFF',
      'sky-blue': '#BEE2FD',
      white: '#ffffff',
      denim: '#022959',
      grey: '#9699AA',
      borderColor: '#D6D9E6',
      purple: '#483EFF',
      'very-light-grey': '#F8F9FF',
      'red-errors': '#EE374A'
    },
    minHeight: {
      '1/2': '50%'
    }
  },
  plugins: []
}
export default config
