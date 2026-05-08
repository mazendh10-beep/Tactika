import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1d4ed8",
          dark: "#1e3a8a"
        },
        accent: "#e11d74",
        pitch: "#0b1727"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(225, 29, 116, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
