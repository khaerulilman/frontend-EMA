/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueCustom: "#2D53DA",
        yellowCustom: "#DDC757",
        blackCustom: "#000000",
      },
      fontFamily: {
        sans: ["Gotham", "sans-serif"],
        rounded: ["Gotham Rounded", "sans-serif"],
        "more-sugar": ['"More Sugar"', "cursive"],
      },
    },
  },
  plugins: [],
};
