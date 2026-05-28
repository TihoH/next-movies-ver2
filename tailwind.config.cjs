/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "title-gradient":
          "radial-gradient(circle, rgba(82,51,74,1) 0%, rgba(56,21,110,1) 88%)",
      },
    },
  },
  plugins: [],
};
