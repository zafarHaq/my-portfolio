/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Fixed path
    "./src/components/**/*.{js,ts,jsx,tsx}", // Fixed path
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff007f",
        neonBlue: "#00ffff",
        deepPurple: "#4b0082",
      },
      fontFamily: {
        retro: ["Press Start 2P", "cursive"],
      },
    },
  },
  plugins: [],
};
