import plugins from '@root-sphere/root-ui-tailwind';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  /**
   * @name Purge
   * @see https://tailwindcss.com/docs/content-configuration
   */
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/hooks/**/*.{ts,tsx,js,jsx}',
    './src/systems/**/*.{ts,tsx,js,jsx}',
    './src/stories/**/*.{ts,tsx,js,jsx}',
  ],
  // https://tailwindcss.com/docs/plugins#adding-base-styles
  plugins,
}
