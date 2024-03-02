/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        gray: "#d3d3d3",
        grayDark: "#808080",
        gray3: "#303030",
        primary: "#0000ff",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.1) 2px, #f5f5f5 12px, #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(0,0,0,01) 2px, #1b1b1b 12px, #1b1b1b 100px);",
      },
    },
  },
  plugins: [],
};
