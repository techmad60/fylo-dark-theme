/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'curvy-mobile': "url('./images/bg-curvy-mobile.svg')",
        'curvy-desktop': "url('./images/bg-curvy-desktop.svg')",
        'quotes': "url('./images/bg-quotes.png')",
      },
      letterSpacing: {
        widest: "0.5em",
      },
      colors: {
        'Dark-Blue-intro': " hsl(217, 28%, 15%)",

        'Dark-Blue-main': "hsl(218, 28%, 13%)",

        'Dark-Blue-footer': "hsl(216, 53%, 9%)",

        'Dark-Blue-testimonials': " hsl(219, 30%, 18%)",

        'Cyan-grdaient': "hsl(176, 68%, 64%)",

        'Blue-gradient': "hsl(198, 60%, 50%)",
        
        'Light-Red-error': "hsl(0, 100%, 63%)"
      },
      backgroundPosition:{
        'center-bottom': 'center 10%',
      }
    },
  },
  plugins: [],
}

