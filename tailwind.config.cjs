/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			colors: {
				dark: '#121316',
				darkBg: 'rgba(31,32,35,.8)',
				'dark-transparent': 'hsla(0, 0%, 7%, 0)',
				light: '#FFFFFF',
				lightBg: '',
				'light-transparent': 'hsla(5,0,7%,0)',
				light005: ' hsla(0, 0%, 100%, 0.05)',
				light010: 'hsla(0, 0%, 100%, 0.1)',
				light020: 'hsla(0, 0%, 100%, 0.2)',
				light03: 'hsla(0, 0%, 100%, 0.3)',
				light040: ' hsla(0, 0%, 100%, 0.4)',
				light060: ' hsla(0, 0%, 100%, 0.6)',
				light08: ' hsla(0, 0%, 100%, 0.8)',
				blue: ' #248aff',
				blueDark: '#217ce5',
				gray: '#C4C4C4'
			}
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			outfit: ['Outfit', 'sans-serif']
		},
		screens: {
			'2xl': { max: '1535px' },

			xl: { max: '1279px' },

			lg: { max: '1023px' },
			'min-lg': '1024px',

			md: { max: '767px' },
			minmd: '768px',

			sm: { max: '639px' }
		}
	}
};
