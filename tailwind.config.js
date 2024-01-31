/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "1.5fr 1fr",
        mainpart: "2fr 0.2fr",
        cart: "1fr 1fr 0.25fr 0.25fr",
      },
      fontFamily: {
        roboto: "Roboto Mono, monospace", // sans is default tailwind and be replaced it
        // this will overwrite everything
        menu: "Rubik Doodle Shadow",
        menuTitle: "Fjalla One",
      },
    },
  },
  plugins: [],
};
