/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
      width: {
        "big-container": "94%",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      backgroundColor: {
        "color-100": "#F1F9FF",
        "color-200": "#DDEBF6",
        "color-300": "#8A949F",
        "color-400": "#313552",
        "color-dark": "#313552",
        "color-blue": "#0F90D1",
        "color-blue-dark": "#006DA8",
        "color-red": "#FF4A35",
        "color-red-dark": "#D11D07",
        "color-orange": "#FFA336",
        "color-orange-dark": "#EA7C16",
        "color-green": "#42C79C",
        "color-green-dark": "#13A475",
        "color-yellow": "#EDE409",
        "color-yellow-dark": "#D6CD00",
        "color-gold": "#DCA606",
      },
      textColor: {
        "color-dark": "#313552",
        "color-gray": "#8A949F",
        "color-blue": "#0F90D1",
        "color-blue-dark": "#0077B2",
        "color-red": "#FF4A35",
        "color-red-dark": "#DB2711",
        "color-orange": "#FFA336",
        "color-orange-dark": "#EA7C16",
        "color-green": "#42C79C",
        "color-green-dark": "#13A475",
        "color-yellow": "#EDE409",
      },
      fill: {
        "color-100": "#F1F9FF",
        "color-200": "#DDEBF6",
        "color-300": "#8A949F",
        "color-400": "#313552",
        "color-dark": "#313552",
        "color-blue": "#0F90D1",
        "color-blue-dark": "#006DA8",
        "color-red": "#FF4A35",
        "color-red-dark": "#D11D07",
        "color-orange": "#FFA336",
        "color-orange-dark": "#EA7C16",
        "color-green": "#42C79C",
        "color-green-dark": "#13A475",
        "color-yellow": "#EDE409",
        "color-yellow-dark": "#D6CD00",
        "color-gold": "#DCA606",
      },
      borderColor: {
        "color-dark": "#313552",
        "color-200": "#DDEBF6",
        "color-400": "#313552",
        "color-gray": "#8A949F",
        "color-blue": "#0F90D1",
        "color-blue-dark": "#0077B2",
        "color-red": "#FF4A35",
        "color-red-dark": "#DB2711",
        "color-orange": "#FFA336",
        "color-green": "#42C79C",
        "color-yellow": "#EDE409",
        "color-gold": "#DCA606",
      },
      fontSize: {
        "3.5xl": "2rem",
      },
      gap: {
        0.75: "6px",
      },
      borderRadius: {
        "4xl": "30px",
      },
      width: {
        imgBorderedBox: "calc(100% - 4px)",
      },
      height: {
        imgBorderedBox: "calc(100% - 4px)",
      },
      backgroundImage: {
        "red-gradient": "linear-gradient(180deg, #FF7666 0%, #FF4A35 100%)",
        "orange-gradient": " linear-gradient(180deg, #FFBB6A 0%, #FF9A22 100%)",
        "green-gradient": "linear-gradient(180deg, #57DEB2 0%, #3AC699 100%)",
        "yellow-gradient": "linear-gradient(180deg, #FFE24A 0%, #F5C61F 100%)",
        "blue-gradient":
          "linear-gradient(0deg, #0F90D1 -0.02%, #1EBCF5 100.02%)",
        "dark-gradient": "linear-gradient(90deg, #24273C 0%, #313552 100%)",
      },
      screens: {
        "-2xl": { max: "1360px" },
        "-xl": { max: "1200px" },
        "-lg": { max: "1024px" },
        "-md": { max: "768px" },
        "-sm": { max: "576px" },
        "3xl": { min: "1700px" },
      },
    },
  },
  plugins: [
    require('autoprefixer')
  ] 
};
