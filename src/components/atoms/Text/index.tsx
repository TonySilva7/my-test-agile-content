import { ComponentProps } from 'react';

type TextProps = ComponentProps<'div'> & {
  value: string;
  isBold?: boolean;
};

function Text({ value, isBold }: TextProps) {
  return (
    <>
      <p>{isBold ? <b>{value}</b> : value}</p>
    </>
  );
}

export { Text, type TextProps };
