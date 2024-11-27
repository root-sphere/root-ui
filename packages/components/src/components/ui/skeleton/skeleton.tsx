import { cn } from '@/lib/utils';
import * as React from 'react';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface SkeletonProps extends ElementProps {}

export const Skeleton = React.forwardRef<ElementType, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
    );
  },
);
