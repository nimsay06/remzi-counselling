/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-green": "#1E393F",
      "light-green": "#B0C4B5",
      brown: "#A47251",
      "peach-brown": "#D6A485",
      khaki: "#B49C86",
      alabaster: "#F0EFE5",
    },
    screens: {
      mobile: "",
    },
    fontFamily: {
      Onest: ["Onest", "serif"],
    },
  },
  plugins: [],
};
