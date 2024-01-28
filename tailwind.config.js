/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: { sidebar: "1.5fr 1fr" },
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
