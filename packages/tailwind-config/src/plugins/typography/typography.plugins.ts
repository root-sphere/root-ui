import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

import { fontSizes, lineHeights } from './typography.tokens';

export const typographyPlugins = plugin(
  function ({ addComponents, theme }) {
    const typography: CSSRuleObject = {
      '.text-body-md': {
        fontSize: theme('fontSize.body-md'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.body-md'),
      },
      '.text-body-sm': {
        fontSize: theme('fontSize.body-sm'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.body-sm'),
      },
      '.text-caption-md': {
        fontSize: theme('fontSize.caption-md'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.caption-md'),
      },
      '.text-head-2xl': {
        fontSize: theme('fontSize.head-2xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-2xl'),
      },
      '.text-head-3xl': {
        fontSize: theme('fontSize.head-3xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-3xl'),
      },
      '.text-head-4xl': {
        fontSize: theme('fontSize.head-4xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-4xl'),
      },
      '.text-head-5xl': {
        fontSize: theme('fontSize.head-5xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-5xl'),
      },
      // Headings
      '.text-head-6xl': {
        fontSize: theme('fontSize.head-6xl'),
        fontWeight: '700', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-6xl'),
      },
      '.text-head-xl': {
        fontSize: theme('fontSize.head-xl'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.head-xl'),
      },
      // Labels & Utility
      '.text-label-sm': {
        fontSize: theme('fontSize.label-sm'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.label-sm'),
      },
      '.text-title-lg': {
        fontSize: theme('fontSize.title-lg'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.title-lg'),
      },
      '.text-title-md': {
        fontSize: theme('fontSize.title-md'),
        fontWeight: '600', // Bold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.title-md'),
      },
      // Titles
      '.text-title-xl': {
        fontSize: theme('fontSize.title-xl'),
        fontWeight: '600', // Semibold
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.title-xl'),
      },
      '.text-tooltip-sm': {
        fontSize: theme('fontSize.tooltip-sm'),
        fontWeight: '500', // Medium
        letterSpacing: '0em',
        lineHeight: theme('lineHeight.tooltip-sm'),
      },
    };

    addComponents(typography);
  },
  {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Pretendard', ...fontFamily.sans],
        },
        fontSize: {
          ...fontSizes,
        },
        lineHeight: {
          ...lineHeights,
        },
      },
    },
  },
);
