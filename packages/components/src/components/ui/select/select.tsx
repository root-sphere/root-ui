import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { selectVariants } from './select.variants';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

type SelectVariants = VariantProps<typeof selectVariants>;
type SelectElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
type SelectGroupElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;
type SelectValueElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
type SelectTriggerElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
type SelectContentElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
type SelectLabelElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
type SelectItemElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
type SelectScrollUpButtonElementProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollUpButton
>;
type SelectScrollDownButtonElementProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollDownButton
>;
type SelectSeparatorElementProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;

interface SelectTriggerProps extends SelectTriggerElementProps, SelectVariants {}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, intent, variant, ...props }, ref) => {
  const { icon, trigger } = selectVariants({ intent, variant });
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
  SelectScrollUpButtonElementProps
>(({ className, ...props }, ref) => {
  const { icon, scrollButton } = selectVariants();
  return (
    <SelectPrimitive.ScrollUpButton ref={ref} className={cn(scrollButton(), className)} {...props}>
      <ChevronUp className={icon()} />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollDownButtonElementProps
>(({ className, ...props }, ref) => {
  const { icon, scrollButton } = selectVariants();
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
  SelectContentElementProps
>(({ children, className, position = 'popper', ...props }, ref) => {
  const isPopper = position === 'popper';
  const { content, viewport } = selectVariants({ position });
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
          className={cn(viewport(), {
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]':
              isPopper,
          })}
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
  SelectLabelElementProps
>(({ className, ...props }, ref) => {
  const { label } = selectVariants();
  return <SelectPrimitive.Label ref={ref} className={cn(label(), className)} {...props} />;
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemElementProps
>(({ children, className, ...props }, ref) => {
  const { item, itemIndicator } = selectVariants();
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
  SelectSeparatorElementProps
>(({ className, ...props }, ref) => {
  const { separator } = selectVariants();
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
  type SelectVariants,
  type SelectElementProps,
  type SelectGroupElementProps,
  type SelectValueElementProps,
  type SelectTriggerElementProps,
  type SelectContentElementProps,
  type SelectLabelElementProps,
  type SelectItemElementProps,
  type SelectScrollUpButtonElementProps,
  type SelectScrollDownButtonElementProps,
  type SelectSeparatorElementProps,
};
