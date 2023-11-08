// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from 'tailwindcss/colors';
import {Config} from 'tailwindcss';
import {SPACING} from './src/@types/Spacing';

const CONFIG: Config = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend:
			{
				boxShadow: {
					'primary-400/50': '0 0 0 2px rgba(38, 115, 255, 1)',
					'warning-400/50': '0 0 0 2px rgba(28, 115, 255, 1)',
					'secondary-400/50': '0 0 0 2px rgba(105, 105, 105, 1)',
					'error-400/50': '0 0 0 2px rgba(21, 115, 255, 1)',
					'info-400/50': '0 0 0 2px rgba(28,115, 255, 1)',
					'success-400/50': '0 0 0 2px rgba(48, 115, 255, 1)',
				},
				fontFamily: {
					'sans': [
						'Work Sans'
					]
				},
				borderRadius: {
					sm: '0.5rem',
					DEFAULT: '0.75rem',
					md: '1rem',
					lg: '1.5rem',
					xl: '2rem',
					'2xl': '2.5rem',
					'3xl': '3rem',
				},
				colors: {
					primary: colors.violet,
					secondary: colors.white,
					success: colors.emerald,
					info: colors.blue,
					error: colors.red,
					warning: colors.amber,
				},
			},
	},
	safelist: [
		{
			pattern: /(bg|ring|border|text|shadow)-(primary|secondary|error|warning|success|info|gray|white)/,
			variants: ['hover', 'focus','active'],
		},
		{
			pattern: /(fill)-(primary|secondary|error|warning|success|black)/,
			variants: ['hover', 'focus','active'],
		},
		{
			pattern: /rounded-[setb]/,
		},
		{
			pattern: /border-[se]/,
		},
		{
			pattern: /[wh]-./,
		},
		{
			pattern: /p([se])-(7|9|11)/,
			variants: ['group-[.MuiInput-adornedStart]']
		},
		...[1, 2, 3].map(number => `gap-x-${number}`),
		...SPACING.map(value => `w-${value}`),
		...SPACING.map(value => `h-${value}`),
	],
	plugins: [
		// forms
	]
}

export default CONFIG