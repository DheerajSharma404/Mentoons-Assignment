/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "dark-gray": "var(--dark-gray)",
      "logo-red": "var(--logo-red)",
      orange: "var(--orange)",
      "off-yellow": "var(--off-yellow)",
      beige: "var(--beige)",
      teal: "var(--teal)",
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
