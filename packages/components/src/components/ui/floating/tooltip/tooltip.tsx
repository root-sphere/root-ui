import { TooltipContent } from './tooltip.content';
import { TooltipRoot } from './tooltip.root';
import { TooltipTrigger } from './tooltip.trigger';

export const Tooltip = Object.assign(TooltipRoot, {
  Content: TooltipContent,
  Trigger: TooltipTrigger,
});
