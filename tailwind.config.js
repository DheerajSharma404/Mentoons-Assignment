/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      white: "var(--white)",
      "off-white-1": "var(--off-white-1)",
      "off-white-2": "var(--off-white-2)",

      black: "var(--black)",
      "off-black-1": "var(--off-black-1)",
      "off-black-2": "var(--off-black-2)",

      gray: "var(--gray)",
      "off-gray-1": "var(--off-gray-1)",
      "off-gray-2": "var(--off-gray-2)",

      purple: "var(--purple)",
      "opac-purple": "var(--opac-purple)",
    },
    fontSize: {
      "font-12": ["var(--font-12)", { lineHeight: "var(--line-height-18)" }],
      "font-14": ["var(--font-14)", { lineHeight: "var(--line-height-20)" }],
      "font-16": ["var(--font-16)", { lineHeight: "var(--line-height-22)" }],
      "font-18": ["var(--font-18)", { lineHeight: "var(--line-height-22)" }],
      "font-20": ["var(--font-20)", { lineHeight: "var(--line-height-32)" }],
      "font-22": ["var(--font-22)", { lineHeight: "var(--line-height-32)" }],
    },
    borderRadius: {
      "radius-8": "var(--radius-8)",
      "radius-12": "var(--radius-12)",
      "radius-20": "var(--radius-20)",
      "radius-22": "var(--radius-22)",
    },
    boxShadow: {
      custom: "var(--box-shadow)",
    },
  },
};
export const plugins = [];
