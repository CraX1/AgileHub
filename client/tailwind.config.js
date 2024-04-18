/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        agile_blue: {
          // DEFAULT: "#065ad8",
          DEFAULT: "#1c5470",
        },
        agile_gray: {
          DEFAULT: "#6b7280",
        },
        agile_red: {
          DEFAULT: "#b51818",
        },
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
