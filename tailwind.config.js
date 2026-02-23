/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "javascript/**/*.{js,ts}"],
  safelist: ["lg:w-2/3", "lg:w-1/3"],
  theme: {
    extend: {
      fontFamily: {
        latinMonoRegular: "latin-mono-regular, ui-mono",
        latinMonoCaps: "latin-mono-caps, ui-mono",
        latinMonoCondOblique:
          "latin-mono-cond-oblique, latin-mono-regular, ui-mono",
        latinRoman: "latin-roman, ui-serif",
        latinRomanCaps: "latin-roman-caps, ui-serif",
        latinRomanDunhillOblique:
          "latin-roman-dunhill-oblique, latin-mono-caps, ui-serif",
        lion: "Times New Roman, Times, serif",
      },
      colors: {
        mustard: {
          500: "#FFC429",
          400: "#FFD86A",
          100: "#000000",
        },
        burgundy: {
          500: "#E51937",
          400: "#C91630",
        },
        navy: {
          900: "#000000",
          800: "#000000",
          500: "#000000",
          400: "#000000",
        },
        lime: {
          700: "#E51937",
          400: "#E51937",
        },
        black: {
          900: "#000000",
          800: "#000000",
        },
        sage: {
          50: "#F4F8F4",
          100: "#EAF1EA",
          300: "#C7D8C8",
        },
        mist: {
          100: "#F6FAF9",
          300: "#DDECEA",
        },
        moss: {
          500: "#4B6B57",
        },
      },
    },
  },
  plugins: [],
};
