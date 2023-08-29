import colors from 'tailwindcss/colors';
import {Config} from 'tailwindcss';
import {SPACING} from './src/@types/Spacing';

const CONFIG:Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
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
        secondary: colors.slate,
        success: colors.emerald,
        danger: colors.red,
        warning: colors.amber,
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|ring|border|text)-(primary|secondary|danger|warning|success|gray|black|white)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /(fill)-(primary|secondary|danger|warning|success|black)/,
      variants: ['hover', 'focus'],
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
    ...[1,2,3].map(number => `gap-x-${number}`),
    ...SPACING.map(value => `w-${value}`),
    ...SPACING.map(value => `h-${value}`),
  ],
  plugins: [
    // forms
  ]
}

export default CONFIG