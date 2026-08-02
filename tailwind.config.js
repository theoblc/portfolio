/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      colors: {
        // Light mode - warm, calm neutrals
        primary: "#33312e",
        secondary: "#6b7f6a",
        light_secondary: "#e9e4d8",
        container: "#f4efe6",
        background: "#faf7f0",
        // Dark mode - soft, muted evening tones
        dark_primary: "#e8e3d8",
        dark_secondary: "#8fae8c",
        dark_light_secondary: "#2b2e29",
        dark_container: "#23241f",
        dark_background: "#1a1b17",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
