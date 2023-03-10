/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "var(--primary-color)",
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
      serif: ["primary-bold", "serif"],
    },
  },
  plugins: [],
};
