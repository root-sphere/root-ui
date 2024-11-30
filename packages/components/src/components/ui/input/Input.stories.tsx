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
      options: [
        'default',
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'info',
      ],
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
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Input intent="default" placeholder="Default Input" />
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Input intent="primary" placeholder="Primary Input" />
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Input intent="secondary" placeholder="Secondary Input" />
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Input intent="tertiary" placeholder="Tertiary Input" />
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <div className="flex gap-4">
            <Input intent="success" placeholder="Success Input" />
          </div>

          {/* Warning */}
          <div className="flex gap-4">
            <Input intent="warning" placeholder="Warning Input" />
          </div>

          {/* Danger */}
          <div className="flex gap-4">
            <Input intent="danger" placeholder="Danger Input" />
          </div>

          {/* Info */}
          <div className="flex gap-4">
            <Input intent="info" placeholder="Info Input" />
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
    intent: 'primary',
    placeholder: 'Enter text...',
  },
};

// Individual stories for each intent
export const Default: Story = {
  args: {
    intent: 'default',
    placeholder: 'Default Input',
  },
};

export const Primary: Story = {
  args: {
    intent: 'primary',
    placeholder: 'Primary Input',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    placeholder: 'Secondary Input',
  },
};

export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    placeholder: 'Tertiary Input',
  },
};

export const Success: Story = {
  args: {
    intent: 'success',
    placeholder: 'Success Input',
  },
};

export const Warning: Story = {
  args: {
    intent: 'warning',
    placeholder: 'Warning Input',
  },
};

export const Danger: Story = {
  args: {
    intent: 'danger',
    placeholder: 'Danger Input',
  },
};

export const Info: Story = {
  args: {
    intent: 'info',
    placeholder: 'Info Input',
  },
};
