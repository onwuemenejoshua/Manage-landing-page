/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      //all this screen sizes work with min-width i.e from the set width and above do this.
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
      "Very-Dark-Blue": "hsl(233, 12%, 13%)",
      "Very-Pale-Red": "hsl(13, 100%, 96%)",
      "Vary-Light-Gray": "hsl(0, 0%, 98%)",
      "Bright-Red": "hsl(12, 88%, 59%)",
      "Dark-Blue": "hsl(228, 39%, 23%)",
      white: "#ffffff",
      "Bright-RedLight": "hsl(12, 88%, 70%)",
      "Bright-RedSuperLight": "hsl(12, 88%, 90%)",
    },
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
