import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#7B2D6E",
          deep:    "#5A1F50",
          dark:    "#3D1238",
          light:   "#A84090",
          soft:    "#C470B0",
          mist:    "#F0DCF0",
          faint:   "#FAF2FA",
        },
        blush: {
          DEFAULT: "#F2D9ED",
          warm:    "#EBC5E0",
          deep:    "#D4A0C4",
        },
        ink:   "#1A0A17",
        ivory: "#FDF8FC",
        petal: "#F8EEF6",
        smoke: "#8B7A87",
        ash:   "#C4B0BF",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee:   "marquee 32s linear infinite",
        "fade-up": "fadeUp 1s ease both",
        "fade-in": "fadeIn 0.7s ease both",
        shimmer:   "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
