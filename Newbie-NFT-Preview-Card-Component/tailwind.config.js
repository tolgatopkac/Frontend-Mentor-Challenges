/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(215,51%,70%)",
        cyan: "hsl(178,100%,50%)",
        mainDarkBlue: "hsl(217, 54%, 11%)",
        cardDarkBlue: "hsl(216, 50%, 16%)",
        lineDarkBlue: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
