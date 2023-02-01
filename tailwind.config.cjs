/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            readex: ['Readex Pro', 'sans-serif'],
         },
         container: {
            center: true,
         },
      },
   },
   plugins: [],
   important: true,
}
