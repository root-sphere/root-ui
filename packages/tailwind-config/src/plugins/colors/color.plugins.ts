import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

import { rootPaletteColors, rootSystemColors } from './color.presets';

export const colorPlugins = plugin(function () {}, {
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
});
