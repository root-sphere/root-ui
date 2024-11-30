import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Button } from './button';

const meta = {
  args: {
    children: 'Button',
    disabled: false,
    size: 'default',
    variant: 'solid',
  },
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component using Radix UI Slot',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    intent: {
      control: 'select',
      description: 'The intent/purpose of the button which determines its color scheme',
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
    size: {
      control: 'select',
      description: 'The size of the button',
      options: ['sm', 'default', 'lg', 'icon'],
    },
    variant: {
      control: 'select',
      description: 'The visual style variant of the button',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

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
            <Button intent="default" variant="solid">
              Default Solid
            </Button>
            <Button intent="default" variant="outline">
              Default Outline
            </Button>
            <Button intent="default" variant="ghost">
              Default Ghost
            </Button>
            <Button intent="default" variant="link">
              Default Link
            </Button>
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Button intent="primary" variant="solid">
              Primary Solid
            </Button>
            <Button intent="primary" variant="outline">
              Primary Outline
            </Button>
            <Button intent="primary" variant="ghost">
              Primary Ghost
            </Button>
            <Button intent="primary" variant="link">
              Primary Link
            </Button>
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Button intent="secondary" variant="solid">
              Secondary Solid
            </Button>
            <Button intent="secondary" variant="outline">
              Secondary Outline
            </Button>
            <Button intent="secondary" variant="ghost">
              Secondary Ghost
            </Button>
            <Button intent="secondary" variant="link">
              Secondary Link
            </Button>
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Button intent="tertiary" variant="solid">
              Tertiary Solid
            </Button>
            <Button intent="tertiary" variant="outline">
              Tertiary Outline
            </Button>
            <Button intent="tertiary" variant="ghost">
              Tertiary Ghost
            </Button>
            <Button intent="tertiary" variant="link">
              Tertiary Link
            </Button>
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <div className="flex gap-4">
            <Button intent="success" variant="solid">
              Success Solid
            </Button>
            <Button intent="success" variant="outline">
              Success Outline
            </Button>
            <Button intent="success" variant="ghost">
              Success Ghost
            </Button>
            <Button intent="success" variant="link">
              Success Link
            </Button>
          </div>

          {/* Warning */}
          <div className="flex gap-4">
            <Button intent="warning" variant="solid">
              Warning Solid
            </Button>
            <Button intent="warning" variant="outline">
              Warning Outline
            </Button>
            <Button intent="warning" variant="ghost">
              Warning Ghost
            </Button>
            <Button intent="warning" variant="link">
              Warning Link
            </Button>
          </div>

          {/* Danger */}
          <div className="flex gap-4">
            <Button intent="danger" variant="solid">
              Danger Solid
            </Button>
            <Button intent="danger" variant="outline">
              Danger Outline
            </Button>
            <Button intent="danger" variant="ghost">
              Danger Ghost
            </Button>
            <Button intent="danger" variant="link">
              Danger Link
            </Button>
          </div>

          {/* Info */}
          <div className="flex gap-4">
            <Button intent="info" variant="solid">
              Info Solid
            </Button>
            <Button intent="info" variant="outline">
              Info Outline
            </Button>
            <Button intent="info" variant="ghost">
              Info Ghost
            </Button>
            <Button intent="info" variant="link">
              Info Link
            </Button>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
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
          <Button disabled>Disabled</Button>
          <Button className="cursor-wait">Loading</Button>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: 'Button',
    intent: 'primary',
    size: 'default',
    variant: 'solid',
  },
};

// Individual stories for each intent
export const Default: Story = {
  args: {
    children: 'Default Button',
    intent: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    intent: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    intent: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    intent: 'tertiary',
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

export const Info: Story = {
  args: {
    children: 'Info Button',
    intent: 'info',
  },
};
