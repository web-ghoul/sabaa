/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#00A4E4",
        primaryDark:"#5271FF",
        secondary:"#36405E",
        secondaryLight:"#4F5875",
        white:"#fff",
        dark:"#000000",
        black:"#333333",
        gray:"#EEEEEE",
        bg:"#F3F4F7",
        error:"#ED1B2E",
        success:"#47CF73",
        mail:"#FBBC05",
        sidebar:"#36405E",
        excel:"#1D6F42"
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      screens: {
        "xs":{'max':"560px"},
        "sm":{'max':"768px"},
        "md":{'max':"992px"},
        "lg":{'max':"1200px"},
        "xl":{'max':"1440px"},
        "2xl":{'max':"1560px"},
      }
    },
  },
  plugins: [],
}