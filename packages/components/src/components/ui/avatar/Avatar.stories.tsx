import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Avatar, AvatarImage, AvatarFallback, AvatarProps } from './avatar';

const SRC = 'https://avatars.githubusercontent.com/u/16330024?v=4';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Avatar',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const AvatarTemplate = (args: AvatarProps) => (
  <Avatar {...args}>
    <AvatarImage src={SRC} />
    <AvatarFallback />
  </Avatar>
);

export const Default: Story = {
  render: (args) => <AvatarTemplate {...args} />,
};

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={SRC} />
      <AvatarFallback>Fallback</AvatarFallback>
    </Avatar>
  ),
};
