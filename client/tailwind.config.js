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
        },
        proj_red: {
          DEFAULT: "#b51818",
        },
        proj_gray: {
          DEFAULT: "#a5a5a5",
          light: "#7e93a0",
          dark: "#6b7280",
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
    },
  },
  plugins: [],
};
