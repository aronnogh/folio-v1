/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      keyframes: {
        floting: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
        shadow: {
          "0%,100%": { transform: "scale(1,1)" },
          "50%": { transform: "scale(.85,.85)" },
        },
      },
      animation: {
        floting: "floting 2.5s infinite",
        shadow: "shadow 2.5s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
