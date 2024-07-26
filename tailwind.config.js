/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/index.html",
      "./src/**/*.{js,jsx}"
    ],
    theme: {
      extend: {
        colors:{
          primaryColor: "#555AFA",
          bg_color: "#FDFCFC",
        },
        fontSize:{
          ls:"0.6rem",
        },
      },
    },
    plugins: [],
  }
  
  