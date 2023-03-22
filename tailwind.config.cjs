/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pureDark: "#000000",
        primaryDark: "#14213d",
        accentYellow: "#fca311",
        accentWhite: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
