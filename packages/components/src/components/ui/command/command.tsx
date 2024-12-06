import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';
import { tv } from 'tailwind-variants';

const commandVariants = tv({
  slots: {
    base: [
      'flex h-full w-full flex-col overflow-hidden rounded-md',
      'bg-popover text-popover-foreground',
    ],
    dialog: [
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium',
      '[&_[cmdk-group-heading]]:text-muted-foreground',
      '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2',
      '[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5',
      '[&_[cmdk-input]]:h-12',
      '[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3',
      '[&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
    ],
    input: [
      'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: [
      'overflow-hidden p-1 text-foreground',
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
      '[&_[cmdk-group-heading]]:text-muted-foreground',
    ],
    separator: '-mx-1 h-px bg-border',
    item: [
      'relative flex cursor-default gap-2 select-none items-center',
      'rounded-sm px-2 py-1.5 text-sm outline-none',
      'data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent',
      'data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    ],
    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',
  },
});

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={cn(commandVariants().base(), className)} {...props} />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className={commandVariants().dialog()}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(commandVariants().input(), className)}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List ref={ref} className={cn(commandVariants().list(), className)} {...props} />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className={commandVariants().empty()} {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(commandVariants().group(), className)}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(commandVariants().separator(), className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item ref={ref} className={cn(commandVariants().item(), className)} {...props} />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn(commandVariants().shortcut(), className)} {...props} />;
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
