/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        lighPink: "hsl(321, 100%, 78%)",
        lightRed: "hsl(0, 100%, 63%)",
        darkCyan: "hsl(192, 100%, 9%)",
        paleBlue: "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      lg: "1200px",
    },
  },
  plugins: [],
};
