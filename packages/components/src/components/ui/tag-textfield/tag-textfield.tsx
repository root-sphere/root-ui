import { X as XIcon } from 'lucide-react';
import * as React from 'react';

import { Badge } from '../badge';
import { TextField, TextFieldInput } from '../textfield';

interface TagTextFieldContextValue {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'default' | 'lg';
  intent?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const TagTextFieldContext = React.createContext<TagTextFieldContextValue | undefined>(undefined);

function useTagTextFieldContext() {
  const context = React.useContext(TagTextFieldContext);
  if (!context) {
    throw new Error('useTagTextFieldContext must be used within TagTextFieldProvider');
  }
  return context;
}

export interface TagTextFieldProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  size?: 'sm' | 'default' | 'lg';
  intent?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  children?: React.ReactNode;
}

type TextFieldInputProps = Omit<React.ComponentProps<typeof TextFieldInput>, 'onChange'>;
interface TagTextFieldInputProps extends TextFieldInputProps {
  suggestions?: string[];
}

const TagTextFieldRoot = ({
  value,
  defaultValue,
  onChange,
  disabled,
  size = 'default',
  intent = 'secondary',
  children,
}: TagTextFieldProps) => {
  const [tags, setTags] = React.useState<string[]>(defaultValue ?? value ?? []);

  const controlled = value !== undefined;
  const currentTags = controlled ? value : tags;

  const addTag = React.useCallback(
    (tag: string) => {
      const trimmedTag = tag.trim();
      if (!trimmedTag) return;

      const newTags = [...currentTags, trimmedTag];
      if (!controlled) setTags(newTags);
      onChange?.(newTags);
    },
    [controlled, currentTags, onChange],
  );

  const removeTag = React.useCallback(
    (tag: string) => {
      const newTags = currentTags.filter((t) => t !== tag);
      if (!controlled) setTags(newTags);
      onChange?.(newTags);
    },
    [controlled, currentTags, onChange],
  );

  const contextValue: TagTextFieldContextValue = {
    tags: currentTags,
    addTag,
    removeTag,
    disabled,
    size,
    intent,
  };

  return (
    <TagTextFieldContext.Provider value={contextValue}>{children}</TagTextFieldContext.Provider>
  );
};

const TagTextFieldInput = React.forwardRef<HTMLInputElement, TagTextFieldInputProps>(
  ({ suggestions = [], ...props }, ref) => {
    const { addTag, disabled } = useTagTextFieldContext();
    const [inputValue, setInputValue] = React.useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue) {
        e.preventDefault();
        addTag(inputValue);
        setInputValue('');
      } else if (e.key === 'Backspace' && !inputValue) {
        e.preventDefault();
        // Optional: Handle backspace on empty input to remove last tag
      }
    };

    return (
      <TextField>
        <TextFieldInput
          ref={ref}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          {...props}
        />
      </TextField>
    );
  },
);
TagTextFieldInput.displayName = 'TagTextFieldInput';

const TagTextFieldTags = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  (props, ref) => {
    const { tags, removeTag, size, disabled, intent } = useTagTextFieldContext();

    return (
      <div ref={ref} className="flex flex-wrap gap-1" {...props}>
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="solid"
            intent={intent}
            className={size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}
          >
            {tag}
            {!disabled && (
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="hover:text-destructive focus-visible:outline-none"
                aria-label={`Remove ${tag}`}
              >
                <XIcon className="h-3 w-3" />
              </button>
            )}
          </Badge>
        ))}
      </div>
    );
  },
);
TagTextFieldTags.displayName = 'TagTextFieldTags';

const TagTextField = Object.assign(TagTextFieldRoot, {
  Input: TagTextFieldInput,
  Tags: TagTextFieldTags,
});

export { TagTextField };
