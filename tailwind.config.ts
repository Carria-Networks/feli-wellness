/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#7ac74a',
          500: '#6cc433',
          600: '#63b32e', // primary
          700: '#4f9426'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      }
    }
  },
  plugins: []
}
