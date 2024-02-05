import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-lines": "url(../public/Grid Lines.svg)",
        "grid-lines-2": "url(../public/Grid Lines 2.svg)",
      },
      colors: {
        black1: "#1F1F1F",
        gray1: "#3C3C3C",
        green: "#48B7D3",
        pink: "#F4B8C0",
        yellow: "#FFB700",
      },
    },
  },
  plugins: [],
};
export default config;
