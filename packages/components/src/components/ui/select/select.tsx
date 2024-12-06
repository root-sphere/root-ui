import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const select = tv({
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
    icon: 'h-4 w-4 opacity-50',
    item: [
      'relative flex w-full items-center',
      'py-1.5 pl-8 pr-2',
      'text-sm',
      'rounded-sm',
      'cursor-default select-none outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    itemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
    scrollButton: 'flex items-center justify-center py-1 cursor-default',
    separator: '-mx-1 my-1 h-px bg-muted',
    trigger: [
      'inline-flex items-center justify-between gap-2',
      'whitespace-nowrap rounded-md text-sm font-medium',
      'transition-colors duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'h-10 px-4 py-2 w-full',
    ],
    viewport: 'p-1',
  },
  defaultVariants: {
    intent: 'accent',
    position: 'popper',
    variant: 'outline',
  },
  variants: {
    intent: {
      accent: {
        trigger: [
          'data-[variant=outline]:border-accent data-[variant=outline]:text-accent',
          'data-[variant=outline]:hover:bg-accent data-[variant=outline]:hover:text-accent-foreground',
          'data-[variant=solid]:border-accent data-[variant=solid]:bg-accent data-[variant=solid]:text-accent-foreground',
          'data-[variant=solid]:hover:bg-accent/90',
          'focus-visible:ring-accent',
        ],
      },
      primary: {
        trigger: [
          'data-[variant=outline]:border-primary data-[variant=outline]:text-primary',
          'data-[variant=outline]:hover:bg-primary data-[variant=outline]:hover:text-primary-foreground',
          'data-[variant=solid]:border-primary data-[variant=solid]:bg-primary data-[variant=solid]:text-primary-foreground',
          'data-[variant=solid]:hover:bg-primary/90',
          'focus-visible:ring-primary',
        ],
      },
      secondary: {
        trigger: [
          'data-[variant=outline]:border-secondary data-[variant=outline]:text-secondary',
          'data-[variant=outline]:hover:bg-secondary data-[variant=outline]:hover:text-secondary-foreground',
          'data-[variant=solid]:border-secondary data-[variant=solid]:bg-secondary data-[variant=solid]:text-secondary-foreground',
          'data-[variant=solid]:hover:bg-secondary/90',
          'focus-visible:ring-secondary',
        ],
      },
      tertiary: {
        trigger: [
          'data-[variant=outline]:border-tertiary data-[variant=outline]:text-tertiary',
          'data-[variant=outline]:hover:bg-tertiary data-[variant=outline]:hover:text-tertiary-foreground',
          'data-[variant=solid]:border-tertiary data-[variant=solid]:bg-tertiary data-[variant=solid]:text-tertiary-foreground',
          'data-[variant=solid]:hover:bg-tertiary/90',
          'focus-visible:ring-tertiary',
        ],
      },
      informative: {
        trigger: [
          'data-[variant=outline]:border-informative data-[variant=outline]:text-informative',
          'data-[variant=outline]:hover:bg-informative data-[variant=outline]:hover:text-informative-foreground',
          'data-[variant=solid]:border-informative data-[variant=solid]:bg-informative data-[variant=solid]:text-informative-foreground',
          'data-[variant=solid]:hover:bg-informative/90',
          'focus-visible:ring-informative',
        ],
      },
      positive: {
        trigger: [
          'data-[variant=outline]:border-positive data-[variant=outline]:text-positive',
          'data-[variant=outline]:hover:bg-positive data-[variant=outline]:hover:text-positive-foreground',
          'data-[variant=solid]:border-positive data-[variant=solid]:bg-positive data-[variant=solid]:text-positive-foreground',
          'data-[variant=solid]:hover:bg-positive/90',
          'focus-visible:ring-positive',
        ],
      },
      cautionary: {
        trigger: [
          'data-[variant=outline]:border-cautionary data-[variant=outline]:text-cautionary',
          'data-[variant=outline]:hover:bg-cautionary data-[variant=outline]:hover:text-cautionary-foreground',
          'data-[variant=solid]:border-cautionary data-[variant=solid]:bg-cautionary data-[variant=solid]:text-cautionary-foreground',
          'data-[variant=solid]:hover:bg-cautionary/90',
          'focus-visible:ring-cautionary',
        ],
      },
      destructive: {
        trigger: [
          'data-[variant=outline]:border-destructive data-[variant=outline]:text-destructive',
          'data-[variant=outline]:hover:bg-destructive data-[variant=outline]:hover:text-destructive-foreground',
          'data-[variant=solid]:border-destructive data-[variant=solid]:bg-destructive data-[variant=solid]:text-destructive-foreground',
          'data-[variant=solid]:hover:bg-destructive/90',
          'focus-visible:ring-destructive',
        ],
      },
      negative: {
        trigger: [
          'data-[variant=outline]:border-negative data-[variant=outline]:text-negative',
          'data-[variant=outline]:hover:bg-negative data-[variant=outline]:hover:text-negative-foreground',
          'data-[variant=solid]:border-negative data-[variant=solid]:bg-negative data-[variant=solid]:text-negative-foreground',
          'data-[variant=solid]:hover:bg-negative/90',
          'focus-visible:ring-negative',
        ],
      },
    },
    position: {
      popper: [
        'data-[side=bottom]:translate-y-1',
        'data-[side=left]:-translate-x-1',
        'data-[side=right]:translate-x-1',
        'data-[side=top]:-translate-y-1',
      ],
    },
    variant: {
      outline: {
        trigger: 'border bg-background/0 hover:bg-background/0',
      },
      solid: {
        trigger: 'border-transparent bg-secondary',
      },
    },
  },
});

export type SelectVariants = VariantProps<typeof select>;

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    SelectVariants {}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, intent, variant, ...props }, ref) => {
  const { icon, trigger } = select({ intent, variant });
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(trigger(), className)}
      data-variant={variant}
      {...props}
    >
      {props.children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className={icon()} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
  const { icon, scrollButton } = select();
  return (
    <SelectPrimitive.ScrollUpButton ref={ref} className={cn(scrollButton(), className)} {...props}>
      <ChevronUp className={icon()} />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
  const { icon, scrollButton } = select();
  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(scrollButton(), className)}
      {...props}
    >
      <ChevronDown className={icon()} />
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & VariantProps<typeof select>
>(({ children, className, position = 'popper', ...props }, ref) => {
  const { content, viewport } = select({ position });
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(content(), className)}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            viewport(),
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const { label } = select();
  return <SelectPrimitive.Label ref={ref} className={cn(label(), className)} {...props} />;
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  const { item, itemIndicator } = select();
  return (
    <SelectPrimitive.Item ref={ref} className={cn(item(), className)} {...props}>
      <span className={itemIndicator()}>
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { separator } = select();
  return <SelectPrimitive.Separator ref={ref} className={cn(separator(), className)} {...props} />;
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
