import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
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
        DEFAULT: '10px'
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
    ...SPACING.map(value => `w-${value}`),
    ...SPACING.map(value => `h-${value}`),
  ],
  plugins: [
    forms
  ]
}

export default CONFIG