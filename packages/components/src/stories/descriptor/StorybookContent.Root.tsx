import { cn } from '@/lib/utils';
import * as React from 'react';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface StorybookContentRootProps {}

export const StorybookContentRoot = React.forwardRef<
  ElementType,
  ElementProps & StorybookContentRootProps
>(({ children, className, ...others }, ref) => {
  return (
    <div {...others} className={cn(className, 'flex w-full h-full min-h-screen')} ref={ref}>
      {children}
    </div>
  );
});
