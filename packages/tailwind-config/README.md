# tailwind-config

This package is a simple tailwind config manager for your project. It allows you to easily extend the default tailwind configuration with your own customizations.

## How to apply root-ui tailwind config

```js
import RootUITailwindConfigs from '@root-sphere/root-ui-tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './node_modules/@root-sphere/root-ui/dist/**/*.{ts,tsx,js,jsx}',
    // ...
  ],
  plugins: [
    ...RootUITailwindConfigs,
  ],
};
```
