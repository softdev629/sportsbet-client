/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "var(--primary-color)",
      primaryfont: "var(--ui-primary-font-color)",
      secondary: "var(--secondary-color)",
      darkgrey: "var(--ui-dark-grey)",
      mediumgrey: "var(--ui-medium-grey)",
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "768px",
        sm: "576px",
        lg: "992px",
        xl: "1200px",
      },
    },
    fontFamily: {
      primary: ["primary-regular", "serif"],
      primarybold: ["primary-bold", "serif"],
      secondary: ["secondary-regular", "sans-serif"],
      secondarybold: ["secondary-bold", "sans-serif"],
    },
  },
  plugins: [],
};
