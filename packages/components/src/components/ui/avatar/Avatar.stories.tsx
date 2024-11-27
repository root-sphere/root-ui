import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { Avatar, AvatarImage, AvatarFallback, AvatarProps } from './avatar';

export default {
  component: Avatar,
  title: 'Components/Avatar',
};

const AvatarTemplate = ({ children, ...others }: AvatarProps) => {
  return (
    <Avatar {...others}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback />
    </Avatar>
  );
};

const AvatarsStories = ({ children, ...others }: AvatarProps) => {
  return (
    <StorybookContent>
      <AvatarTemplate {...others} />
    </StorybookContent>
  );
};

export const Avatars: StoryObj<AvatarProps> = {
  render: AvatarsStories,
};
