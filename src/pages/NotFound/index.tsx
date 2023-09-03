import { ORG } from '@APP/components';
import { ComponentProps } from 'react';

type NotFoundProps = ComponentProps<'div'>;

function NotFound({ ...props }: NotFoundProps) {
  return <ORG.NotFound {...props} />;
}

export { NotFound, type NotFoundProps };
