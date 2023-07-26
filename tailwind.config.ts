import colors = require('tailwindcss/colors');
import flowbite = require('flowbite/plugin');
import forms = require('@tailwindcss/forms');
import plugin = require('tailwindcss/plugin');
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
    extend: {},
    colors: {
      primary: colors.violet,
      success: colors.emerald,
      danger: colors.red,
      warning: colors.amber,
    },
  },
  safelist: [
    {
      pattern: /(bg|ring|border|text)-(black|primary|danger|warning|success)/,
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