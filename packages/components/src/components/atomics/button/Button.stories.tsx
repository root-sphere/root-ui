import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { Button, ButtonProps } from './Button';

export default {
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: {
          primary: 'primary',
        },
      },
    },
  },
  component: Button,
  title: 'Atomic/Button',
};

const BaseTemplate = ({ children, ...others }: ButtonProps) => {
  return <Button {...others}>{children}</Button>;
};

const ButtonsStories = ({ children, ...others }: ButtonProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex-col">
        <BaseTemplate {...others} intent="primary">
          {children}
        </BaseTemplate>
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex-col">
        <BaseTemplate {...others}>{children}</BaseTemplate>
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
