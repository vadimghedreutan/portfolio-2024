import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");

import typography from '@tailwindcss/typography';

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./content/**/*.mdx",
	],
	theme: {
		extend: {
			fontFamily: {
				thunder_hc: "var(--font-thunder_hc)",
				mabry_pro_medium: "var(--font-mabry_pro_medium)",
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
	plugins: [
		typography,
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-dot-thick": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				}
			)
		},
	],
} satisfies Config;