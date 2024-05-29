/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('./src/assets/login-background.jpg')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    // require("tailwind-scrollbar"),
  ],
};
