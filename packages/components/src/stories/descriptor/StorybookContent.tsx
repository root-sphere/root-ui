import { createStorybookContentItem } from './StorybookContent.Item';
import { StorybookContentRoot } from './StorybookContent.Root';

export const StorybookContent = Object.assign(StorybookContentRoot, {
  Dark: createStorybookContentItem({ className: 'dark bg-space' }),
  Light: createStorybookContentItem({ className: 'bg-cream' }),
});
