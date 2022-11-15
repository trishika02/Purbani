/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
    },
    extend: {
      fontFamily: {
        Dosis: ["Dosis", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bengalTheme: {
          primary: "#030852",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#ffffff",
          "base-200": "#02063f",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          bblue: "#09224a",
          bbluea: "#29375c",
          bblueb: "#073781",
          byellow: "#fbaf17",
          extend: {
            backgroundImage: {
              "place-holder":
                "url('https://res.cloudinary.com/sabbirz/image/upload/v1666192116/TbAw/blog/placeholder_sxkjde.jpg')",
            },
          },
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
