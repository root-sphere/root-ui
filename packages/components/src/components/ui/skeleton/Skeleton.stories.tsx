import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { Skeleton, SkeletonProps } from './skeleton';

export default {
  component: Skeleton,
  title: 'Components/Skeleton',
};

const SkeletonTemplate = ({ children, ...others }: SkeletonProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

const SkeletonsStories = ({ children, ...others }: SkeletonProps) => {
  return (
    <StorybookContent className="flex-col">
      <SkeletonTemplate {...others}>{children}</SkeletonTemplate>
    </StorybookContent>
  );
};

export const Skeletons: StoryObj<SkeletonProps> = {
  render: SkeletonsStories,
};
