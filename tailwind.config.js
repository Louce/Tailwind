/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: { // même breakpoints que TW
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        myPurple: {
          100: "#8C4EEB",
          200: "#5B0CD5",
        },
      },
    },
    plugins: [],
  },
};
