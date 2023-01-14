module.exports = {
  content: ["./src/**/*.html"],
  safelist: ["is-sticky"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
      fontSize: {
        xs: [
          "14px",
          {
            lineHeight: "1",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "2",
          },
        ],
        tiny: [
          "16px",
          {
            lineHeight: "1.75",
          },
        ],
        base: [
          "18px",
          {
            lineHeight: "1.555",
          },
        ],
        lg: [
          "28px",
          {
            lineHeight: "1.428",
          },
        ],
        xl: [
          "36px",
          {
            lineHeight: "1.277",
          },
        ],
        "2xl": [
          "68px",
          {
            lineHeight: "1.1764",
          },
        ],
      },
      colors: {
        primary: "#0B2C3D",
        secondary: "#B39359",
        body: "#494949",
      },

      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100px, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100px, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate3d(100px,0 , 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        animateSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        fadeInLeft1: "fadeInLeft 1.2s ease-in-out",
        fadeInLeft2: "fadeInLeft 1.4s ease-in-out",
        fadeInLeft3: "fadeInLeft 1.6s ease-in-out",
        fadeInLeft4: "fadeInLeft 1.8s ease-in-out",
        fadeInLeft5: "fadeInLeft 2s ease-in-out",
        fadeInLeft6: "fadeInLeft 2.3s ease-in-out",
        fadeInLeft7: "fadeInLeft 2.6s ease-in-out",
        fadeInRight: "fadeInRight 1.8s ease-in-out",
        fadeInDown: "fadeInDown 0.7s ease-in-out 0s normal none 1 running",
        animateSpin: "animateSpin 5s linear infinite",
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "570px",
          },
          "@screen md": {
            maxWidth: "750px",
          },
          "@screen lg": {
            maxWidth: "990px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
