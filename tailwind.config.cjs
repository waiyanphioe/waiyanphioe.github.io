/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#111111',
				light: '#FFFFFF',
				light005: ' hsla(0, 0%, 100%, 0.05)',
				light010: 'hsla(0, 0%, 100%, 0.1)',
				light020: 'hsla(0, 0%, 100%, 0.2)',
				light040: ' hsla(0, 0%, 100%, 0.4)',
				blue: ' #248aff',
				blueDark: '#217ce5',
				gray: '#C4C4C4'
			}
		},
		screens: {
			'2xl': { max: '1535px' },

			xl: { max: '1279px' },

			lg: { max: '1023px' },
			minlg: '1024px',

			md: { max: '767px' },
			minmd: '768px',

			sm: { max: '639px' }
		}
	},
	plugins: []
};
