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
    intent: 'primary',
    size: 'default',
    variant: 'outline',
  },
  variants: {
    intent: {
      danger: [
        'data-[variant=outline]:border-destructive data-[variant=outline]:text-destructive',
        'data-[variant=outline]:hover:bg-destructive data-[variant=outline]:hover:text-destructive-foreground',
        'data-[variant=solid]:border-destructive data-[variant=solid]:bg-destructive data-[variant=solid]:text-destructive-foreground',
        'data-[variant=solid]:hover:bg-destructive/90',
        'data-[variant=ghost]:text-destructive hover:bg-destructive/10',
        'data-[variant=link]:text-destructive',
        'focus-visible:ring-destructive',
      ],
      primary: [
        'data-[variant=outline]:border-input data-[variant=outline]:text-foreground',
        'data-[variant=outline]:hover:bg-primary data-[variant=outline]:hover:text-primary-foreground',
        'data-[variant=solid]:border-primary data-[variant=solid]:bg-primary data-[variant=solid]:text-primary-foreground',
        'data-[variant=solid]:hover:bg-primary/90',
        'data-[variant=ghost]:text-primary hover:bg-primary/10',
        'data-[variant=link]:text-primary',
        'focus-visible:ring-primary',
      ],
      success: [
        'data-[variant=outline]:border-success data-[variant=outline]:text-success',
        'data-[variant=outline]:hover:bg-success data-[variant=outline]:hover:text-success-foreground',
        'data-[variant=solid]:border-success data-[variant=solid]:bg-success data-[variant=solid]:text-success-foreground',
        'data-[variant=solid]:hover:bg-success/90',
        'data-[variant=ghost]:text-success hover:bg-success/10',
        'data-[variant=link]:text-success',
        'focus-visible:ring-success',
      ],
      warning: [
        'data-[variant=outline]:border-warning data-[variant=outline]:text-warning',
        'data-[variant=outline]:hover:bg-warning data-[variant=outline]:hover:text-warning-foreground',
        'data-[variant=solid]:border-warning data-[variant=solid]:bg-warning data-[variant=solid]:text-warning-foreground',
        'data-[variant=solid]:hover:bg-warning/90',
        'data-[variant=ghost]:text-warning hover:bg-warning/10',
        'data-[variant=link]:text-warning',
        'focus-visible:ring-warning',
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
