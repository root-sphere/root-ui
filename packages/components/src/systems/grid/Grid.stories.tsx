import { cn } from '@/lib/utils';
import { StorybookContent } from '@/stories';
import { StoryObj } from '@storybook/react';
import * as React from 'react';

export default {
  title: 'Systems/Grid',
};

const GridTemplate = ({ className }: { className?: string }) => {
  function Columns({ columns }: { columns: number }) {
    return Array.from({ length: columns }).map((_, index) => (
      <div
        key={index}
        className={cn(className, 'h-16', 'bg-primary', 'flex items-center justify-center rounded')}
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
    <StorybookContent className="flex flex-col">
      <GridTemplate className="text-white" />
    </StorybookContent>
  );
};

export const Grids: StoryObj = {
  render: GridsStories,
};

const ContainerGridsStories = () => {
  return (
    <StorybookContent className="flex flex-col">
      <GridTemplate className="text-white" />
    </StorybookContent>
  );
};

export const ContainerGrids: StoryObj = {
  render: ContainerGridsStories,
};
