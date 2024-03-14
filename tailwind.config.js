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
        abu2: "#5A5A5A",
        putihAbu: "#F5EFFF",
        putihAbu2: "#464646",
        ungu2: "#CFB6FF",
        footer: "#EDEDED"
      }
    },
  },
  plugins: [],
}

