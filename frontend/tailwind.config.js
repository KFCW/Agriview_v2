/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:  {
      darkSignup: "#212529",
      whiteSignup: "#f7ede2",
      grey: "#e0e1dd",
      pureBlue:'#112A46' ,
      gray: '#403d39',
      whiteBlue: "#6096ba",
      green: "#d8f3dc",
      darkGren:"#1b4332",
      orange: "#335c67"
    },
    fontFamily: {
      'sans': ["sans-serif"],
      'body': ["poppins, sans-serif"]
    }
  },
  plugins: [],
}

