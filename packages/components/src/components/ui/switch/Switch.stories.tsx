import { StorybookContent } from '@/stories';
import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Switch } from './switch';

export default {
  component: Switch,
  title: 'Components/Switch',
} satisfies Meta<typeof Switch>;

const SwitchTemplate = () => {
  return <Switch defaultChecked />;
};

const SmallSwitchTemplate = () => {
  return <Switch defaultChecked size="sm" />;
};

const LargeSwitchTemplate = () => {
  return <Switch defaultChecked size="lg" />;
};

const SuccessSwitchTemplate = () => {
  return <Switch defaultChecked intent="success" />;
};

const DestructiveSwitchTemplate = () => {
  return <Switch defaultChecked intent="danger" />;
};

const DisabledSwitchTemplate = () => {
  return <Switch defaultChecked disabled />;
};

const SwitchStories = () => {
  return (
    <StorybookContent className="flex-col gap-4">
      <SwitchTemplate />
      <SmallSwitchTemplate />
      <LargeSwitchTemplate />
      <SuccessSwitchTemplate />
      <DestructiveSwitchTemplate />
      <DisabledSwitchTemplate />
    </StorybookContent>
  );
};

export const Default: StoryObj = {
  render: SwitchStories,
};
