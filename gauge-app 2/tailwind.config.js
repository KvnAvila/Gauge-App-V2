/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gauge: {
          black: "#0F1419",
          blackSoft: "#1C2430",
          blackLight: "#2A3444",
          blue: "#7DB9E8",
          blueLight: "#E8F2FB",
          blueDark: "#2C5F8D",
          blueBg: "#F5FAFE",
          white: "#FFFFFF",
          gray: "#6B7280",
          grayLight: "#F4F6F8",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
