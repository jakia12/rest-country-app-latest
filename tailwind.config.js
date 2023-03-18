/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    colors: {
      tealLight: "#2dd4bf",
      roseLight: "#fb7185",
      textPrimary: "#191919",
      textSecondary: "#475569",
    },
  },

  plugins: [require("daisyui"), require("flowbite/plugin")],
};
