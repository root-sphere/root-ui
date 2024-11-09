import { rootIntentColors } from '@root-sphere/root-ui-tailwind';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { Button, ButtonProps } from './Button';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: rootIntentColors.reduce((acc, color) => {
          acc[color] = color;
          return acc;
        }, {}),
      },
    },
  },
  component: Button,
  title: 'Atomic/Button',
};

const ButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <Button {...others}>{children}</Button>;
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <Button {...others}>{children}</Button>;
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Buttons: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  render: ButtonsStories,
};

const AllButtonTemplate = ({ children, ...others }: ButtonProps) => {
  return (
    <>
      {rootIntentColors.map((intent) => (
        <Button key={intent} {...others} intent={intent}>
          {children}-{intent}
        </Button>
      ))}
    </>
  );
};

const AllButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <AllButtonTemplate {...others}>{children}</AllButtonTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <AllButtonTemplate {...others}>{children}</AllButtonTemplate>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const AllButtons: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  render: AllButtonsStories,
};
