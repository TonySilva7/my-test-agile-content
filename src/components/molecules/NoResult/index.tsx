import { ATM } from '@APP/components';
import { ComponentProps } from 'react';

type NoResultProps = ComponentProps<'div'> & {
  term: [string, string];
  isFullMessage?: boolean;
};

function NoResult({
  term,
  isFullMessage: fullMessage = true,
  ...props
}: NoResultProps) {
  const handleFormatTerm = () => {
    return `'${term[1]}'`;
  };

  return (
    <div {...props}>
      {fullMessage && (
        <ATM.Text>
          {term[0]} <strong>{handleFormatTerm()}</strong>.
        </ATM.Text>
      )}
      <span className="flex gap-1">
        <ATM.Text>{term[0]}</ATM.Text>
        <ATM.Text variant="bold">
          insect, finish, horse, crocodilia, bear, cow, lion, rabbit, cat,
          snake, dog, bird.
        </ATM.Text>
      </span>
    </div>
  );
}

export { NoResult, type NoResultProps };
