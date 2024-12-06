import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Badge } from './badge';

const meta = {
  args: {
    children: 'Badge',
    variant: 'solid',
  },
  argTypes: {
    asChild: {
      control: 'boolean',
      description: 'Whether to render as a child component using Radix UI Slot',
    },
    intent: {
      control: 'select',
      description: 'The intent/purpose of the badge which determines its color scheme',
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
    variant: {
      control: 'select',
      description: 'The visual style variant of the badge',
      options: ['solid', 'outline', 'ghost'],
    },
  },
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>;

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
            <Badge intent="accent" variant="outline">
              Accent Outline
            </Badge>
            <Badge intent="accent" variant="solid">
              Accent Solid
            </Badge>
            <Badge intent="accent" variant="ghost">
              Accent Ghost
            </Badge>
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Badge intent="primary" variant="outline">
              Primary Outline
            </Badge>
            <Badge intent="primary" variant="solid">
              Primary Solid
            </Badge>
            <Badge intent="primary" variant="ghost">
              Primary Ghost
            </Badge>
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Badge intent="secondary" variant="outline">
              Secondary Outline
            </Badge>
            <Badge intent="secondary" variant="solid">
              Secondary Solid
            </Badge>
            <Badge intent="secondary" variant="ghost">
              Secondary Ghost
            </Badge>
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Badge intent="tertiary" variant="outline">
              Tertiary Outline
            </Badge>
            <Badge intent="tertiary" variant="solid">
              Tertiary Solid
            </Badge>
            <Badge intent="tertiary" variant="ghost">
              Tertiary Ghost
            </Badge>
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Informative */}
          <div className="flex gap-4">
            <Badge intent="informative" variant="outline">
              Informative Outline
            </Badge>
            <Badge intent="informative" variant="solid">
              Informative Solid
            </Badge>
            <Badge intent="informative" variant="ghost">
              Informative Ghost
            </Badge>
          </div>

          {/* Positive */}
          <div className="flex gap-4">
            <Badge intent="positive" variant="outline">
              Positive Outline
            </Badge>
            <Badge intent="positive" variant="solid">
              Positive Solid
            </Badge>
            <Badge intent="positive" variant="ghost">
              Positive Ghost
            </Badge>
          </div>

          {/* Cautionary */}
          <div className="flex gap-4">
            <Badge intent="cautionary" variant="outline">
              Cautionary Outline
            </Badge>
            <Badge intent="cautionary" variant="solid">
              Cautionary Solid
            </Badge>
            <Badge intent="cautionary" variant="ghost">
              Cautionary Ghost
            </Badge>
          </div>

          {/* Destructive */}
          <div className="flex gap-4">
            <Badge intent="destructive" variant="outline">
              Destructive Outline
            </Badge>
            <Badge intent="destructive" variant="solid">
              Destructive Solid
            </Badge>
            <Badge intent="destructive" variant="ghost">
              Destructive Ghost
            </Badge>
          </div>

          {/* Negative */}
          <div className="flex gap-4">
            <Badge intent="negative" variant="outline">
              Negative Outline
            </Badge>
            <Badge intent="negative" variant="solid">
              Negative Solid
            </Badge>
            <Badge intent="negative" variant="ghost">
              Negative Ghost
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: 'Badge',
    intent: 'primary',
    variant: 'solid',
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent Badge',
    intent: 'accent',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Badge',
    intent: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Badge',
    intent: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Badge',
    intent: 'tertiary',
  },
};

export const Positive: Story = {
  args: {
    children: 'Positive Badge',
    intent: 'positive',
  },
};

export const Cautionary: Story = {
  args: {
    children: 'Cautionary Badge',
    intent: 'cautionary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Badge',
    intent: 'destructive',
  },
};

export const Informative: Story = {
  args: {
    children: 'Informative Badge',
    intent: 'informative',
  },
};
