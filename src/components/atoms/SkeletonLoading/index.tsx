import { ComponentProps } from 'react';

type SkeletonLoadingProps = ComponentProps<'div'>;

function SkeletonLoading({ ...props }: SkeletonLoadingProps) {
  return (
    <div className="animate-pulse" {...props}>
      <div className="h-12 w-12 rounded-full bg-neutral-300"></div>
      <div className="my-2 h-4 rounded bg-neutral-300"></div>
      <div className="h-4 rounded bg-neutral-300"></div>
    </div>
  );
}

export { SkeletonLoading, type SkeletonLoadingProps };
