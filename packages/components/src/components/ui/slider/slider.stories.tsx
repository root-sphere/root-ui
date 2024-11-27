import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

import { Slider } from './slider';

export default {
  component: Slider,
  title: 'Components/Slider',
};

const SliderStories = () => {
  return (
    <StorybookContent className="flex-col gap-4">
      <div className="w-[60%]">
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="w-[60%]">
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
      <div className="w-[60%]">
        <Slider defaultValue={[50]} disabled max={100} step={1} />
      </div>
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  render: SliderStories,
};
