import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import * as React from 'react';

import { Opener } from './opener';

const meta = {
  title: 'Floating/Opener',
  component: Opener,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Opener>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <Opener>
          <Opener.Trigger>
            <Button>Open</Button>
          </Opener.Trigger>
          <Opener.Content>
            <div className="p-4">Opener Content</div>
          </Opener.Content>
        </Opener>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Custom Root</h3>
        <Opener root={document.body}>
          <Opener.Trigger>
            <Button>Open (Portal to Body)</Button>
          </Opener.Trigger>
          <Opener.Content>
            <div className="p-4">Opener Content (Portaled)</div>
          </Opener.Content>
        </Opener>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: (
      <>
        <Opener.Trigger>
          <Button>Open</Button>
        </Opener.Trigger>
        <Opener.Content>
          <div className="p-4">Opener Content</div>
        </Opener.Content>
      </>
    ),
  },
};

export const Advanced: Story = {
  args: {
    root: document.body,
    children: (
      <Opener root={document.body}>
        <Opener.Trigger>
          <Button>Menu</Button>
        </Opener.Trigger>
        <Opener.Content>
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
        </Opener.Content>
      </Opener>
    ),
  },
};
