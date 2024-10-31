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
    extend: {
      // @see https://tailwindcss.com/docs/customizing-colors
      colors: {
        ...colors,
        primary: 'var(--primary-color)',
        inherit: 'inherit',
        transparent: 'transparent',
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
