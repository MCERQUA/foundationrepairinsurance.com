// Without this file Next never ran Tailwind: the @tailwind directives shipped raw and the live site had no utilities at all
// (found by the 2026-09-27 fleet Tailwind-config sweep). tailwindcss + autoprefixer are already dependencies.
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
