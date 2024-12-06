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
        'accent',
        'primary',
        'secondary',
        'tertiary',
        'informative',
        'positive',
        'cautionary',
        'destructive',
        'negative',
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
          {/* Accent */}
          <div className="flex gap-4">
            <Button intent="accent" variant="outline">
              Accent Outline
            </Button>
            <Button intent="accent" variant="solid">
              Accent Solid
            </Button>
            <Button intent="accent" variant="ghost">
              Accent Ghost
            </Button>
            <Button intent="accent" variant="link">
              Accent Link
            </Button>
          </div>

          {/* Primary */}
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

          {/* Secondary */}
          <div className="flex gap-4">
            <Button intent="secondary" variant="outline">
              Secondary Outline
            </Button>
            <Button intent="secondary" variant="solid">
              Secondary Solid
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
            <Button intent="tertiary" variant="outline">
              Tertiary Outline
            </Button>
            <Button intent="tertiary" variant="solid">
              Tertiary Solid
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
          {/* Informative */}
          <div className="flex gap-4">
            <Button intent="informative" variant="outline">
              Informative Outline
            </Button>
            <Button intent="informative" variant="solid">
              Informative Solid
            </Button>
            <Button intent="informative" variant="ghost">
              Informative Ghost
            </Button>
            <Button intent="informative" variant="link">
              Informative Link
            </Button>
          </div>

          {/* Positive */}
          <div className="flex gap-4">
            <Button intent="positive" variant="outline">
              Positive Outline
            </Button>
            <Button intent="positive" variant="solid">
              Positive Solid
            </Button>
            <Button intent="positive" variant="ghost">
              Positive Ghost
            </Button>
            <Button intent="positive" variant="link">
              Positive Link
            </Button>
          </div>

          {/* Cautionary */}
          <div className="flex gap-4">
            <Button intent="cautionary" variant="outline">
              Cautionary Outline
            </Button>
            <Button intent="cautionary" variant="solid">
              Cautionary Solid
            </Button>
            <Button intent="cautionary" variant="ghost">
              Cautionary Ghost
            </Button>
            <Button intent="cautionary" variant="link">
              Cautionary Link
            </Button>
          </div>

          {/* Destructive */}
          <div className="flex gap-4">
            <Button intent="destructive" variant="outline">
              Destructive Outline
            </Button>
            <Button intent="destructive" variant="solid">
              Destructive Solid
            </Button>
            <Button intent="destructive" variant="ghost">
              Destructive Ghost
            </Button>
            <Button intent="destructive" variant="link">
              Destructive Link
            </Button>
          </div>

          {/* Negative */}
          <div className="flex gap-4">
            <Button intent="negative" variant="outline">
              Negative Outline
            </Button>
            <Button intent="negative" variant="solid">
              Negative Solid
            </Button>
            <Button intent="negative" variant="ghost">
              Negative Ghost
            </Button>
            <Button intent="negative" variant="link">
              Negative Link
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

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    intent: 'accent',
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

export const Positive: Story = {
  args: {
    children: 'Positive Button',
    intent: 'positive',
  },
};

export const Cautionary: Story = {
  args: {
    children: 'Cautionary Button',
    intent: 'cautionary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    intent: 'destructive',
  },
};

export const Informative: Story = {
  args: {
    children: 'Informative Button',
    intent: 'informative',
  },
};
