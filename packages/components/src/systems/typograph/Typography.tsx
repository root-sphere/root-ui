import { tv } from 'tailwind-variants';

// Define typography styles with `tv`
export const typography = tv({
  base: [], // Base color or general text color
  defaultVariants: {
    color: 'default',
    variant: 'body1',
    weight: 'regular',
  },
  variants: {
    color: {
      danger: 'text-danger',
      primary: 'text-primary',
      secondary: 'text-secondary',
      default: 'text-black',
      muted: 'text-gray-500',
    },
    variant: {
      body1: 'text-base leading-[1.625rem] font-regular tracking-normal',
      body2: 'text-sm leading-[1.5rem] font-regular tracking-normal',
      caption: 'text-xs leading-[1.125rem] font-regular tracking-normal',
      h1: 'text-3xl leading-[2.125rem] font-semibold tracking-tight',
      h2: 'text-2xl leading-[2.25rem] font-semibold tracking-tight',
      h3: 'text-xl leading-[2.5rem] font-semibold tracking-tight',
      h4: 'text-lg leading-[2.875rem] font-semibold tracking-tight',
      h5: 'text-base leading-[3rem] font-bold tracking-tight',
      h6: 'text-sm leading-[3.625rem] font-bold tracking-tight',
      title: ['text-size-lg', 'font-bold'],
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      regular: 'font-regular',
      semibold: 'font-semibold',
    },
  },
});
