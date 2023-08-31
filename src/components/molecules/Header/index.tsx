import { ComponentProps } from 'react';

type HeaderProps = ComponentProps<'div'>;

function Header({ title = 'Header :)' }: HeaderProps) {
  return (
    <div>
      <h1> Hello {title}</h1>
    </div>
  );
}

export { Header, type HeaderProps };
