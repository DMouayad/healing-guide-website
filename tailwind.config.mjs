
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	daisyui: {
		themes: [
			{
				'my-theme': {
					'primary': '#2B75CA',
					'primary-content': '#FFFFFF',
					'secondary': '#9CD161',
					'base-100': '#FAFBFD',
					'base-content': '#444444',
					'--sec-text': '#69719b',
					"--rounded-btn": "5px",
					"--rounded-box": "5px",
				}
			}
		],
	},
	theme: {
		extend: {
			lineHeight: {
				'13': '5rem'
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-flip"), require("daisyui")],
}
