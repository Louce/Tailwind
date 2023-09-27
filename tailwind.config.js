/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./src/tutos/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // même breakpoints que TW
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        base: '18px',
      },
      colors: {
        myPurple: {
          100: "#8C4EEB",
          200: "#5B0CD5",
        },
      },
      screens: {
        xs: '350px',
        xxs: '250px',
      },
    },
    plugins: [],
  },
};
