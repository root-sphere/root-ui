import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import * as React from 'react';

import { Tooltip } from './tooltip';

const meta = {
  title: 'Floating/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <Tooltip zIndex={1000}>
          <Tooltip.Trigger>
            <Button>Tooltip</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <div>Tooltip Content</div>
          </Tooltip.Content>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Custom Root</h3>
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Tooltip (Portal to Body)</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <div>Tooltip Content (Portaled)</div>
          </Tooltip.Content>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: (
      <Tooltip zIndex={1000}>
        <Tooltip.Trigger>
          <Button>Tooltip</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <div>Tooltip Content</div>
        </Tooltip.Content>
      </Tooltip>
    ),
  },
};

export const Advanced: Story = {
  args: {
    root: document.body,
    children: (
      <Tooltip>
        <Tooltip.Trigger>
          <Button>Advanced Tooltip</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Account Balance</div>
            <div className="text-sm text-accent">$1,234.56</div>
            <div className="text-xs text-positive">+2.3% Today</div>
          </div>
        </Tooltip.Content>
      </Tooltip>
    ),
  },
};
