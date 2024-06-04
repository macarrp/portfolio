/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'hunyadi-yellow': '#DBA042ff',
        'alice-blue': '#D8E5EDff',
        'cadet-gray': '#A0B2B6ff',
        'jet': '#3D3938ff',
        'timberwolf': '#D6D5D0ff',
      }
    },
  },
  plugins: [],
}

