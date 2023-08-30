/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        body: 'rgb(247, 235, 216)',
        darkBlue: 'rgb(38, 70, 83)', 
        teal: 'rgb(42, 157, 143)', 
        paleBlue: 'rgb(232, 245, 240)',
        yellow: 'rgb(233, 196, 106)', 
        tan: 'rgb(238, 218, 171)',
        deepCoral: 'rgb(231, 111, 81)', 
        lightOrange: 'rgb(244, 162, 97)', 
        dark: 'rgb(45, 52, 54)',
        burntOrange: 'rgb(207, 96, 8)',
        smoke: 'rgb(99, 99, 99)',
        delivered: 'rgb(146, 176, 122)',
        cancelled: 'rgb(236, 201, 193)',
        offWhite: 'rgb(250, 250, 250)'
      }
    },
  },
  plugins: [],
}

