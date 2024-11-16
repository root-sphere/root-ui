import rootPlugins from '@root-sphere/root-ui-tailwind';

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
  plugins: rootPlugins
}
