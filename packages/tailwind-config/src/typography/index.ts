export type RootTypoGraphyValue = {
  'font-size': string;
  'line-height': string;
  'font-weight': string;
  'letter-spacing': string;
};

export const typographies = {
  'body-1': {
    'font-size': '1rem',
    'font-weight': '400',
    'letter-spacing': '0em',
    'line-height': '1.5rem',
  },
  'body-2': {
    'font-size': '0.875rem',
    'font-weight': '400',
    'letter-spacing': '0em',
    'line-height': '1.25rem',
  },
  'body-3': {
    'font-size': '0.75rem',
    'font-weight': '400',
    'letter-spacing': '0em',
    'line-height': '1rem',
  },
  caption: {
    'font-size': '0.75rem',
    'font-weight': '400',
    'letter-spacing': '0em',
    'line-height': '1rem',
  },
  'h-1': {
    'font-size': '0.75rem',
    'font-weight': '700',
    'letter-spacing': '-0.05em',
    'line-height': '1rem',
  },
  'h-2': {
    'font-size': '0.875rem',
    'font-weight': '700',
    'letter-spacing': '-0.05em',
    'line-height': '1.25rem',
  },
  'h-3': {
    'font-size': '1rem',
    'font-weight': '600',
    'letter-spacing': '-0.05em',
    'line-height': '1.5rem',
  },
  'h-4': {
    'font-size': '1.125rem',
    'font-weight': '600',
    'letter-spacing': '-0.05em',
    'line-height': '1.75rem',
  },
  'h-5': {
    'font-size': '1.25rem',
    'font-weight': '600',
    'letter-spacing': '-0.05em',
    'line-height': '1.75rem',
  },
  'h-6': {
    'font-size': '1.5rem',
    'font-weight': '500',
    'letter-spacing': '-0.05em',
    'line-height': '2rem',
  },
  label: {
    'font-size': '0.75rem',
    'font-weight': '400',
    'letter-spacing': '0em',
    'line-height': '1rem',
  },
  'title-1': {
    'font-size': '2rem',
    'font-weight': '500',
    'letter-spacing': '-0.05em',
    'line-height': '2.5rem',
  },
  'title-2': {
    'font-size': '2.5rem',
    'font-weight': '500',
    'letter-spacing': '-0.05em',
    'line-height': '3rem',
  },
  'title-3': {
    'font-size': '3rem',
    'font-weight': '500',
    'letter-spacing': '-0.05em',
    'line-height': '3.5rem',
  },
  tooltip: {
    'font-size': '0.75rem',
    'font-weight': '400',
    'letter-spacing': '0em',
    'line-height': '1rem',
  },
} satisfies Record<string, RootTypoGraphyValue>;

export type Typography = keyof typeof typographies;
