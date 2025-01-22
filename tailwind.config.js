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
      red: "#FF6666",
    },

    fontFamily: {
      SourceSans: ["Source Sans 3", "serif"],
      Playfair: ["Playfair", "serif"],
      Cormorant: ["Cormorant Garamond", "serif"],
      Taviraj: ["Taviraj", "serif"],
      Abel: ["Abel", "serif"],
      Montserrat: ["Montserrat", "serif"],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      circle: "circle",
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/sun_shining_through_trees.avif')",
        humanisticImage: "url('/src/assets/Couch.jpg')",
      },
      screens: {
        screens: {
          xs: { min: "10px", max: "320px" },
          sm: { min: "321px", max: "768px" },
          md: { min: "769px", max: "1025px" },
          lg: { min: "1026px", max: "1279px" },
          xl: { min: "1280px" },
        },
      },
      height: {
        50: "50vh",
        60: '60vh',
        80: "80vh",
      },
    },
  },
  plugins: [],
};
