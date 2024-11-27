import { cn } from '@/lib/utils';
import * as React from 'react';

import { StorybookContentRoot } from './StorybookContent.Root';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface StorybookContentProps extends Omit<ElementProps, 'children'> {
  children: ((args: RenderChildrenArgs) => React.ReactNode) | React.ReactNode;

  /**
   * @default false
   */
  noAlign?: boolean;

  /**
   * @default false
   */
  noGap?: boolean;

  /**
   * @default false
   */
  noPadding?: boolean;
}

export interface RenderChildrenArgs {
  root: HTMLElement | null;
}

export const StorybookContent = ({
  children,
  className,
  noAlign = false,
  noGap = false,
  noPadding = false,
  ...others
}: StorybookContentProps) => {
  const [root, setRoot] = React.useState<HTMLDivElement | null>(null);

  return (
    <StorybookContentRoot>
      <div
        {...others}
        className={cn(className, 'relative w-full h-full', {
          'gap-2': !noGap,
          'items-center justify-center': !noAlign,
          'py-2 px-3': !noPadding,
        })}
        ref={setRoot}
      >
        {typeof children === 'function' ? children({ root }) : children}
      </div>
    </StorybookContentRoot>
  );
};
