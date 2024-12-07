import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const badgeVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'whitespace-nowrap rounded-full text-xs font-semibold',
    'transition-colors duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0',
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'default',
    variant: 'outline',
  },
  variants: {
    intent: {
      accent: [
        'data-[variant=outline]:border-accent data-[variant=outline]:text-accent',
        'data-[variant=outline]:hover:bg-accent data-[variant=outline]:hover:text-accent-foreground',
        'data-[variant=solid]:border-accent data-[variant=solid]:bg-accent data-[variant=solid]:text-accent-foreground',
        'data-[variant=solid]:hover:bg-accent/90',
        'data-[variant=ghost]:text-accent hover:bg-accent/5',
        'data-[variant=link]:text-accent',
        'focus-visible:ring-accent',
      ],
      primary: [
        'data-[variant=outline]:border-primary data-[variant=outline]:text-primary',
        'data-[variant=outline]:hover:bg-primary data-[variant=outline]:hover:text-primary-foreground',
        'data-[variant=solid]:border-primary data-[variant=solid]:bg-primary data-[variant=solid]:text-primary-foreground',
        'data-[variant=solid]:hover:bg-primary/90',
        'data-[variant=ghost]:text-primary hover:bg-primary/5',
        'data-[variant=link]:text-primary',
        'focus-visible:ring-primary',
      ],
      secondary: [
        'data-[variant=outline]:border-secondary data-[variant=outline]:text-secondary',
        'data-[variant=outline]:hover:bg-secondary data-[variant=outline]:hover:text-secondary-foreground',
        'data-[variant=solid]:border-secondary data-[variant=solid]:bg-secondary data-[variant=solid]:text-secondary-foreground',
        'data-[variant=solid]:hover:bg-secondary/90',
        'data-[variant=ghost]:text-secondary hover:bg-secondary/5',
        'data-[variant=link]:text-secondary',
        'focus-visible:ring-secondary',
      ],
      tertiary: [
        'data-[variant=outline]:border-tertiary data-[variant=outline]:text-tertiary',
        'data-[variant=outline]:hover:bg-tertiary data-[variant=outline]:hover:text-tertiary-foreground',
        'data-[variant=solid]:border-tertiary data-[variant=solid]:bg-tertiary data-[variant=solid]:text-tertiary-foreground',
        'data-[variant=solid]:hover:bg-tertiary/90',
        'data-[variant=ghost]:text-tertiary hover:bg-tertiary/5',
        'data-[variant=link]:text-tertiary',
        'focus-visible:ring-tertiary',
      ],
      informative: [
        'data-[variant=outline]:border-informative data-[variant=outline]:text-informative',
        'data-[variant=outline]:hover:bg-informative data-[variant=outline]:hover:text-informative-foreground',
        'data-[variant=solid]:border-informative data-[variant=solid]:bg-informative data-[variant=solid]:text-informative-foreground',
        'data-[variant=solid]:hover:bg-informative/90',
        'data-[variant=ghost]:text-informative hover:bg-informative/5',
        'data-[variant=link]:text-informative',
        'focus-visible:ring-informative',
      ],
      positive: [
        'data-[variant=outline]:border-positive data-[variant=outline]:text-positive',
        'data-[variant=outline]:hover:bg-positive data-[variant=outline]:hover:text-positive-foreground',
        'data-[variant=solid]:border-positive data-[variant=solid]:bg-positive data-[variant=solid]:text-positive-foreground',
        'data-[variant=solid]:hover:bg-positive/90',
        'data-[variant=ghost]:text-positive hover:bg-positive/5',
        'data-[variant=link]:text-positive',
        'focus-visible:ring-positive',
      ],
      cautionary: [
        'data-[variant=outline]:border-cautionary data-[variant=outline]:text-cautionary',
        'data-[variant=outline]:hover:bg-cautionary data-[variant=outline]:hover:text-cautionary-foreground',
        'data-[variant=solid]:border-cautionary data-[variant=solid]:bg-cautionary data-[variant=solid]:text-cautionary-foreground',
        'data-[variant=solid]:hover:bg-cautionary/90',
        'data-[variant=ghost]:text-cautionary hover:bg-cautionary/5',
        'data-[variant=link]:text-cautionary',
        'focus-visible:ring-cautionary',
      ],
      destructive: [
        'data-[variant=outline]:border-destructive data-[variant=outline]:text-destructive',
        'data-[variant=outline]:hover:bg-destructive data-[variant=outline]:hover:text-destructive-foreground',
        'data-[variant=solid]:border-destructive data-[variant=solid]:bg-destructive data-[variant=solid]:text-destructive-foreground',
        'data-[variant=solid]:hover:bg-destructive/90',
        'data-[variant=ghost]:text-destructive hover:bg-destructive/5',
        'data-[variant=link]:text-destructive',
        'focus-visible:ring-destructive',
      ],
      negative: [
        'data-[variant=outline]:border-negative data-[variant=outline]:text-negative',
        'data-[variant=outline]:hover:bg-negative data-[variant=outline]:hover:text-negative-foreground',
        'data-[variant=solid]:border-negative data-[variant=solid]:bg-negative data-[variant=solid]:text-negative-foreground',
        'data-[variant=solid]:hover:bg-negative/90',
        'data-[variant=ghost]:text-negative hover:bg-negative/5',
        'data-[variant=link]:text-negative',
        'focus-visible:ring-negative',
      ],
    },
    size: {
      lg: 'h-7 px-4',
      sm: 'h-5 px-2',
      default: 'h-6 px-3',
      icon: 'h-6 w-6',
    },
    variant: {
      ghost: 'bg-transparent',
      link: 'bg-transparent underline-offset-4 hover:underline',
      outline: 'border bg-background',
      solid: 'border',
    },
  },
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

type ElementType = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<ElementType>;

interface BadgeProps extends ElementProps, BadgeVariants {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, asChild = false, intent, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        className={cn(badgeVariants({ className, intent, size, variant }))}
        data-variant={variant}
        ref={ref}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge, type BadgeProps, type BadgeVariants, badgeVariants };
