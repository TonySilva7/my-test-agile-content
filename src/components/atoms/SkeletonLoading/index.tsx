import { ComponentProps } from 'react';

type SkeletonLoadingProps = ComponentProps<'div'>;

function SkeletonLoading({ ...props }: SkeletonLoadingProps) {
  return (
    <div className="flex animate-pulse flex-col gap-y-2" {...props}>
      <div className="h-3 w-2/6 rounded bg-neutral-300" />
      <div className="h-4 w-4/6 rounded bg-neutral-300" />
      <div className="h-3 rounded bg-neutral-300" />
    </div>
  );
}

export { SkeletonLoading, type SkeletonLoadingProps };
