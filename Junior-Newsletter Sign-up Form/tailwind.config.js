/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				RobotoRegular: ['Roboto', 'sans-serif']
			},
			colors: {
				blueGray800: '#242742',
				tomato: 'hsl(4, 100%, 67%)',
				darkSlateGrey: 'hsl(234, 29%, 20%)',
				charcoalGrey: 'hsl(235, 18%, 26%)'
			},
			boxShadow: {
				primaryShadow: '0px 15px 60px 0px rgba(0, 0, 0, 0.25)',
				secondaryShadow: ' 0px 16px 32px 0px rgba(255, 97, 85, 0.50);'
			}
		}
	},
	plugins: []
};
