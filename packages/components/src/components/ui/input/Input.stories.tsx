import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { Input, InputProps } from './input';

export default {
  component: Input,
  title: 'Components/Input',
};

const InputsStories = ({ children, ...others }: InputProps) => {
  return (
    <StorybookContent>
      <Input {...others}>{children}</Input>
    </StorybookContent>
  );
};

export const Inputs: StoryObj<InputProps> = {
  render: InputsStories,
};
