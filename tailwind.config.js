/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "1.5fr 1fr",
        mainpart: "2fr 0.2fr",
        cart: "1fr 1fr 0.25fr 0.25fr",
        booking: "0.2fr 1fr 0.02fr 0.2fr",
      },
      fontFamily: {
        roboto: "Roboto Mono, monospace ,sans-serif",

        menu: "Rubik Doodle Shadow,sans-serif",

        menuTitle: "Fjalla One,sans-serif",
      },
    },
  },
  plugins: [],
};
