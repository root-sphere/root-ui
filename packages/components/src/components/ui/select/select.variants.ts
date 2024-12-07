import { tv } from 'tailwind-variants';

export const selectVariants = tv({
  slots: {
    content: [
      'relative z-50 min-w-[8rem] max-h-96 overflow-hidden',
      'rounded-md border bg-popover shadow-md',
      'text-popover-foreground',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
    icon: 'size-4 shrink-0 opacity-50',
    item: [
      'relative flex w-full items-center',
      'py-1.5 pl-8 pr-2',
      'text-sm font-medium',
      'rounded-sm',
      'cursor-default select-none outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    itemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
    scrollButton: 'flex items-center justify-center h-6 bg-popover',
    separator: '-mx-1 my-1 h-px bg-muted',
    trigger: [
      'inline-flex items-center justify-between gap-2',
      'whitespace-nowrap rounded-md text-sm font-medium',
      'transition-colors duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'h-10 px-4 py-2 w-full',
      '[&>svg]:ml-auto [&>svg]:size-4 [&>svg]:shrink-0',
    ],
    viewport: 'p-1',
  },
  defaultVariants: {
    intent: 'default',
    position: 'popper',
    variant: 'outline',
  },
  variants: {
    intent: {
      default: {
        trigger: [
          'data-[variant=outline]:border-input data-[variant=outline]:text-font-primary',
          'data-[variant=outline]:hover:bg-primary data-[variant=outline]:hover:text-primary-foreground',
          'data-[variant=solid]:border-input data-[variant=solid]:bg-background data-[variant=solid]:text-font-secondary',
          'data-[variant=solid]:hover:border-primary data-[variant=solid]:hover:bg-primary/90 data-[variant=solid]:hover:text-primary-foreground',
          'focus-visible:ring-primary',
        ],
        item: ['focus:bg-primary focus:text-primary-foreground'],
      },
      primary: {
        trigger: [
          'data-[variant=outline]:border-primary data-[variant=outline]:text-primary',
          'data-[variant=outline]:hover:bg-primary data-[variant=outline]:hover:text-primary-foreground',
          'data-[variant=solid]:border-primary data-[variant=solid]:bg-primary data-[variant=solid]:text-primary-foreground',
          'data-[variant=solid]:hover:bg-primary/90',
          'focus-visible:ring-primary',
        ],
        item: ['focus:bg-primary focus:text-primary-foreground'],
      },
      secondary: {
        trigger: [
          'data-[variant=outline]:border-secondary data-[variant=outline]:text-secondary',
          'data-[variant=outline]:hover:bg-secondary data-[variant=outline]:hover:text-secondary-foreground',
          'data-[variant=solid]:border-secondary data-[variant=solid]:bg-secondary data-[variant=solid]:text-secondary-foreground',
          'data-[variant=solid]:hover:bg-secondary/90',
          'focus-visible:ring-secondary',
        ],
        item: ['focus:bg-secondary focus:text-secondary-foreground'],
      },
      tertiary: {
        trigger: [
          'data-[variant=outline]:border-tertiary data-[variant=outline]:text-tertiary',
          'data-[variant=outline]:hover:bg-tertiary data-[variant=outline]:hover:text-tertiary-foreground',
          'data-[variant=solid]:border-tertiary data-[variant=solid]:bg-tertiary data-[variant=solid]:text-tertiary-foreground',
          'data-[variant=solid]:hover:bg-tertiary/90',
          'focus-visible:ring-tertiary',
        ],
        item: ['focus:bg-tertiary focus:text-tertiary-foreground'],
      },
      informative: {
        trigger: [
          'data-[variant=outline]:border-informative data-[variant=outline]:text-informative',
          'data-[variant=outline]:hover:bg-informative data-[variant=outline]:hover:text-informative-foreground',
          'data-[variant=solid]:border-informative data-[variant=solid]:bg-informative data-[variant=solid]:text-informative-foreground',
          'data-[variant=solid]:hover:bg-informative/90',
          'focus-visible:ring-informative',
        ],
        item: ['focus:bg-informative focus:text-informative-foreground'],
      },
      positive: {
        trigger: [
          'data-[variant=outline]:border-positive data-[variant=outline]:text-positive',
          'data-[variant=outline]:hover:bg-positive data-[variant=outline]:hover:text-positive-foreground',
          'data-[variant=solid]:border-positive data-[variant=solid]:bg-positive data-[variant=solid]:text-positive-foreground',
          'data-[variant=solid]:hover:bg-positive/90',
          'focus-visible:ring-positive',
        ],
        item: ['focus:bg-positive focus:text-positive-foreground'],
      },
      cautionary: {
        trigger: [
          'data-[variant=outline]:border-cautionary data-[variant=outline]:text-cautionary',
          'data-[variant=outline]:hover:bg-cautionary data-[variant=outline]:hover:text-cautionary-foreground',
          'data-[variant=solid]:border-cautionary data-[variant=solid]:bg-cautionary data-[variant=solid]:text-cautionary-foreground',
          'data-[variant=solid]:hover:bg-cautionary/90',
          'focus-visible:ring-cautionary',
        ],
        item: ['focus:bg-cautionary focus:text-cautionary-foreground'],
      },
      destructive: {
        trigger: [
          'data-[variant=outline]:border-destructive data-[variant=outline]:text-destructive',
          'data-[variant=outline]:hover:bg-destructive data-[variant=outline]:hover:text-destructive-foreground',
          'data-[variant=solid]:border-destructive data-[variant=solid]:bg-destructive data-[variant=solid]:text-destructive-foreground',
          'data-[variant=solid]:hover:bg-destructive/90',
          'focus-visible:ring-destructive',
        ],
        item: ['focus:bg-destructive focus:text-destructive-foreground'],
      },
      negative: {
        trigger: [
          'data-[variant=outline]:border-negative data-[variant=outline]:text-negative',
          'data-[variant=outline]:hover:bg-negative data-[variant=outline]:hover:text-negative-foreground',
          'data-[variant=solid]:border-negative data-[variant=solid]:bg-negative data-[variant=solid]:text-negative-foreground',
          'data-[variant=solid]:hover:bg-negative/90',
          'focus-visible:ring-negative',
        ],
        item: ['focus:bg-negative focus:text-negative-foreground'],
      },
    },
    position: {
      popper: [
        'data-[side=bottom]:translate-y-1',
        'data-[side=left]:-translate-x-1',
        'data-[side=right]:translate-x-1',
        'data-[side=top]:-translate-y-1',
      ],
      'item-aligned': [],
    },
    variant: {
      outline: {
        trigger: 'border bg-background/0',
      },
      solid: {
        trigger: 'border bg-background',
      },
    },
  },
});
