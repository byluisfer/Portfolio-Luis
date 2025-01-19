/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#0E0E11'
			},
			fontFamily: {
				InstrumentSerif: ['InstrumentSerif'],
				MonaSans: ['MonaSans']
			}
		},
	},
	plugins: [],
}
