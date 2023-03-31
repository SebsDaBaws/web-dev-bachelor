/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006860",
        "primary-hover": "#003830",
        secondary: "#248a88",
      },
    },
    fontFamily: {
      serif: ["Merriweather", "serif"],
      "sans-serif": ["Roboto", "sans-serif"],

    },
    aspectRatio: {
      square: "1 / 1",
      wide: "16 / 9",
      portrait: "2 / 3",
      desktop: "3 / 2",
      mobile: "4 / 3",
    },
  },
  plugins: [],
};
