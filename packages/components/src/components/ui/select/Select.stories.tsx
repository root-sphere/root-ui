import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const meta = {
  component: Select,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Theme Options */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Theme Options</h3>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Disabled State</h3>
        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Disabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};
