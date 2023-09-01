import { ComponentProps } from 'react';

type SkeletonLoadingProps = ComponentProps<'div'>;

function SkeletonLoading({ ...props }: SkeletonLoadingProps) {
  return (
    <div className="animate-pulse" {...props}>
      <div className="my-2 h-3 w-2/6 rounded bg-neutral-300"></div>
      <div className="my-2 h-5 w-4/6 rounded bg-neutral-300"></div>
      <div className="h-4 rounded bg-neutral-300"></div>
    </div>
  );
}

export { SkeletonLoading, type SkeletonLoadingProps };
