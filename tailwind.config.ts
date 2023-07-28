import colors = require('tailwindcss/colors');
import flowbite = require('flowbite/plugin');
import forms = require('@tailwindcss/forms');
import {Config} from 'tailwindcss';

const CONFIG:Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'sans': [
        'Work Sans'
      ]
    },
    extend: {
    },
    colors: {
      primary: colors.violet,
      secondary: colors.slate,
      success: colors.emerald,
      danger: colors.red,
      warning: colors.amber,
    },
    borderRadius: {
      DEFAULT: '10px'
    }
  },
  safelist: [
    {
      pattern: /(bg|ring|border|text)-(primary|secondary|danger|warning|success|black|gray)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /(fill)-(primary|secondary|danger|warning|success|black)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /rounded-(s|e)/,
    }
  ],
  plugins: [
    flowbite,
    forms
  ]
}

export default CONFIG