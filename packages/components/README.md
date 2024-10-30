# Components

This directory contains all the components that are used in the application. Each component is a separate entity that can be used in different parts of the application.

## Structure

Root UI built with TypeScript, React and TailwindCSS.

- atomics
- combinations
- forms
- layouts
- typography

## Tokens

root-ui managed by TailwindCSS. You can customize the theme by modifying the `tailwind.config.js` file.

### Intent colors

We manage below intent colors.

- cream
- space
- neutral
- primary
- info
- success
- warning
- danger
- accent

All colors have 0-10 shades and default color(4 shade) is the main color.

#### Customizing the intent colors

```css
:root{
  --primary-color:env(--primary-color,#1433ff);
  --primary-0-color:env(--primary-0-color,#e5f0ff);
  --primary-1-color:env(--primary-1-color,#cfe3ff);
  --primary-2-color:env(--primary-2-color,#a9c9ff);
  --primary-3-color:env(--primary-3-color,#75a2ff);
  --primary-4-color:env(--primary-4-color,#1433ff);
  --primary-5-color:env(--primary-5-color,#0028ff);
  --primary-6-color:env(--primary-6-color,#0019ff);
  --primary-7-color:env(--primary-7-color,#001aff);
  --primary-8-color:env(--primary-8-color,#0017e3);
  --primary-9-color:env(--primary-9-color,#000cb8);
  --primary-10-color:env(--primary-10-color,#000366);

  /* ... */
}
```
