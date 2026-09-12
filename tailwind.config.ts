import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050914",
          900: "#0a1128",
          850: "#0d1730",
          800: "#101f3d",
          700: "#152a52",
          600: "#1c3a6e",
          500: "#254d8f",
        },
        ink: {
          950: "#040711",
        },
        paper: {
          50: "#fbfbfa",
          100: "#f5f5f2",
          200: "#ececE6",
        },
        cyan: {
          400: "#4fd8e8",
          500: "#22b8cf",
          600: "#0e93a8",
        },
        gold: {
          50: "#fbf5e8",
          300: "#ecd493",
          400: "#e8c46a",
          500: "#d4a94a",
          600: "#b8892f",
          700: "#8f6a20",
        },
        status: {
          low: "#1e8f5f",
          review: "#c9922a",
          high: "#c4392b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, rgba(10,17,40,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,17,40,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        "tech-sm": "0 1px 0 0 rgba(255,255,255,0.06) inset",
        panel: "0 20px 60px -20px rgba(4,7,17,0.45)",
      },
      animation: {
        "pulse-slow": "pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow-dash": "flow-dash 20s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        "flow-dash": {
          to: { strokeDashoffset: "-1000" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
