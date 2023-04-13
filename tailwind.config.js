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
  plugins: [require('@tailwindcss/typography')],


 /* FOR REFERENCE (already built-in)
 theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
*/

};
