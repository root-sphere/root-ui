import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Paintbrush } from 'lucide-react';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const colorPickerVariants = tv({
  base: [
    'transition-all duration-200',
    'rounded-md',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
  ],
  defaultVariants: {
    intent: 'primary',
    variant: 'outline',
  },
  slots: {
    colorButton: [
      'h-4 w-4 rounded !bg-center !bg-cover',
      'transition-all duration-200',
      'ring-offset-background',
    ],
    colorSwatch: [
      'rounded-md h-6 w-6 cursor-pointer',
      'active:scale-105 transition-transform',
      'ring-offset-background',
      'hover:ring-2 hover:ring-ring hover:ring-offset-2',
    ],
    container: ['w-full flex items-center gap-2', 'transition-colors duration-200'],
    text: ['truncate flex-1', 'transition-colors duration-200'],
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-md border bg-background',
      'px-3 py-2',
      'text-sm',
      'ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors duration-200',
    ],
  },
  variants: {
    intent: {
      accent: {
        trigger: [
          'border-accent text-accent',
          'focus-visible:border-accent focus-visible:ring-accent',
          'hover:border-accent hover:bg-accent/10',
        ],
      },
      primary: {
        trigger: [
          'border-primary text-primary',
          'focus-visible:border-primary focus-visible:ring-primary',
          'hover:border-primary hover:bg-primary/10',
        ],
      },
      secondary: {
        trigger: [
          'border-secondary text-secondary',
          'focus-visible:border-secondary focus-visible:ring-secondary',
          'hover:border-secondary hover:bg-secondary/10',
        ],
      },
      tertiary: {
        trigger: [
          'border-tertiary text-tertiary',
          'focus-visible:border-tertiary focus-visible:ring-tertiary',
          'hover:border-tertiary hover:bg-tertiary/10',
        ],
      },
      informative: {
        trigger: [
          'border-informative text-informative',
          'focus-visible:border-informative focus-visible:ring-informative',
          'hover:border-informative hover:bg-informative/10',
        ],
      },
      positive: {
        trigger: [
          'border-positive text-positive',
          'focus-visible:border-positive focus-visible:ring-positive',
          'hover:border-positive hover:bg-positive/10',
        ],
      },
      cautionary: {
        trigger: [
          'border-cautionary text-cautionary',
          'focus-visible:border-cautionary focus-visible:ring-cautionary',
          'hover:border-cautionary hover:bg-cautionary/10',
        ],
      },
      destructive: {
        trigger: [
          'border-destructive text-destructive',
          'focus-visible:border-destructive focus-visible:ring-destructive',
          'hover:border-destructive hover:bg-destructive/10',
        ],
      },
      negative: {
        trigger: [
          'border-negative text-negative',
          'focus-visible:border-negative focus-visible:ring-negative',
          'hover:border-negative hover:bg-negative/10',
        ],
      },
    },
    variant: {
      outline: '',
      solid: {
        trigger: 'border-transparent bg-secondary',
      },
    },
  },
});

export type ColorPickerVariants = VariantProps<typeof colorPickerVariants>;

export interface ColorPickerProps extends ColorPickerVariants {
  background: string;
  setBackground: (background: string) => void;
  className?: string;
}

export function ColorPicker({
  className,
  background,
  intent = 'primary',
  setBackground,
  variant = 'outline',
}: ColorPickerProps) {
  const { colorButton, colorSwatch, container, text, trigger } = colorPickerVariants({
    intent,
    variant,
  });

  const systemColors = [
    '#0066FF',
    '#6E56CF',
    '#22C55E',
    '#F97316',
    '#EC4899',
    '#EF4444',
    '#22C55E',
    '#F59E0B',
    '#3B82F6',
    '#000000',
    '#71717A',
    '#A1A1AA',
    '#D4D4D8',
    '#E4E4E7',
    '#FAFAFA',
    '#FFFFFF',
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(trigger(), !background && 'text-muted-foreground', className)}
          type="button"
        >
          <div className={container()}>
            {background ? (
              <div className={colorButton()} style={{ background }}></div>
            ) : (
              <Paintbrush className="h-4 w-4" />
            )}
            <div className={text()}>{background ? background : 'Pick a color'}</div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-wrap gap-1 mb-4">
          {systemColors.map((color) => (
            <div
              key={color}
              style={{ background: color }}
              className={colorSwatch()}
              onClick={() => setBackground(color)}
            />
          ))}
        </div>

        <Input
          value={background}
          className="col-span-2 h-8"
          onChange={(e) => setBackground(e.currentTarget.value)}
        />
      </PopoverContent>
    </Popover>
  );
}
