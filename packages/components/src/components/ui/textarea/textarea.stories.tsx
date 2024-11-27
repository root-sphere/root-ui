import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { Textarea } from './textarea';

export default {
  component: Textarea,
  title: 'Components/Textarea',
};

const TextareaStories = () => {
  return (
    <StorybookContent className="flex-col gap-4">
      <Textarea placeholder="Type your message here." />
      <Textarea placeholder="Disabled textarea" disabled />
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  render: TextareaStories,
};
