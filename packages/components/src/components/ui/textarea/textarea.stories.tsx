import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Textarea } from './textarea';

const meta = {
  args: {
    disabled: false,
    placeholder: 'Enter text...',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    intent: {
      control: 'select',
      description: 'The intent/purpose of the textarea which determines its color scheme',
      options: ['accent'],
    },
  },
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Textarea',
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Accent */}
          <div className="flex gap-4">
            <Textarea intent="accent" placeholder="Accent Textarea" />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Textarea disabled placeholder="Disabled Textarea" />
          <Textarea readOnly value="Read Only Textarea" />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    intent: 'accent',
    placeholder: 'Enter text...',
  },
};

// Individual story for accent intent
export const Accent: Story = {
  args: {
    intent: 'accent',
    placeholder: 'Accent Textarea',
  },
};
