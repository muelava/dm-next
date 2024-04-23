import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js"
],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3ABDB5",
        "primary-light": "#56E9E0",
        "black-100": "#05152D",
      },
    },
  },
  darkMode: "media",
  plugins: [nextui()],
};
export default config;
