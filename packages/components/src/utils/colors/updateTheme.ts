import { hexToHSL } from './hexToHSL';

/**
 * Type definition for CSS custom property updates
 */
export type ThemeUpdate = {
  [key in `--${string}`]: string;
};

/**
 * Updates CSS custom properties on the root element
 * @param updates - Object containing CSS custom property updates
 */
export const updateThemeVariables = (updates: ThemeUpdate): void => {
  const root = document.documentElement;
  Object.entries(updates).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};

/**
 * Type definition for theme customization
 */
export type ThemeCustomization = {
  colors: {
    'accent-foreground': string;
    'muted-foreground': string;
    'primary-foreground': string;
    'secondary-foreground': string;
    accent: string;
    background: string;
    border: string;
    foreground: string;
    muted: string;
    primary: string;
    secondary: string;
  };
  typography: {
    fontSize: number;
    lineHeight: number;
  };
};

/**
 * Updates all theme variables based on the customization object
 */
export const updateTheme = (customization: Partial<ThemeCustomization>): void => {
  const { colors, typography } = customization;

  if (colors) {
    const colorUpdates: ThemeUpdate = {};
    Object.entries(colors).forEach(([key, value]) => {
      if (value) {
        colorUpdates[`--${key}`] = hexToHSL(value);
      }
    });
    updateThemeVariables(colorUpdates);
  }

  if (typography) {
    const { fontSize, lineHeight } = typography;
    if (fontSize) {
      document.documentElement.style.fontSize = `${fontSize}px`;
    }
    if (lineHeight) {
      document.documentElement.style.setProperty('--line-height-base', lineHeight.toString());
    }
  }
};
