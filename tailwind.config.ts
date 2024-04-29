import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#16a34a",
          secondary: "#14b8a6",
          accent: "#00d3d5",
          neutral: "#04040a",
          "base-100": "#fffbff",
          info: "#00daff",
          success: "#00ff80",
          warning: "#d3a100",
          error: "#ff628c",
        },
      },
    ],
  },

  plugins: [daisyui],
};
export default config;
