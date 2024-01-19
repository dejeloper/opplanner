/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#1d2125",
        two: "#282d33",
        three: "#5EC6D1",
        four: "#92e5f1",
        five: "#e6f9fc",
        gris: "#f2f4f7",
      },
    },
    screens: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992",
      xl: "1200px",
      xxl: "1440px",
    },
  },
  plugins: [],
  darkMode: "media",
};
