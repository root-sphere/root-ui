import { cn } from '@/lib/utils';
import { StorybookContent } from '@/stories';
import { pipe, keys, toArray } from '@fxts/core';
import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { H1Props } from './H1';
import { typographyVariants } from './heading.styles';

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

const TextStyleGroup = ({ className }: { className?: string }) => (
  <div className={cn('flex flex-col gap-6', className)}>
    {variantKeys.map((variant) => (
      <p key={variant} className={typographyVariants({ variant })}>
        {variant} - {title}
      </p>
    ))}
  </div>
);

const CombinedTypographyTemplate = ({ className }: { className?: string }) => (
  <div className={cn('space-y-12', className)}>
    <TextStyleGroup />
  </div>
);

const TypographyStories = ({ children, className, ...others }: H1Props) => (
  <StorybookContent>
    <CombinedTypographyTemplate {...others} />
  </StorybookContent>
);

export const Typographies: StoryObj<H1Props> = {
  render: TypographyStories,
};
