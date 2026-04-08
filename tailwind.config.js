/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0DA2E7",
        secondary: "#11375F",
        "body-gray": "#6B7280",
        "bg-alt": "#F3F4F6",
        "border-light": "#E5E7EB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
