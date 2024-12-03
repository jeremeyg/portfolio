/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      doodle: "url('/doodle.jpg')",
      doodleLowtempt: "url('/doodle-lowtempt.jpg')",
    },
    animation: {
      "loop-scroll": "loop-scroll 50s linear infinite",
    },
    colors: {
      zeus: "var(--zeus)",
      fallGreen: "var(--fall-green)",
      plum: "var(--plum)",
      ripeLemon: "var(--ripe-lemon)",
      sapling: "var(--sapling)",
      heavyMetal: "var(--heavy-metal)",
      sunflower: "var(--sunflower)",
      appleBlossom: "var(--apple-blossom)",
      niqueYellow: "var(--nique-yellow)",
      beige: "var(--beige)",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },

  plugins: [daisyui],
};
