import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'whitespace-nowrap rounded-md text-sm font-medium',
    'transition-colors duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  ],
  defaultVariants: {
    intent: 'default',
    size: 'default',
    variant: 'outline',
  },
  variants: {
    intent: {
      danger: [
        'data-[variant=outline]:border-status-negative data-[variant=outline]:text-status-negative',
        'data-[variant=outline]:hover:bg-status-negative data-[variant=outline]:hover:text-destructive-foreground',
        'data-[variant=solid]:border-status-negative data-[variant=solid]:bg-status-negative data-[variant=solid]:text-destructive-foreground',
        'data-[variant=solid]:hover:bg-status-negative/90',
        'data-[variant=ghost]:text-status-negative hover:bg-status-negative/10',
        'data-[variant=link]:text-status-negative',
        'focus-visible:ring-status-negative',
      ],
      info: [
        'data-[variant=outline]:border-status-informative data-[variant=outline]:text-status-informative',
        'data-[variant=outline]:hover:bg-status-informative data-[variant=outline]:hover:text-primary-foreground',
        'data-[variant=solid]:border-status-informative data-[variant=solid]:bg-status-informative data-[variant=solid]:text-primary-foreground',
        'data-[variant=solid]:hover:bg-status-informative/90',
        'data-[variant=ghost]:text-status-informative hover:bg-status-informative/10',
        'data-[variant=link]:text-status-informative',
        'focus-visible:ring-status-informative',
      ],
      primary: [
        'data-[variant=outline]:border-brand-primary data-[variant=outline]:text-brand-primary',
        'data-[variant=outline]:hover:bg-brand-primary data-[variant=outline]:hover:text-primary-foreground',
        'data-[variant=solid]:border-brand-primary data-[variant=solid]:bg-brand-primary data-[variant=solid]:text-primary-foreground',
        'data-[variant=solid]:hover:bg-brand-primary/90',
        'data-[variant=ghost]:text-brand-primary hover:bg-brand-primary/10',
        'data-[variant=link]:text-brand-primary',
        'focus-visible:ring-brand-primary',
      ],
      secondary: [
        'data-[variant=outline]:border-brand-secondary data-[variant=outline]:text-brand-secondary',
        'data-[variant=outline]:hover:bg-brand-secondary data-[variant=outline]:hover:text-primary-foreground',
        'data-[variant=solid]:border-brand-secondary data-[variant=solid]:bg-brand-secondary data-[variant=solid]:text-primary-foreground',
        'data-[variant=solid]:hover:bg-brand-secondary/90',
        'data-[variant=ghost]:text-brand-secondary hover:bg-brand-secondary/10',
        'data-[variant=link]:text-brand-secondary',
        'focus-visible:ring-brand-secondary',
      ],
      success: [
        'data-[variant=outline]:border-status-positive data-[variant=outline]:text-status-positive',
        'data-[variant=outline]:hover:bg-status-positive data-[variant=outline]:hover:text-success-foreground',
        'data-[variant=solid]:border-status-positive data-[variant=solid]:bg-status-positive data-[variant=solid]:text-success-foreground',
        'data-[variant=solid]:hover:bg-status-positive/90',
        'data-[variant=ghost]:text-status-positive hover:bg-status-positive/10',
        'data-[variant=link]:text-status-positive',
        'focus-visible:ring-status-positive',
      ],
      warning: [
        'data-[variant=outline]:border-status-cautionary data-[variant=outline]:text-status-cautionary',
        'data-[variant=outline]:hover:bg-status-cautionary data-[variant=outline]:hover:text-warning-foreground',
        'data-[variant=solid]:border-status-cautionary data-[variant=solid]:bg-status-cautionary data-[variant=solid]:text-warning-foreground',
        'data-[variant=solid]:hover:bg-status-cautionary/90',
        'data-[variant=ghost]:text-status-cautionary hover:bg-status-cautionary/10',
        'data-[variant=link]:text-status-cautionary',
        'focus-visible:ring-status-cautionary',
      ],
      default: [
        'data-[variant=outline]:border-input data-[variant=outline]:text-foreground',
        'data-[variant=outline]:hover:bg-muted/10 data-[variant=outline]:hover:border-ring',
        'data-[variant=solid]:border-input data-[variant=solid]:bg-foreground data-[variant=solid]:text-background',
        'data-[variant=solid]:hover:bg-foreground/90',
        'data-[variant=ghost]:text-foreground hover:bg-muted/10',
        'data-[variant=link]:text-foreground',
        'focus-visible:ring-ring',
      ],
      tertiary: [
        'data-[variant=outline]:border-brand-tertiary data-[variant=outline]:text-brand-tertiary',
        'data-[variant=outline]:hover:bg-brand-tertiary data-[variant=outline]:hover:text-primary-foreground',
        'data-[variant=solid]:border-brand-tertiary data-[variant=solid]:bg-brand-tertiary data-[variant=solid]:text-primary-foreground',
        'data-[variant=solid]:hover:bg-brand-tertiary/90',
        'data-[variant=ghost]:text-brand-tertiary hover:bg-brand-tertiary/10',
        'data-[variant=link]:text-brand-tertiary',
        'focus-visible:ring-brand-tertiary',
      ],
    },
    size: {
      lg: 'h-11 rounded-md px-8',
      sm: 'h-9 rounded-md px-3',
      default: 'h-10 px-4 py-2',
      icon: 'h-10 w-10',
    },
    variant: {
      ghost: 'bg-transparent',
      link: 'bg-transparent underline-offset-4 hover:underline',
      outline: 'border bg-background',
      solid: 'border',
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export interface ButtonProps extends ElementProps, ButtonVariants {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, intent, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ className, intent, size, variant }))}
        data-variant={variant}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
