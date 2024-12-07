import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
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
      options: ['default'],
    },
  },
  component: Input,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Input',
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* default Color */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">default Color</h3>

        <div className="flex flex-col gap-4">
          {/* default */}
          <div className="flex gap-4">
            <Input placeholder="default Input" />
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
    intent: 'default',
    placeholder: 'Enter text...',
  },
};

// Individual story for default intent
export const Default: Story = {
  args: {
    placeholder: 'Default Input',
  },
};
