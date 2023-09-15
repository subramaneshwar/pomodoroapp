/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        RocknRoll: ["RocknRoll One", "sans-serif"],
       Rampart: ["Rampart One", "cursive"],
      },
    },
  },
  plugins: [],
}