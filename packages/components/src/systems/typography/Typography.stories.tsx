import { StoryObj } from '@storybook/react/*';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { H1, H1Props } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { H5 } from './H5';
import { H6 } from './H6';
import { typography } from './Typography.styles';

export default {
  title: 'Systems/Typography',
};

const title =
  'In a world where technology evolves at an unprecedented pace, the impact on human communication, creativity, and daily life is profound, reshaping how we connect, learn, and innovate';

const HeadingGroup = () => (
  <div className="flex flex-col gap-6">
    <H1>Heading Styles</H1>
    <H1>H1 - {title}</H1>
    <H2>H2 - {title}</H2>
    <H3>H3 - {title}</H3>
    <H4>H4 - {title}</H4>
    <H5>H5 - {title}</H5>
    <H6>H6 - {title}</H6>
  </div>
);

const TextStyleGroup = () => (
  <div className="flex flex-col gap-6">
    <p className={typography({ variant: 'title-1' })}>Title 1 - {title}</p>
    <p className={typography({ variant: 'title-2' })}>Title 2 - {title}</p>
    <p className={typography({ variant: 'title-3' })}>Title 3 - {title}</p>
    <p className={typography({ variant: 'body-1' })}>Body 1 - {title}</p>
    <p className={typography({ variant: 'body-2' })}>Body 2 - {title}</p>
    <p className={typography({ variant: 'label' })}>Label - {title}</p>
    <p className={typography({ variant: 'caption' })}>Caption - {title}</p>
    <p className={typography({ variant: 'tooltip' })}>Tooltip - {title}</p>
  </div>
);

const CombinedTypographyTemplate = () => (
  <div className="space-y-12">
    <HeadingGroup />
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
