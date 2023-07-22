/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blueGray700: '#303b59',
				coolGray400: '#9799a8'
			},
			fontFamily: {
				HankenGroteskMedium: ['HankenGroteskMedium', 'sans-serif'],
				HankenGroteskBold: ['HankenGroteskBold', 'sans-serif'],
				HankenGroteskExtraBold: ['HankenGroteskExtraBold', 'sans-serif']
			}
		}
	},
	plugins: []
};
