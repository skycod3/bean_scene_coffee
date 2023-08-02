/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display", "serif"],
        banner: ["Clicker Script", "cursive"],
      },
      colors: {
        primary: "#603809",
        "accent-400": "#F9C06A",
        "accent-200": "#FFEED8",
        "accent-100": "#FFF9F1",
      },
      zIndex: {
        1: 1,
        "-1": "-1",
        "-2": "-2",
      },
    },
  },
  plugins: [
    ({ addComponents, addUtilities, theme }) => {
      addComponents({
        ".container": {
          "--fluid-block-min": "1.75rem",
          "--fluid-block-base": "var(--growth-factor, 3vw + 0.5rem)",
          "--fluid-block-max": "2.6rem",
          marginInline: "auto",
          maxWidth: "min(100% - 2rem, var(--max-width, 73.75rem))",
          paddingBlock: "clamp(var(--fluid-block-min), var(--fluid-block-base), var(--fluid-block-max))",
        },
      });
      addUtilities({
        ".flow > * + *": {
          "margin-block-start": "var(--flow-space, 1em)",
        },
        ".text-balance": {
          "text-wrap": "balance",
        },
      });
    },
  ],
};
