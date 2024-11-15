import { pipe, keys, toArray } from '@fxts/core';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { H1Props } from './H1';
import { typographyVariants } from './Typography.styles';

const variantKeys = pipe(typographyVariants.variants.variant, keys, toArray);

export default {
  argTypes: {
    variant: {
      control: 'select',
      options: variantKeys,
    },
  },
  title: 'Systems/Typography',
};

const title =
  'In a world where technology evolves at an unprecedented pace, the impact on human communication, creativity, and daily life is profound, reshaping how we connect, learn, and innovate';

const TextStyleGroup = () => (
  <div className="flex flex-col gap-6">
    {variantKeys.map((variant) => (
      <p key={variant} className={typographyVariants({ variant })}>
        {variant} - {title}
      </p>
    ))}
  </div>
);

const CombinedTypographyTemplate = () => (
  <div className="space-y-12">
    <TextStyleGroup />
  </div>
);

const TypographyStories = ({ children, ...others }: H1Props) => (
  <StorybookContent>
    <StorybookContent.Light>
      <CombinedTypographyTemplate {...others}>{children}</CombinedTypographyTemplate>
    </StorybookContent.Light>
    <StorybookContent.Dark>
      <CombinedTypographyTemplate {...others}>{children}</CombinedTypographyTemplate>
    </StorybookContent.Dark>
  </StorybookContent>
);

export const Typographies: StoryObj<H1Props> = {
  render: TypographyStories,
};
