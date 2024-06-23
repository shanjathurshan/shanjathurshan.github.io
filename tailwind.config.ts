import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eed1c7",
          100: "#bda3a3",
          200: "#dba895",
        },
        secondary: {
          50: "#f8f8f8",
          100: "#f1f1f1",
          200: "#dcdcdc",
          300: "#c6c6c6",
          400: "#9d9d9d",
          500: "#747474",
          600: "#696969",
          700: "#474747",
          800: "#363636",
          900: "#2c2c2c",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
