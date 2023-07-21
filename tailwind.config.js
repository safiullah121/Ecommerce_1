/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custome':'url(./pages/img/16.png)',
        'laptop':'url(./pages/img/17.png)',
        'desktop':'url(./pages/img/18.png)',
        'monitor':'url(./pages/img/19.png)',
        'core':'url(./pages/img/core.jpg)',
        'support_2':'url(./pages/img/support_2.png)'
      },
        screens: {
          'xsm': '350px',
          'sm': '540px',   
          'md': '768px', 
          'md_2': '974px',
          'md_3': '920px',   
          'lg': '1040px',  
          'xl': '1280px',  
          '2xl': '1536px', 
        }
    },
  },
  plugins: [],
}

