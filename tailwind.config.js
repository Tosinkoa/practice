const plugin = require("tailwindcss/plugin");

module.exports = {
  darkmode: "class",
  content: ["./pages/**/*.{js,ts,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      "my-font": ["Nunito", "sans-serif"],
      "logo-font": ["Ultra", "serif"],
      "display-font": ["Blaka Hollow", "cursive"],
      raleway: ["Raleway", "sans-serif"],
      "cursive-marker": ["Permanent Marker", "cursive"],
    },
    extend: {
      backgroundImage: {
        "showcase-image": "url('/assets/images/500nairaonly-showcase.jpeg')",
      },
      screens: {
        sm: "1px",
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        mybackground: "mybackground 2s ease-in-out infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1.2) " },
          "50%": { transform: " scale(1)" },
        },
        mybackground: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
};
