import type { Meta, StoryObj } from '@storybook/react';

import { Loader2Icon } from 'lucide-react';
import * as React from 'react';

import type { TextFieldProps } from './textfield';

import { TextField, TextFieldAction, TextFieldDivider, TextFieldInput } from './textfield';

const meta = {
  args: {
    disabled: false,
    size: 'default',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    intent: {
      control: 'select',
      description: 'The intent/purpose of the input which determines its color scheme',
      options: ['accent'],
    },
    size: {
      control: 'select',
      description: 'The size of the text field',
      options: ['sm', 'default', 'lg'],
    },
  },
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/TextField',
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldInput placeholder="Enter text..." />
      </TextField>
    </div>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldInput placeholder="Enter text..." />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>
    </div>
  ),
};

export const WithLoading: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldAction>
          <Loader2Icon className="animate-spin" />
        </TextFieldAction>
        <TextFieldDivider />
        <TextFieldInput placeholder="Loading..." />
      </TextField>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="w-[320px] flex flex-col gap-4">
      <TextField {...args} size="sm">
        <TextFieldInput placeholder="Small size" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="default">
        <TextFieldInput placeholder="Default size" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="lg">
        <TextFieldInput placeholder="Large size" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>

      {/* With Loading */}
      <TextField {...args} size="sm">
        <TextFieldInput placeholder="Small loading" />
        <TextFieldDivider />
        <TextFieldAction>
          <Loader2Icon className="size-3 animate-spin" />
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="default">
        <TextFieldInput placeholder="Default loading" />
        <TextFieldDivider />
        <TextFieldAction>
          <Loader2Icon className="size-4 animate-spin" />
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="lg">
        <TextFieldInput placeholder="Large loading" />
        <TextFieldDivider />
        <TextFieldAction>
          <Loader2Icon className="size-5 animate-spin" />
        </TextFieldAction>
      </TextField>

      {/* With Number */}
      <TextField {...args} size="sm">
        <TextFieldInput type="number" defaultValue={1} />
      </TextField>

      <TextField {...args} size="default">
        <TextFieldInput type="number" defaultValue={1} />
      </TextField>

      <TextField {...args} size="lg">
        <TextFieldInput type="number" defaultValue={1} />
      </TextField>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldInput placeholder="Disabled input" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>
    </div>
  ),
};
