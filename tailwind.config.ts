// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import colors from 'tailwindcss/colors';
import {Config} from 'tailwindcss';
import {SPACING} from './src/@types/Spacing';
import {COLORS} from "./src/@types/Color";

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
      // borderRadius: {
      //   sm: '0.5rem',
      //   DEFAULT: '0.75rem',
      //   md: '1rem',
      //   lg: '1.5rem',
      //   xl: '2rem',
      //   '2xl': '2.5rem',
      //   '3xl': '3rem',
      // },
      colors: {
        primary: colors.blue,
        secondary: colors.white,
        success: colors.emerald,
        info: colors.sky,
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
    {
      pattern: /text-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    ...[1,2,3].map(number => `gap-x-${number}`),
    ...SPACING.map(value => `w-${value}`),
    ...COLORS.map(color => `accent-${color}-500`),
  ],
  plugins: [
    // forms
  ]
}

export default CONFIG