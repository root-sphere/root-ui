import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

import { rootPaletteColors, rootSystemColors } from './color.presets';

export const colorPlugins = plugin(
  function ({ addComponents, theme }) {
    const color: CSSRuleObject = {
      '.body-md': {
        fontSize: theme('fontSize.body-md'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.body-md'),
      },
      '.body-sm': {
        fontSize: theme('fontSize.body-sm'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.body-sm'),
      },
      '.caption-md': {
        fontSize: theme('fontSize.caption-md'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.caption-md'),
      },
      '.head-2xl': {
        fontSize: theme('fontSize.head-2xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-2xl'),
      },
      '.head-3xl': {
        fontSize: theme('fontSize.head-3xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-3xl'),
      },
      '.head-4xl': {
        fontSize: theme('fontSize.head-4xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-4xl'),
      },
      '.head-5xl': {
        fontSize: theme('fontSize.head-5xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-5xl'),
      },
      // Headings
      '.head-6xl': {
        fontSize: theme('fontSize.head-6xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-6xl'),
      },
      '.head-xl': {
        fontSize: theme('fontSize.head-xl'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-xl'),
      },
      // Labels & Utility
      '.label-sm': {
        fontSize: theme('fontSize.label-sm'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.label-sm'),
      },
      '.title-lg': {
        fontSize: theme('fontSize.title-lg'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.title-lg'),
      },
      '.title-md': {
        fontSize: theme('fontSize.title-md'),
        fontWeight: '600', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.title-md'),
      },
      // Titles
      '.title-xl': {
        fontSize: theme('fontSize.title-xl'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.title-xl'),
      },
      '.tooltip-sm': {
        fontSize: theme('fontSize.tooltip-sm'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.tooltip-sm'),
      },
    };

    addComponents(color);
  },
  {
    theme: {
      extend: {
        // @see https://tailwindcss.com/docs/customizing-colors
        colors: {
          ...colors,
          ...rootPaletteColors,
          ...rootSystemColors,
          secondary: 'var(--background-color)',
          cream: 'var(--cream-color)',
          'cream-1': 'var(--cream-1-color)',
          'cream-2': 'var(--cream-2-color)',
          'cream-3': 'var(--cream-3-color)',
          inherit: 'inherit',
          main: 'var(--text-color)',
          space: 'var(--space-color)',
          'space-1': 'var(--space-1-color)',
          'space-2': 'var(--space-2-color)',
          'space-3': 'var(--space-3-color)',
          transparent: 'transparent',
        },
      },
    },
  },
);
