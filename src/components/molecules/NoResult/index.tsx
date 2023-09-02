import { ATM } from '@APP/components';
import { ComponentProps } from 'react';

type NoResultProps = ComponentProps<'div'> & {
  term: [string, string];
};

function NoResult({ term, ...props }: NoResultProps) {
  return (
    <div {...props}>
      <ATM.Text>
        {term[0]} <strong>{term[1]}</strong>
      </ATM.Text>
    </div>
  );
}

export { NoResult, type NoResultProps };
