import { FlyoutContent } from './flyout.content';
import { FlyoutRoot } from './flyout.root';
import { FlyoutTrigger } from './flyout.trigger';

export const Flyout = Object.assign(FlyoutRoot, {
  Content: FlyoutContent,
  Trigger: FlyoutTrigger,
});
