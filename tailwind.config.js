/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,scss,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#289225",
        dark: "#162E36",
        white: "#FFFDFD",
      },
      screens: {
        xxs: "360px",
        xs: "480px",
        sm: "768px",
        es: "860px",
        md: "992px",
        tablet_sm: "1024px",
        tablet: "1100px",
        lg: "1200px",
        xl: "1360px",
        "2xl": "1520px",
        "3xl": "1680px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "3840px",
      },
    },
  },
  plugins: [],
};
