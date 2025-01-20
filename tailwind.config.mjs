/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background': '#0E0E11',
				'nose': '#1A1A1A'
			},
			fontFamily: {
				InstrumentSerif: ['InstrumentSerif'],
				MonaSans: ['MonaSans']
			},
			animation: {
				"text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards",
				"text-up": "text-up 0.8s",
			  },
			  keyframes: {
				"text-reveal": {
				  "0%": {
					transform: "translateY(100%)",
					opacity: "0",
				  },
				  "100%": {
					transform: "translateY(0)",
					opacity: "1",
				  },
				},
				"text-up": {
				  "0%": {
					transform: "translateY(100%)",
				  },
				  "100%": {
					transform: "translateY(0)",
				  },
				},
			},
		},
	},
	plugins: [],
}
