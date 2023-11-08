/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
        xs: "12.80px",
        sm: "14px",
        base: "16px",
        md: "20px",
        lg: "25px",
        xl: "31.25px",
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "24px",
        6: "32px",
        7: "64px",
        8: "96px",
        9: "128px",
        10: "192px",
        11: "256px",
        12: "384px",
        13: "512px",
        14: "640px",
        15: "768px",
      },
    },
    plugins: [],
  },
};
