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
    intent: 'default', // Changed to match input's default intent
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
      default: {
        // Changed from primary to default to match input
        trigger: [
          'border-input text-font-primary',
          'focus-visible:ring-primary',
          'hover:ring-2 hover:ring-primary hover:ring-offset-2',
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
  intent = 'default', // Changed to match input's default intent
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
