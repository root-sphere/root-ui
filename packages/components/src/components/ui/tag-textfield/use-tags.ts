import * as React from 'react';

interface UseTagsOptions {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
}

export function useTags({ value, defaultValue, onChange }: UseTagsOptions = {}) {
  const [tags, setTags] = React.useState<string[]>(defaultValue ?? value ?? []);
  const tagsSet = React.useMemo(() => new Set(value ?? tags), [value, tags]);

  const controlled = value !== undefined;
  const currentTags = controlled ? value : tags;

  const addTag = React.useCallback(
    (tag: string) => {
      const trimmedTag = tag.trim();
      if (!trimmedTag || tagsSet.has(trimmedTag)) return;

      const newTags = [...currentTags, trimmedTag];
      if (!controlled) setTags(newTags);
      onChange?.(newTags);
    },
    [controlled, currentTags, onChange, tagsSet],
  );

  const removeTag = React.useCallback(
    (tag: string) => {
      const newTags = currentTags.filter((t) => t !== tag);
      if (!controlled) setTags(newTags);
      onChange?.(newTags);
    },
    [controlled, currentTags, onChange],
  );

  return {
    tags: currentTags,
    addTag,
    removeTag,
  } as const;
}
