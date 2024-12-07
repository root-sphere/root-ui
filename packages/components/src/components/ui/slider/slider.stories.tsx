import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Slider } from './slider';

const meta = {
  args: {
    defaultValue: [50],
    disabled: false,
    max: 100,
    step: 1,
  },
  argTypes: {
    defaultValue: {
      control: 'object',
      description: 'The default value(s) of the slider',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    max: {
      control: 'number',
      description: 'The maximum value of the slider',
    },
    step: {
      control: 'number',
      description: 'The step interval between values',
    },
    intent: {
      control: 'select',
      options: ['accent'],
      description: 'The visual style variant of the slider',
    },
  },
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Slider',
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[400px]">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Single Value</h3>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Range</h3>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <Slider defaultValue={[50]} disabled max={100} step={1} />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    defaultValue: [50],
    disabled: false,
    max: 100,
    step: 1,
  },
};

export const SingleValue: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
    max: 100,
    step: 1,
  },
};
