export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      keyframes: {

        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(25px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },


        fadeIn: {

          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },

        },

      },

    },
  },

  plugins: [],
}