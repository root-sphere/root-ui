import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { Signup } from './Signup';

export default {
  component: Signup,
  title: 'Features/Signup',
};

const SignupStories = () => {
  return (
    <StorybookContent>
      <Signup />
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  args: {
    children: 'Signup',
    disabled: false,
  },
  render: SignupStories,
};
