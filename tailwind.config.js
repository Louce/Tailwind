/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js}"],
  content: ["./src/my_course/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
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
      colors: {
        myPurple: {
          100: "#8C4EEB",
          200: "#5B0CD5",
        },
        beige: "#ffedcd",
        actif: "#8a63d2",
        inactif: "#c5c0b8",
      },
      screens: {
        xs: '350px',
        xxs: '250px',
      },
      spacing: {
        '5px': '5px',
        30: '30px',
        22: '22%',
      },
      transitionDuration: {
        2000: '2s',
      },
    },
    plugins: [],
  },
};
