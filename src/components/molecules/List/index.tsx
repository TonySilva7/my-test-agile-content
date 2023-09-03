import { ComponentProps } from 'react';

type ListProps = ComponentProps<'ul'>;

function List({ ...props }: ListProps) {
  return <ul className="w-full space-y-4" {...props} />;
}

export { List, type ListProps };
