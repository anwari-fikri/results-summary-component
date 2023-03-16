/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        /* neutral */
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",

        /* gradient */
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
      fontWeight: {
        normal: "500",
        medium: "700",
        bold: "800",
      },
    },
  },
  plugins: [],
};
