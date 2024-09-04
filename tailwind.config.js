/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "black",
        designColor1: "#ff014f",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg,#1e2024,#23272b)",
        designColor: "#00E5FF",
        designColorb: "blue",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo: "8px 8px 15px #d1d9e6, -8px -8px 15px #ffffff",
        shadowThree:
          "3px 3px 8px rgba(0, 0, 0, 0.5), -3px -3px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
