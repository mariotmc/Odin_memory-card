const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customRed: "#ef0e3d",
        customGray: "#383838",
        customOffWhite: "#eeeeee",
        customDarkRed: "rgb(148, 8, 38)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
