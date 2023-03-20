/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    animationDelay: {
      1200: "12000ms",
      1600: "16000ms",
    },
    extend: {
      colors: {
        dark: "rgb(33,37,41)",
        mountain: "#4f7b91",
        mshadow: "#304a58",
        snow: "#ccc",
        sshadow: "#bbb",
      },
      animation: {
        cycle: "cycle 20s linear infinite",
      },
      keyframes: {
        cycle: {
          "0%": { opacity: 0 },
          "1%": { transform: "translateX(-20px)" },
          "4%": { opacity: 0 },
          "5%": { opacity: 1, transform: "translateX(0px)" },
          "17%": { opacity: 1, transform: "translateX(0px)" },
          "19%": { opacity: 0 },
          "20%": { transform: "translateX(20px)" },
          "80%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
