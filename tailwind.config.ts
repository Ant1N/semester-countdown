import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        christmas: {
          red: "#E5DEFF",
          green: "#FFDEE2",
        },
      },
      keyframes: {
        "number-spin": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "snowfall": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
      animation: {
        "number-spin": "number-spin 0.5s ease-out",
        "gradient-shift": "gradient-shift 15s ease infinite",
        "snowfall": "snowfall 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;