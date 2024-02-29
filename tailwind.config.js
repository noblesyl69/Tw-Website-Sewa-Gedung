/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        primary: 'poppins'
      },
      colors:{
        ungu : "#4D1DAB",
        hijau: "#31B380",
        biru: "#211B3D",
        abu2: "#5A5A5A"
      }
    },
  },
  plugins: [],
}

