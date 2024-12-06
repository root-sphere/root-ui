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
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors duration-200',
      'group/field',
    ],
    input: [
      'h-full w-full bg-transparent',
      'text-sm',
      'placeholder:text-muted-foreground',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'group-hover/field:placeholder:text-muted-foreground/70',
    ],
    divider: [
      'w-[1px] my-auto',
      'bg-accent/20',
      'transition-colors duration-200',
      'group-hover/field:bg-accent/30',
    ],
    action: [
      'flex items-center gap-2',
      'text-accent',
      'transition-colors duration-200',
      'focus-visible:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
  },
  defaultVariants: {
    intent: 'accent',
    size: 'default',
  },
  variants: {
    intent: {
      accent: {
        root: [
          'border-accent text-accent',
          'focus-within:border-accent focus-within:ring-accent',
          'hover:border-accent/80 hover:bg-accent/5',
        ],
        input: ['text-accent placeholder:text-accent/50', 'group-hover/field:text-accent/90'],
        divider: ['bg-accent/20'],
        action: ['text-accent'],
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
