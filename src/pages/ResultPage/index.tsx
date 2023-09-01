import { ORG } from '@APP/components';
import { ComponentProps } from 'react';

type ResultPageProps = ComponentProps<'div'>;

function ResultPage({ ...props }: ResultPageProps) {
  return <ORG.ResultSearch />;
}

export { ResultPage, type ResultPageProps };
