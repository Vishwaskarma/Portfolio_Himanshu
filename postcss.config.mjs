/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Fixed: Use correct Tailwind CSS v4 PostCSS plugin
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
