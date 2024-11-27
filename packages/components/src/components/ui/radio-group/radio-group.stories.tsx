import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { RadioGroup, RadioGroupItem } from './radio-group';

export default {
  component: RadioGroup,
  title: 'Components/RadioGroup',
};

const RadioGroupStories = () => {
  return (
    <StorybookContent className="flex-col gap-4">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <label htmlFor="option-one">Option One</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <label htmlFor="option-two">Option Two</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" disabled />
          <label htmlFor="option-three">Option Three (Disabled)</label>
        </div>
      </RadioGroup>
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  render: RadioGroupStories,
};
