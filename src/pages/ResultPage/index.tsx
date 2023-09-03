import { ORG } from '@APP/components';
import { ComponentProps } from 'react';

type ResultPageProps = ComponentProps<'div'>;

function ResultPage({ ...props }: ResultPageProps) {
  return <ORG.ResultSearch {...props} />;
}

export { ResultPage, type ResultPageProps };
