/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        plum: '#FC4747',
        midnight: "#10141E",
        slate: "#5A698F",
        darkBlue: "#161D2F",
        white: '#ffffff'
      },
      fontSize: {
        xs: '13px',
        sm: '15px',
        base: '16px',
        lg: '24px',
        xl: '32px'
      }
    },
  },
  plugins: [],
}