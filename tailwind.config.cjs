/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#278109",
      },
      animation: {
        dialog: "dialog 0.3s ease-in-out",
      },
      keyframes: {
        dialog: {
          "0%, 50%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
		  "100%": {
			opacity: 1,
			transform: "translateY(0px)",
		  }
        },
      },
    },
  },
  plugins: [],
};
