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
      },
    },
  },
  plugins: [],
};
