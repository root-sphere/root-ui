import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

import {
  rootFontSizes,
  rootFontWeights,
  rootLetterSpacings,
  rootLineHeights,
  rootPaletteColors,
  rootSystemColors,
} from './tokens';

// addUtilities(), for registering new static utility styles
// matchUtilities(), for registering new dynamic utility styles
// addComponents(), for registering new static component styles
// matchComponents(), for registering new dynamic component styles
// addBase(), for registering new base styles
// addVariant(), for registering custom static variants
// matchVariant(), for registering custom dynamic variants
// theme(), for looking up values in the user’s theme configuration
// config(), for looking up values in the user’s Tailwind configuration
// corePlugins(), for checking if a core plugin is enabled
// e(), for manually escaping strings meant to be used in class names
export default plugin(function () {}, {
  /**
   * @see https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
   */
  darkMode: 'class',

  /**
   * @name Extends
   * @see https://tailwindcss.com/docs/theme
   */
  theme: {
    container: {
      center: true,
    },
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
      fontSize: {
        ...rootFontSizes,
      },
      fontWeight: {
        ...rootFontWeights,
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      letterSpacing: {
        ...rootLetterSpacings,
      },
      lineHeight: {
        ...rootLineHeights,
      },
      spacing: {},
    },
    screens: {
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xl: '1440px',
      xs: '375px',
    },
  },
});
