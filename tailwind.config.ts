import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#09090d",
        ember: "#ff5a4f",
        cherry: "#bb2438",
        fog: "#f5efe8",
        smoke: "#a7abb8",
        line: "#1f2230",
        panel: "#11131c",
        panelSoft: "#171a25",
      },
      fontFamily: {
        display: ['"Bahnschrift"', '"Segoe UI Variable Display"', '"Trebuchet MS"', "sans-serif"],
        body: ['"Segoe UI Variable Text"', '"Segoe UI"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 90, 79, 0.14)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
