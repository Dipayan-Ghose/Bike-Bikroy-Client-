/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#facc15',
          secondary: '#f59e0b',
          neutral: "#0f172a",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
