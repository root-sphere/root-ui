import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Button } from './button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Primary Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Primary Intent</h3>
        <div className="flex gap-4">
          <Button intent="primary" variant="outline">
            Primary Outline
          </Button>
          <Button intent="primary" variant="solid">
            Primary Solid
          </Button>
          <Button intent="primary" variant="ghost">
            Primary Ghost
          </Button>
          <Button intent="primary" variant="link">
            Primary Link
          </Button>
        </div>
      </div>

      {/* Success Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Success Intent</h3>
        <div className="flex gap-4">
          <Button intent="success" variant="outline">
            Outline
          </Button>
          <Button intent="success" variant="solid">
            Solid
          </Button>
          <Button intent="success" variant="ghost">
            Ghost
          </Button>
          <Button intent="success" variant="link">
            Link
          </Button>
        </div>
      </div>

      {/* Warning Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Warning Intent</h3>
        <div className="flex gap-4">
          <Button intent="warning" variant="outline">
            Outline
          </Button>
          <Button intent="warning" variant="solid">
            Solid
          </Button>
          <Button intent="warning" variant="ghost">
            Ghost
          </Button>
          <Button intent="warning" variant="link">
            Link
          </Button>
        </div>
      </div>

      {/* Danger Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Danger Intent</h3>
        <div className="flex gap-4">
          <Button intent="danger" variant="outline">
            Outline
          </Button>
          <Button intent="danger" variant="solid">
            Solid
          </Button>
          <Button intent="danger" variant="ghost">
            Ghost
          </Button>
          <Button intent="danger" variant="link">
            Link
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="solid">
            Small Button
          </Button>
          <Button size="default" variant="solid">
            Default Button
          </Button>
          <Button size="lg" variant="solid">
            Large Button
          </Button>
          <Button size="icon" variant="solid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Button disabled variant="solid">
            Disabled
          </Button>
          <Button className="cursor-wait" variant="solid">
            Loading
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    intent: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    intent: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    intent: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    intent: 'danger',
  },
};
