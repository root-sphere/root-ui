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
          {/* Default */}
          <div className="flex gap-4">
            <Textarea intent="default" placeholder="Default Textarea" />
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Textarea intent="primary" placeholder="Primary Textarea" />
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Textarea intent="secondary" placeholder="Secondary Textarea" />
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Textarea intent="tertiary" placeholder="Tertiary Textarea" />
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <div className="flex gap-4">
            <Textarea intent="success" placeholder="Success Textarea" />
          </div>

          {/* Warning */}
          <div className="flex gap-4">
            <Textarea intent="warning" placeholder="Warning Textarea" />
          </div>

          {/* Danger */}
          <div className="flex gap-4">
            <Textarea intent="danger" placeholder="Danger Textarea" />
          </div>

          {/* Info */}
          <div className="flex gap-4">
            <Textarea intent="info" placeholder="Info Textarea" />
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
    intent: 'primary',
    placeholder: 'Enter text...',
  },
};

// Individual stories for each intent
export const Default: Story = {
  args: {
    intent: 'default',
    placeholder: 'Default Textarea',
  },
};

export const Primary: Story = {
  args: {
    intent: 'primary',
    placeholder: 'Primary Textarea',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    placeholder: 'Secondary Textarea',
  },
};

export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    placeholder: 'Tertiary Textarea',
  },
};

export const Success: Story = {
  args: {
    intent: 'success',
    placeholder: 'Success Textarea',
  },
};

export const Warning: Story = {
  args: {
    intent: 'warning',
    placeholder: 'Warning Textarea',
  },
};

export const Danger: Story = {
  args: {
    intent: 'danger',
    placeholder: 'Danger Textarea',
  },
};

export const Info: Story = {
  args: {
    intent: 'info',
    placeholder: 'Info Textarea',
  },
};
