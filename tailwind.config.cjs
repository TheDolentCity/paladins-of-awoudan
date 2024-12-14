const starlightPlugin = require("@astrojs/starlight-tailwind");
const typographyPlugin = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.stone,
        gray: colors.neutral,
      },
      fontFamily: {
        sans: "'VT323', sans-serif",
        serif: "'VT323', serif",
        mono: "'VT323', mono",
      },
    },
  },
  plugins: [starlightPlugin(), typographyPlugin()],
};
