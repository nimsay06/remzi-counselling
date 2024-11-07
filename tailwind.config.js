/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-green": "#194D52",
      "light-green": "#A9D9B6",
      caramel: "#C77B48",
      "peach-brown": "#E5AB87",
      khaki: "#B49C86",
      parchment: "#EDE9CC",
      main: "#FEF2E3",
      sage: "#A8C3A0",
      teal: "#66B2B2",
      lightCyan: "#CDEDF6",
      slate: "#707070",
      orangePeach: "#FFD9B3",
    },
    screens: {
      mobile: "",
    },
    fontFamily: {
      SourceSans: ["Source Sans 3", "serif"],
      Playfair: ["Playfair", "serif"],
      Cormorant: ["Cormorant Garamond", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/sun_shining_through_trees.avif')",
      },
    },
  },
  plugins: [],
};
