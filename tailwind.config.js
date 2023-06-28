/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./posts/**/*.mdx",
	],
	theme: {
		extend: {
			fontFamily: {
				thunder_hc: "var(--font-thunder_hc)",
			},
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
				fluid_second: "repeat(auto-fit, minmax(24rem, 1fr))",
			},
			colors: {
				primary: "var(--primary)",
			},
			screens: {
				big: "1920px",
				"3xs": { max: "375px" },
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
