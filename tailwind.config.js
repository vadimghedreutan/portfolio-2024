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
				fluid: "repeat(auto-fit, minmax(19rem, 1fr))",
				fluid_second: "repeat(auto-fit, minmax(26rem, 1fr))",
			},
			colors: {
				primary: "var(--primary)",
				clr_first: "var(--clr-first)",
				clr_second: "var(--clr-second)",
				clr_third: "var(--clr-third)",
				clr_dark: "var(--clr-dark)",
				clr_theme_dark: "var(--clr-theme-dark)",
				clr_theme_white: "var(--clr-theme-white)",
			},
			screens: {
				big: "1920px",
				"3xs": { max: "375px" },
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
