import { cn } from '@/lib/utils';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const textFieldVariants = tv({
  slots: {
    root: [
      'flex w-full rounded-md',
      'border bg-background',
      'ring-offset-background',
      'focus-within:outline-none focus-within:ring-2',
      'focus-within:ring-ring focus-within:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-70',
      'read-only:cursor-default read-only:opacity-90',
      'transition-colors duration-200',
      'group',
    ],
    input: [
      'h-full w-full bg-transparent',
      'text-sm',
      'placeholder:text-muted-foreground',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'group-hover:placeholder:text-muted-foreground/70',
      'read-only:cursor-default read-only:opacity-90',
    ],
    divider: [
      'w-[1px] my-auto',
      'bg-input/20',
      'transition-colors duration-200',
      'group-hover:bg-input/30',
    ],
    action: [
      'flex items-center gap-2',
      'text-font-primary',
      'transition-colors duration-200',
      'focus-visible:outline-none',
      'disabled:pointer-events-none disabled:opacity-70',
    ],
  },
  defaultVariants: {
    intent: 'default',
    size: 'default',
  },
  variants: {
    intent: {
      default: {
        root: [
          'border-input text-font-primary',
          'focus-within:border-primary focus-within:ring-primary',
          'hover:border-primary/80 hover:bg-primary/5',
        ],
        input: [
          'text-font-primary placeholder:text-font-secondary',
          'group-hover:text-font-primary/90',
        ],
        divider: ['bg-input/20'],
        action: ['text-font-primary'],
      },
    },
    size: {
      sm: {
        root: 'h-9',
        input: 'px-3 py-1 text-sm',
        divider: 'h-4',
        action: 'px-3 text-sm',
      },
      default: {
        root: 'h-10',
        input: 'px-3 py-2 text-sm',
        divider: 'h-5',
        action: 'px-3 text-sm',
      },
      lg: {
        root: 'h-11',
        input: 'px-4 py-2 text-base',
        divider: 'h-6',
        action: 'px-4 text-base',
      },
    },
  },
});

type TextFieldContextValue = {
  disabled?: boolean;
  intent?: VariantProps<typeof textFieldVariants>['intent'];
  size?: VariantProps<typeof textFieldVariants>['size'];
  styles: ReturnType<typeof textFieldVariants>;
};

const TextFieldContext = React.createContext<TextFieldContextValue>({
  styles: textFieldVariants(),
});

interface TextFieldProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof textFieldVariants> {
  disabled?: boolean;
}

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ className, intent, size, disabled, ...props }, ref) => {
    const styles = textFieldVariants({ intent, size });

    return (
      <TextFieldContext.Provider value={{ disabled, intent, size, styles }}>
        <div
          ref={ref}
          className={cn(styles.root(), className)}
          data-disabled={disabled}
          {...props}
        />
      </TextFieldContext.Provider>
    );
  },
);
TextField.displayName = 'TextField';

const TextFieldInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, disabled, ...props }, ref) => {
    const context = React.useContext(TextFieldContext);

    return (
      <input
        ref={ref}
        disabled={context.disabled || disabled}
        className={cn(context.styles.input(), className)}
        {...props}
      />
    );
  },
);
TextFieldInput.displayName = 'TextFieldInput';

const TextFieldDivider = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(TextFieldContext);

    return <div ref={ref} className={cn(context.styles.divider(), className)} {...props} />;
  },
);
TextFieldDivider.displayName = 'TextFieldDivider';

const TextFieldAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ className, disabled, ...props }, ref) => {
    const context = React.useContext(TextFieldContext);

    return (
      <button
        ref={ref}
        disabled={context.disabled || disabled}
        className={cn(context.styles.action(), className)}
        {...props}
      />
    );
  },
);
TextFieldAction.displayName = 'TextFieldAction';

export { TextField, TextFieldAction, TextFieldDivider, TextFieldInput };
export type { TextFieldProps };
