/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#272727",
          "200": "#171b34",
          "300": "rgba(0, 0, 0, 0.87)",
          "400": "rgba(0, 0, 0, 0.38)",
          "500": "rgba(0, 0, 0, 0.12)",
          "600": "rgba(255, 255, 255, 0.12)",
        },
        white: "#fff",
        cornflowerblue: "#2196f3",
        black: "#000",
        aliceblue: {
          "100": "#f0f8ff",
          "200": "#e0effc",
        },
        whitesmoke: "#f4f7f5",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "reem-kufi": "'Reem Kufi'",
      },
      borderRadius: {
        "9xl": "28px",
        lg: "18px",
        "56xl": "75px",
        "31xl": "50px",
        "10xs": "3px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
