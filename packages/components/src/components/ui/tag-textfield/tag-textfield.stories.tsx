import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import type { TagTextFieldProps } from './tag-textfield';

import { TagTextField } from './tag-textfield';

type StoryProps = TagTextFieldProps & {
  suggestions?: string[];
};

const meta: Meta = {
  args: {
    disabled: false,
    size: 'default',
    intent: 'secondary',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    size: {
      control: 'select',
      description: 'The size of the tag text field',
      options: ['sm', 'default', 'lg'],
    },
    defaultValue: {
      control: { type: 'array' },
      description: 'Default tags',
    },
    value: {
      control: { type: 'array' },
      description: 'Controlled tags value',
    },
    onChange: {
      description: 'Callback when tags change',
    },
    intent: {
      control: 'select',
      description: 'The color intent of the tags',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
  },
  component: TagTextField,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/TagTextField',
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const suggestions = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Remix', 'Astro'];

const StoryTemplate: React.FC<StoryProps> = ({ ...args }) => (
  <div className="w-[320px]">
    <TagTextField {...args}>
      <div className="flex flex-col gap-2">
        <TagTextField.Input placeholder="Add tags..." suggestions={suggestions} />
        <TagTextField.Tags />
      </div>
    </TagTextField>
  </div>
);

export const Default: Story = {
  render: () => <StoryTemplate />,
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [tags, setTags] = React.useState(['React', 'TypeScript']);

    return (
      <div className="w-[320px]">
        <TagTextField value={tags} onChange={setTags}>
          <TagTextField.Input placeholder="Add tags..." suggestions={suggestions} />
          <TagTextField.Tags />
        </TagTextField>
        <div className="mt-2 text-sm text-muted-foreground">Selected: {tags.join(', ')}</div>
      </div>
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => <StoryTemplate defaultValue={['React', 'TypeScript']} />,
};

export const Disabled: Story = {
  render: () => <StoryTemplate defaultValue={['React', 'TypeScript']} disabled />,
};

export const Sizes: Story = {
  render: () => (
    <div className="w-[320px] flex flex-col gap-4">
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
  ),
};

export const Intents: Story = {
  render: () => (
    <div className="w-[320px] flex flex-col gap-4">
      <TagTextField intent="primary" defaultValue={['Primary']}>
        <TagTextField.Input placeholder="Primary intent..." />
        <TagTextField.Tags />
      </TagTextField>

      <TagTextField intent="secondary" defaultValue={['Secondary']}>
        <TagTextField.Input placeholder="Secondary intent..." />
        <TagTextField.Tags />
      </TagTextField>

      <TagTextField intent="success" defaultValue={['Success']}>
        <TagTextField.Input placeholder="Success intent..." />
        <TagTextField.Tags />
      </TagTextField>

      <TagTextField intent="warning" defaultValue={['Warning']}>
        <TagTextField.Input placeholder="Warning intent..." />
        <TagTextField.Tags />
      </TagTextField>

      <TagTextField intent="danger" defaultValue={['Danger']}>
        <TagTextField.Input placeholder="Danger intent..." />
        <TagTextField.Tags />
      </TagTextField>
    </div>
  ),
};
