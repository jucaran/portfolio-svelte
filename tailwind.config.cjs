/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e36571',
        'primary-dark': '#ad414c',
        'primary-light': '#e86d79',
        secondary: '#8edbd8',
        'secondary-dark': '#6fa9a7',
        'light-color': '#e8e8e8',
        'dark-color': '#1a1a1a',
        'light-black': '#202020'
      }
    }
  },
  plugins: []
}
