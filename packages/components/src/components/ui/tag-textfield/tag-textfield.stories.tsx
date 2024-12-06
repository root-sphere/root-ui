import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import type { TagTextFieldProps } from './tag-textfield';

import { TagTextField } from './tag-textfield';

type StoryProps = TagTextFieldProps & {
  suggestions?: string[];
};

const meta = {
  args: {
    disabled: false,
    intent: 'primary',
    size: 'default',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the tag textfield is disabled',
    },
    intent: {
      control: 'select',
      description: 'The intent/purpose of the tag textfield which determines its color scheme',
      options: ['primary', 'secondary', 'positive', 'cautionary', 'destructive'],
    },
    size: {
      control: 'select',
      description: 'The size of the tag textfield',
      options: ['sm', 'default', 'lg'],
    },
  },
  title: 'Components/TagTextField',
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const suggestions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Remix', 'Astro'];

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-col gap-4">
          <TagTextField size="sm">
            <TagTextField.Input placeholder="Small size" suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField size="default" defaultValue={['React', 'Vue']}>
            <TagTextField.Input placeholder="Default size" suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField size="lg" defaultValue={['React', 'Vue', 'Angular']}>
            <TagTextField.Input placeholder="Large size" suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>
        </div>
      </div>
      {/* Intents */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Intents</h3>
        <div className="flex flex-col gap-4">
          <TagTextField intent="primary" defaultValue={['Primary']}>
            <TagTextField.Input placeholder="Primary intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="secondary" defaultValue={['Secondary']}>
            <TagTextField.Input placeholder="Secondary intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="positive" defaultValue={['Positive']}>
            <TagTextField.Input placeholder="Positive intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="cautionary" defaultValue={['Cautionary']}>
            <TagTextField.Input placeholder="Cautionary intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="destructive" defaultValue={['Destructive']}>
            <TagTextField.Input placeholder="Destructive intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-col gap-4">
          <TagTextField defaultValue={['React', 'TypeScript']} disabled>
            <TagTextField.Input placeholder="Disabled state..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField defaultValue={['React', 'TypeScript']}>
            <TagTextField.Input placeholder="Default state..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>
        </div>
      </div>
    </div>
  ),
};
