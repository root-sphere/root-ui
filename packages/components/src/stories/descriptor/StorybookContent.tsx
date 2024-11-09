import { createStorybookContentItem } from './StorybookContent.Item';
import { StorybookContentRoot } from './StorybookContent.Root';

export const StorybookContent = Object.assign(StorybookContentRoot, {
  Dark: createStorybookContentItem({ className: 'dark text-main bg-secondary' }),
  Light: createStorybookContentItem({ className: 'text-main bg-secondary' }),
});
