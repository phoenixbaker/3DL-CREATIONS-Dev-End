/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      minHeight: {
        "9/10": "90%",
      },
      colors: {
        "primary-red": "#BA1200",
        "primary-dark-blue": "#031927",
        "primary-blue": "#9DD1F1",
        "secondary-blue": "#508AA8",
        "tertiary-blue": "#C8E0F4",
      },
    },
  },
  plugins: [],
};
