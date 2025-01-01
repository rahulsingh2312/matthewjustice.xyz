/** @type {import("tailwindcss").Config} */

export default {
	darkMode: ["className"],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
  	extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
      }
    }
  },
  plugins: [],
};