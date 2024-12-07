import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Badge } from './badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
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
    size: {
      control: 'select',
      description: 'The size of the badge',
      options: ['sm', 'default', 'lg', 'icon'],
    },
    variant: {
      control: 'select',
      description: 'The visual style variant of the badge',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Badge',
    intent: 'primary',
    variant: 'solid',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
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
            <Badge intent="primary" variant="link">
              Primary Link
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
            <Badge intent="secondary" variant="link">
              Secondary Link
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
            <Badge intent="tertiary" variant="link">
              Tertiary Link
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
            <Badge intent="informative" variant="link">
              Informative Link
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
            <Badge intent="positive" variant="link">
              Positive Link
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
            <Badge intent="cautionary" variant="link">
              Cautionary Link
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
            <Badge intent="destructive" variant="link">
              Destructive Link
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
            <Badge intent="negative" variant="link">
              Negative Link
            </Badge>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Badge size="sm" variant="solid">
            Small
          </Badge>
          <Badge size="default" variant="solid">
            Default
          </Badge>
          <Badge size="lg" variant="solid">
            Large
          </Badge>
          <Badge size="icon" variant="solid">
            <span>🔥</span>
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="icon">
        <span>🔥</span>
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge>
        <span>🔥</span>
        With Icon
      </Badge>
      <Badge variant="solid">
        With Icon
        <span>🔥</span>
      </Badge>
    </div>
  ),
};
