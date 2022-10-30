/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    
        screens: {
          'xs': '350px' ,
          'xxs': '540px', // min-width
          ...defaultTheme.screens,
       
  },
},
  plugins: [
    require('flowbite/plugin')
]
}
