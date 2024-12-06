import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Input } from './input';

const meta = {
  args: {
    disabled: false,
    placeholder: 'Enter text...',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    intent: {
      control: 'select',
      description: 'The intent/purpose of the input which determines its color scheme',
      options: ['accent'],
    },
  },
  component: Input,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Input',
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Accent Color */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Accent Color</h3>

        <div className="flex flex-col gap-4">
          {/* Accent */}
          <div className="flex gap-4">
            <Input intent="accent" placeholder="Accent Input" />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Input disabled placeholder="Disabled Input" />
          <Input readOnly value="Read Only Input" />
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
    placeholder: 'Accent Input',
  },
};
