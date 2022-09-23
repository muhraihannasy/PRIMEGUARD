/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FECA0A",
        secondary: "#FFCC2A",
        thirdty: "#BE1E2D",
        fourty: "#EC1C24",
        fivety: "#E6E7E8",
        textc1: "#111111",
        textc2: "#222222",
      },
      backgroundImage: {
        "linear-yellow":
          "linear-gradient(100deg, #FECA0A 40.94%, rgba(255, 90, 1, 0) 100.1%);",
      },
      screens: {
        tablets: { max: "1092px" },
      },
    },
  },
  plugins: [],
};
