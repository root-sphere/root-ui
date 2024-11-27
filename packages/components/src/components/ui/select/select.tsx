import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const select = tv({
  defaultVariants: {
    intent: 'primary',
    position: 'popper',
    variant: 'outline',
  },
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
  variants: {
    intent: {
      danger: {
        trigger: [
          'border-destructive text-destructive',
          'hover:border-destructive/50',
          'focus-visible:ring-destructive',
        ],
      },
      primary: {
        trigger: [
          'border-input text-foreground',
          'hover:border-primary/50',
          'focus-visible:ring-primary',
        ],
      },
      success: {
        trigger: [
          'border-success text-success',
          'hover:border-success/50',
          'focus-visible:ring-success',
        ],
      },
      warning: {
        trigger: [
          'border-warning text-warning',
          'hover:border-warning/50',
          'focus-visible:ring-warning',
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
    <SelectPrimitive.Trigger ref={ref} className={cn(trigger(), className)} {...props}>
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
