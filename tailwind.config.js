module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "clear-blue": "#3EE9E5",
      "cool-white": "#FFFFFF",
      "dark-blue": "#093f68",
      "cool-grey": "hsl(225.5,13.8%,53.1%)",
      "very-dark-blue": "#080C20",
      "cool-red": "#FF2965",
    },
    fill: (theme) => ({
      blue: theme("#3EE9E5"),
    }),
    fontFamily: {
      body: ["Manrope", "font-sans"],
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "8px",
      full: "9999px",
      large: "45px",
    },
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      ring: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
