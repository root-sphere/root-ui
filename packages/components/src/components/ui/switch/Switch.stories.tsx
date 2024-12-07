import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
  argTypes: {
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the switch is checked by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    size: {
      control: 'select',
      description: 'The size of the switch',
      options: ['sm', 'md', 'lg'],
    },
  },
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Switch',
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex gap-4">
          <Switch defaultChecked size="sm" />
          <Switch defaultChecked />
          <Switch defaultChecked size="lg" />
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Switch defaultChecked disabled />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    defaultChecked: true,
    size: 'default',
  },
};

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
};
