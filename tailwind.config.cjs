/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['PT Sans', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				brand: {
					green: 'var(--brand-green)',
					yellow: '#ffd200',
					white: '#ffffff',
					dark: '#121212'
				}
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
