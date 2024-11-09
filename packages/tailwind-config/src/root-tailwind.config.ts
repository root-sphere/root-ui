import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

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
        primary: 'var(--primary-color)',
        cream: 'var(--cream-color)',
        'cream-1': 'var(--cream-1-color)',
        'cream-2': 'var(--cream-2-color)',
        'cream-3': 'var(--cream-3-color)',
        inherit: 'inherit',
        space: 'var(--space-color)',
        'space-1': 'var(--space-1-color)',
        'space-2': 'var(--space-2-color)',
        'space-3': 'var(--space-3-color)',
        transparent: 'transparent',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      spacing: {},
      theme: {
        extend: {
          fontSize: {
            'body-1': ['var(--font-size-body-1)', 'var(--line-height-body-1)'],
            'body-2': ['var(--font-size-body-2)', 'var(--line-height-body-2)'],
            caption: ['var(--font-size-caption)', 'var(--line-height-caption)'],
            h1: ['var(--font-size-h1)', 'var(--line-height-h1)'],
            h2: ['var(--font-size-h2)', 'var(--line-height-h2)'],
            h3: ['var(--font-size-h3)', 'var(--line-height-h3)'],
            h4: ['var(--font-size-h4)', 'var(--line-height-h4)'],
            h5: ['var(--font-size-h5)', 'var(--line-height-h5)'],
            h6: ['var(--font-size-h6)', 'var(--line-height-h6)'],
            label: ['var(--font-size-label)', 'var(--line-height-label)'],
            'title-1': ['var(--font-size-title-1)', 'var(--line-height-title-1)'],
            'title-2': ['var(--font-size-title-2)', 'var(--line-height-title-2)'],
            'title-3': ['var(--font-size-title-3)', 'var(--line-height-title-3)'],
            tooltip: ['var(--font-size-tooltip)', 'var(--line-height-tooltip)'],
          },
          fontWeight: {
            bold: 'var(--font-weight-bold)',
            medium: 'var(--font-weight-medium)',
            regular: 'var(--font-weight-regular)',
            semibold: 'var(--font-weight-semibold)',
          },
          letterSpacing: {
            default: 'var(--letter-spacing-default)',
            tight: 'var(--letter-spacing-tight)',
          },
        },
      },
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
