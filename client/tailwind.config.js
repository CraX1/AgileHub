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
          // DEFAULT: "#065ad8",
          DEFAULT: "#1c5470",
        },
        proj_dark_gray: {
          DEFAULT: "#6b7280",
        },
        proj_red: {
          DEFAULT: "#b51818",
        },
        proj_gray: {
          DEFAULT: "#a5a5a5",
        },
        proj_light_blue: {
          DEFAULT: "#f5fbff",
          border: "#cedee8",
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
