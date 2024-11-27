import { StorybookContent } from '@/stories';
import { SelectProps } from '@radix-ui/react-select';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export default {
  component: Select,
  title: 'Components/Select',
};

const SelectTemplate = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

const SelectsStories = () => {
  return (
    <StorybookContent>
      <SelectTemplate />
    </StorybookContent>
  );
};

export const Selects: StoryObj<SelectProps> = {
  render: SelectsStories,
};
