import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

import { rootPaletteColors, rootSystemColors } from './color.tokens';

export const colorPlugins = plugin(function () {}, {
  theme: {
    extend: {
      // @see https://tailwindcss.com/docs/customizing-colors
      colors: {
        ...colors,
        ...rootPaletteColors,
        ...rootSystemColors,
        inherit: 'inherit',
        transparent: 'transparent',
      },
    },
  },
});
