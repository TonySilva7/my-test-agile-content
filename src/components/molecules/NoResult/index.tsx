import { ATM } from '@APP/components';
import { ComponentProps } from 'react';

type NoResultProps = ComponentProps<'div'> & {
  term: string;
  fullMessage?: boolean;
};

function NoResult({ term, fullMessage = true, ...props }: NoResultProps) {
  const handleFormatTerm = () => {
    return `'${term}'`;
  };

  return (
    <div {...props}>
      {fullMessage && (
        <ATM.Text>
          No result found for <strong>{handleFormatTerm()}</strong>.
        </ATM.Text>
      )}
      <span className="flex gap-1">
        <ATM.Text>Try looking for:</ATM.Text>
        <ATM.Text variant="bold">
          insect, finish, horse, crocodilia, bear, cow, lion, rabbit, cat,
          snake, dog, bird.
        </ATM.Text>
      </span>
    </div>
  );
}

export { NoResult, type NoResultProps };
