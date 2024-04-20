/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Midnight-Slate": "#13181E",
        "Calm-Azure": "#74C3FE",
        "Twilight-Azure": "#676FFE",
        "Skyline-Azure": "#6E9CFE",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
