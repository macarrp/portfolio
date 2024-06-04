/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'hunyadi-yellow': '#DBA042',
        'hunyadi-yellow-light': '#daa550',
        'alice-blue': '#D8E5ED',
        'cadet-gray': '#A0B2B6',
        'jet': '#3D3938',
        'timberwolf': '#D6D5D0',
      }
    },
  },
  plugins: [],
}

