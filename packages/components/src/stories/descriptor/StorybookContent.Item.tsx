import clsx from 'clsx';
import * as React from 'react';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface StorybookContentItemProps extends Omit<ElementProps, 'children'> {
  children: ((args: RenderChildrenArgs) => React.ReactNode) | React.ReactNode;

  noAlign?: boolean;

  noGap?: boolean;

  noPadding?: boolean;
}

export interface RenderChildrenArgs {
  root: HTMLElement | null;
}

export const StorybookContentItem = ({
  children,
  className,
  noAlign,
  noGap,
  noPadding,
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
      className={clsx(className, 'StorybookContentItem', 'relative', 'flex flex-1 ', 'min-h-full', {
        'gap-4': !noGap,
        'items-center justify-center': !noAlign,
        'py-12 px-24': !noPadding,
      })}
      ref={setRoot}
    >
      {renderChildren({ root })}
    </div>
  );
};

export const createStorybookContentItem = (hocProps: ElementProps) => {
  return ({ children, className, ...others }: StorybookContentItemProps) => (
    <StorybookContentItem {...hocProps} {...others} className={clsx(hocProps.className, className)}>
      {children}
    </StorybookContentItem>
  );
};
