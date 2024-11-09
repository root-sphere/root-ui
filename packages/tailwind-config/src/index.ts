import RootTailwindConfig from './root-tailwind.config';

export default [
  /**
   * theme is positioned first to allow other plugins to override
   */
  RootTailwindConfig,
];

export * from './tokens';
