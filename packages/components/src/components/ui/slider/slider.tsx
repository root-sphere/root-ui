import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

// Separate types
type ElementType = React.ElementRef<typeof SliderPrimitive.Root>;
type ElementProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

const sliderVariants = tv({
  slots: {
    root: ['relative', 'flex items-center', 'w-full min-w-32', 'touch-none select-none'],
    range: 'absolute h-full bg-primary',
    thumb: [
      'block h-5 w-5 rounded-full border-2 bg-background ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
    track: ['relative h-2 w-full grow overflow-hidden rounded-full bg-input'],
  },
  defaultVariants: {
    intent: 'default',
  },
  variants: {
    intent: {
      default: {
        thumb: ['border-primary bg-background ring-offset-background'],
        range: 'bg-primary',
        track: 'bg-primary/10',
      },
    },
  },
});

export type SliderVariants = VariantProps<typeof sliderVariants>;

const Slider = React.forwardRef<ElementType, ElementProps & SliderVariants>(
  ({ className, defaultValue, value, intent, ...props }, ref) => {
    const { range, root, thumb, track } = sliderVariants({ intent });
    const thumbs = value?.length || defaultValue?.length || 1;

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(root(), className)}
        value={value}
        defaultValue={defaultValue}
        {...props}
      >
        <SliderPrimitive.Track className={track()}>
          <SliderPrimitive.Range className={range()} />
        </SliderPrimitive.Track>
        {Array.from({ length: thumbs }, (_, i) => (
          <SliderPrimitive.Thumb key={i} className={thumb()} />
        ))}
      </SliderPrimitive.Root>
    );
  },
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, sliderVariants };
