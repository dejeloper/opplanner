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
        success: "#86efac",
        warning: "#facc15",
        danger: "#f87171",
        contrast: "#a78bfa",
      },
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
