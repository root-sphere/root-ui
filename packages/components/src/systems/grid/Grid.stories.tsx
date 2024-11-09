import { StoryObj } from '@storybook/react';
import clsx from 'clsx';
import * as React from 'react';

import { StorybookContent } from '~/stories';

export default {
  title: 'Systems/Grid',
};

const GridTemplate = () => {
  function Columns({ columns }: { columns: number }) {
    return Array.from({ length: columns }).map((_, index) => (
      <div
        key={index}
        className={clsx(
          'h-16',
          'bg-blue-100 text-space',
          'flex items-center justify-center rounded',
        )}
      >
        Col {index + 1}
      </div>
    ));
  }

  return (
    <div>
      <div>
        <h3 className="mb-4 text-xl">Grid with 12 Columns</h3>
        <div className="grid grid-cols-12 gap-[4px]">
          <Columns columns={12} />
        </div>
      </div>
      <div>
        <h3 className="mt-8 mb-4 text-xl">Grid with 16 Columns</h3>
        <div className="grid grid-cols-16 gap-[4px]">
          <Columns columns={16} />
        </div>
      </div>
      <div>
        <h3 className="mt-8 mb-4 text-xl">Grid with 20 Columns</h3>
        <div className="grid grid-cols-20 gap-[4px]">
          <Columns columns={20} />
        </div>
      </div>
      <div>
        <h3 className="mt-8 mb-4 text-xl">Grid with 24 Columns</h3>
        <div className="grid grid-cols-24 gap-[4px]">
          <Columns columns={24} />
        </div>
      </div>
    </div>
  );
};

const GridsStories = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col" noAlign noGap>
        <GridTemplate />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign noGap>
        <GridTemplate />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Grids: StoryObj = {
  render: GridsStories,
};

const ContainerGridsStories = () => {
  return (
    <StorybookContent className="flex flex-col">
      <StorybookContent.Light className="flex-col" noAlign noGap>
        <div className="container mx-auto">
          <GridTemplate />
        </div>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col" noAlign noGap>
        <div className="container mx-auto">
          <GridTemplate />
        </div>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const ContainerGrids: StoryObj = {
  render: ContainerGridsStories,
};
