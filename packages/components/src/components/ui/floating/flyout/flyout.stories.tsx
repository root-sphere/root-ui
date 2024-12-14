import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import * as React from 'react';

import { Flyout } from './flyout';

const meta = {
  title: 'Floating/Flyout',
  component: Flyout,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Flyout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <Flyout>
          <Flyout.Trigger>
            <Button>Toggle</Button>
          </Flyout.Trigger>
          <Flyout.Content>
            <div className="p-4 bg-background">Flyout Content</div>
          </Flyout.Content>
        </Flyout>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Custom Root</h3>
        <Flyout root={document.body}>
          <Flyout.Trigger>
            <Button>Toggle (Portal to Body)</Button>
          </Flyout.Trigger>
          <Flyout.Content>
            <div className="p-4 bg-background">Flyout Content (Portaled)</div>
          </Flyout.Content>
        </Flyout>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: (
      <Flyout root={document.body}>
        <Flyout.Trigger>
          <Button>Toggle</Button>
        </Flyout.Trigger>
        <Flyout.Content>
          <div className="p-4 bg-background">Flyout Content</div>
        </Flyout.Content>
      </Flyout>
    ),
  },
};

export const Advanced: Story = {
  args: {
    root: document.body,
    children: (
      <Flyout root={document.body}>
        <Flyout.Trigger>
          <Button>Menu</Button>
        </Flyout.Trigger>
        <Flyout.Content>
          <div className="w-48 rounded-md border bg-[hsl(var(--color-neutral-0))] p-1 shadow-md border-[hsl(var(--color-neutral-5))] hover:border-[hsl(var(--color-neutral-10))] hover:shadow-lg">
            <div className="flex flex-col gap-0.5">
              <button
                type="button"
                className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"
              >
                New Tab
              </button>
              <button
                type="button"
                className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"
              >
                New Window
              </button>
              <button
                type="button"
                className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"
              >
                New Private Window
              </button>
              <div className="my-1 h-px bg-[hsl(var(--color-neutral-5))]" />
              <button
                type="button"
                className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"
              >
                Settings
              </button>
            </div>
          </div>
        </Flyout.Content>
      </Flyout>
    ),
  },
};
