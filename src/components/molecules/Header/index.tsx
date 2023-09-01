import { ComponentProps } from 'react';

type HeaderProps = ComponentProps<'div'>;

function Header({ children, ...props }: HeaderProps) {
  return (
    <header
      className=" flex h-14 w-full items-center justify-between border-b px-4 shadow-sm shadow-neutral-100/90"
      {...props}
    >
      {children}
    </header>
  );
}

export { Header, type HeaderProps };
