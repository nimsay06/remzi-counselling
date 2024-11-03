/** @type {import('tailwindcss').Config} */

import { MaterialTailwindTheme } from "@material-tailwind/react";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-green": "#1F5A67",
      "light-green": "#A9D9B6",
      caramel: "#C77B48",
      "peach-brown": "#E5AB87",
      khaki: "#B49C86",
      parchment: "#EDE9CC",
      main: "#FAFAF1",
    },
    screens: {
      mobile: "",
    },
    fontFamily: {
      Onest: ["Onest", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/TreesAndPath.jpeg')",
      },
    },
  },
  plugins: [MaterialTailwindTheme],
};
