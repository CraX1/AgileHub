/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        proj_brand_font: "Caveat",
      },
      colors: {
        proj_blue: {
          // DEFAULT: "#032746",
          DEFAULT: "#033346",
          // active: "#176389",
          active: "#00405a",
          secondary: "#1c5470",
          light: "#f5fbff",
          lightBorder: "#cedee8",
          sky: "#0079b6",
        },
        proj_red: {
          DEFAULT: "#b51818",
        },
        proj_gray: {
          DEFAULT: "#a5a5a5",
          secondary: "#f7f8fa",
          light: "#7e93a0",
          lightBorder: "#eff0f2",
          dark: "#6b7280",
        },
        proj_black: {
          DEFAULT: "#383838",
        },
      },
      borderWidth: {
        proj_sm: "1.5px",
      },
      keyframes: {
        enter: {
          "0%": { opacity: 0, transform: "translateY(1rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        leave: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(1rem)" },
        },
      },
      animation: {
        enter: "enter 0.3s ease-out",
        leave: "leave 0.3s ease-in",
      },
      boxShadow: {
        proj_box_shadow: "0 2px 3px #e5e7eb",
      },
    },
  },
  plugins: [],
};
