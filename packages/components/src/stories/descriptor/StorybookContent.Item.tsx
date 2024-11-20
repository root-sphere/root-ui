import { cn } from '@/lib/utils';
import * as React from 'react';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface StorybookContentItemProps extends Omit<ElementProps, 'children'> {
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

export const StorybookContentItem = ({
  children,
  className,
  noAlign = true,
  noGap = false,
  noPadding = false,
  ...others
}: StorybookContentItemProps) => {
  const [root, setRoot] = React.useState<HTMLDivElement | null>(null);

  const renderChildren = (args: RenderChildrenArgs) => {
    const isFunction = typeof children === 'function';
    if (isFunction) {
      return children(args);
    }
    return children;
  };

  return (
    <div
      {...others}
      className={cn(
        className,
        'StorybookContentItem',
        'relative',
        'flex flex-1 ',
        'min-h-full',
        'text-main',
        {
          'gap-2': !noGap,
          'items-center justify-center': !noAlign,
          'py-2 px-3': !noPadding,
        },
      )}
      ref={setRoot}
    >
      {renderChildren({ root })}
    </div>
  );
};

export const createStorybookContentItem = (hocProps: ElementProps) => {
  return ({ children, className, ...others }: StorybookContentItemProps) => (
    <StorybookContentItem {...hocProps} {...others} className={cn(hocProps.className, className)}>
      {children}
    </StorybookContentItem>
  );
};
