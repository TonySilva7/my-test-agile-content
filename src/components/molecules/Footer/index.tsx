import { ComponentProps } from 'react';

type FooterProps = ComponentProps<'div'>;

function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className="flex h-12 w-full items-center justify-between bg-neutral-200 px-4"
      {...props}
    >
      <div className="flex gap-3">
        <small>&#169; Google 2021</small>
      </div>
      <div className="flex items-center gap-3 text-zinc-800">
        <small>version: 0.1.0</small>
      </div>
    </footer>
  );
}

export { Footer, type FooterProps };
