import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { Checkbox } from './checkbox';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
};

const CheckboxStories = () => {
  return (
    <StorybookContent className="flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled1" disabled />
        <label
          htmlFor="disabled1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled
        </label>
      </div>
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  render: CheckboxStories,
};
