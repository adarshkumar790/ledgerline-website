/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 2s infinite",
      },
      keyframes: {
        blink: {
          "25%, 50%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0" },
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode when the `dark` class is added
  plugins: [],
};
