'use client';

import { preventDefault } from '@/utils/dom';
import { useMergeRefs } from '@floating-ui/react';
import { X as XIcon } from 'lucide-react';
import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { Badge } from '../badge';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { TextField, TextFieldInput } from '../textfield';
import { useTags } from './use-tags';

const tagTextFieldVariants = tv({
  slots: {
    root: ['flex flex-col gap-2 w-full max-w-xs'],
    input: ['w-full'],
    panel: [
      'w-full rounded-md border bg-popover p-1',
      'shadow-md outline-none',
      'animate-in fade-in-0 zoom-in-95',
      'w-[--radix-popover-trigger-width]',
      'max-h-[300px] overflow-y-auto',
    ],
    suggestion: [
      'relative',
      'w-full',
      'flex items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'cursor-default select-none',
      'transition-colors duration-150',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    tags: ['flex flex-wrap gap-1'],
  },
  defaultVariants: {
    intent: 'accent',
    size: 'default',
  },
  variants: {
    intent: {
      accent: {},
      primary: {},
      secondary: {},
      tertiary: {},
      informative: {},
      positive: {},
      cautionary: {},
      destructive: {},
      negative: {},
    },
    size: {
      sm: {},
      default: {},
      lg: {},
    },
    active: {
      true: {
        input: 'bg-accent text-accent-foreground',
      },
    },
  },
});

type TagTextFieldVariants = VariantProps<typeof tagTextFieldVariants>;

interface TagTextFieldContextValue {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  disabled?: boolean;
  size?: TagTextFieldVariants['size'];
  intent?: TagTextFieldVariants['intent'];
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
  size?: TagTextFieldVariants['size'];
  intent?: TagTextFieldVariants['intent'];
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
  size,
  intent = 'accent',
  children,
  className,
}: TagTextFieldProps) => {
  const { tags, addTag, removeTag } = useTags({ value, defaultValue, onChange });

  const contextValue: TagTextFieldContextValue = React.useMemo(() => {
    return {
      tags,
      addTag,
      removeTag,
      disabled,
      size,
      intent,
    };
  }, [tags, addTag, removeTag, disabled, size, intent]);

  return (
    <TagTextFieldContext.Provider value={contextValue}>
      <div className={tagTextFieldVariants().root({ class: className })}>{children}</div>
    </TagTextFieldContext.Provider>
  );
};

const TagTextFieldInput = React.forwardRef<HTMLInputElement, TagTextFieldInputProps>(
  ({ suggestions = [], ...props }, ref) => {
    const { addTag, removeTag, tags, disabled, size, intent } = useTagTextFieldContext();
    const [inputValue, setInputValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const mergedRefs = useMergeRefs([inputRef, ref]);

    const suggestionsSet = React.useMemo(() => {
      return new Set(suggestions);
    }, [suggestions]);

    const tagsSet = React.useMemo(() => {
      return new Set(tags);
    }, [tags]);

    const filteredSuggestions = React.useMemo(() => {
      return Array.from(suggestionsSet).filter((suggestion) => {
        const isInSuggestions = suggestion.toLowerCase().includes(inputValue.toLowerCase());
        const isInTags = !tagsSet.has(suggestion);
        return isInSuggestions && isInTags;
      });
    }, [suggestionsSet, inputValue, tagsSet]);

    const selectSuggestion = React.useCallback(
      (suggestion: string) => {
        addTag(suggestion);
        setInputValue('');
        setIsOpen(false);
        setActiveIndex(-1);
        inputRef.current?.focus();
      },
      [addTag],
    );

    const navigateSuggestions = React.useCallback(
      (direction: 'up' | 'down') => {
        if (filteredSuggestions.length === 0) {
          return;
        }

        setActiveIndex((prev) => {
          if (direction === 'down') {
            if (prev >= filteredSuggestions.length - 1) {
              return 0;
            }
            return prev + 1;
          } else {
            if (prev <= 0) {
              return filteredSuggestions.length - 1;
            }
            return prev - 1;
          }
        });
      },
      [filteredSuggestions],
    );

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
          case 'Enter': {
            e.preventDefault();
            if (activeIndex >= 0 && filteredSuggestions[activeIndex]) {
              selectSuggestion(filteredSuggestions[activeIndex]);
            } else if (inputValue) {
              selectSuggestion(inputValue);
            }
            break;
          }
          case 'Tab': {
            if (activeIndex >= 0 && filteredSuggestions[activeIndex]) {
              e.preventDefault();
              selectSuggestion(filteredSuggestions[activeIndex]);
            }
            break;
          }
          case 'Backspace': {
            if (!inputValue && tags.length > 0) {
              e.preventDefault();
              removeTag(tags[tags.length - 1]);
            }
            break;
          }
          case 'ArrowDown': {
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
            }
            navigateSuggestions('down');
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
            }
            navigateSuggestions('up');
            break;
          }
          case 'Escape': {
            e.preventDefault();
            setIsOpen(false);
            setActiveIndex(-1);
            inputRef.current?.blur();
            break;
          }
        }
      },
      [
        activeIndex,
        filteredSuggestions,
        inputValue,
        selectSuggestion,
        tags,
        removeTag,
        isOpen,
        navigateSuggestions,
      ],
    );

    const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      setIsOpen(true);
      setActiveIndex(-1);
    }, []);

    const handleBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      const isClickingPopover = e.relatedTarget?.closest('[role="listbox"]');
      const isClickingInput = e.relatedTarget?.closest('input');
      if (!isClickingPopover && !isClickingInput) {
        setIsOpen(false);
      }
    }, []);

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <TextField size={size}>
            <TextFieldInput
              ref={mergedRefs}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              disabled={disabled}
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="tag-suggestions"
              aria-activedescendant={
                activeIndex >= 0 ? `suggestion-${filteredSuggestions[activeIndex]}` : undefined
              }
              {...props}
            />
          </TextField>
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={preventDefault}
          className={tagTextFieldVariants().panel()}
          align="start"
          id="tag-suggestions"
          role="listbox"
          onKeyDown={(e) => {
            if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
              e.preventDefault();
            }
          }}
        >
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <button
                key={suggestion}
                id={`suggestion-${suggestion}`}
                role="option"
                aria-selected={activeIndex === index}
                data-selected={activeIndex === index}
                className={tagTextFieldVariants().suggestion()}
                onClick={() => selectSuggestion(suggestion)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                type="button"
                tabIndex={activeIndex === index ? 0 : -1}
              >
                {suggestion}
              </button>
            ))
          ) : inputValue ? (
            <button
              role="option"
              aria-selected={activeIndex === 0}
              data-selected={activeIndex === 0}
              className={tagTextFieldVariants().suggestion()}
              onClick={() => selectSuggestion(inputValue)}
              onMouseEnter={() => setActiveIndex(0)}
              onFocus={() => setActiveIndex(0)}
              type="button"
              tabIndex={activeIndex === 0 ? 0 : -1}
            >
              {`Add "${inputValue}"`}
            </button>
          ) : null}
        </PopoverContent>
      </Popover>
    );
  },
);
TagTextFieldInput.displayName = 'TagTextFieldInput';

const TagTextFieldTags = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  (props, ref) => {
    const { tags, removeTag, size, disabled, intent } = useTagTextFieldContext();

    return (
      <div ref={ref} className={tagTextFieldVariants().tags()} {...props}>
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="solid"
            intent={intent ?? 'secondary'}
            className={size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}
          >
            {tag}
            {!disabled && (
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-1 hover:text-destructive focus-visible:outline-none"
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

export { TagTextField, tagTextFieldVariants };
