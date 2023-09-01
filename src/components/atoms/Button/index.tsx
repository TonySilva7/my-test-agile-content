import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'rounded-sm px-4 py-2 text-sm shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2',
    'transition-colors duration-200 active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-neutral-200/90 text-zinc-800 hover:bg-zinc-300',
      ghost: 'rounded-full px-2 shadow-none hover:bg-zinc-50',
      outline: 'border border-zinc-300 text-neutral-700 hover:bg-zinc-50',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

function Button({ variant, ...props }: ButtonProps) {
  return <button className={button({ variant })} {...props} />;
}

export { Button, type ButtonProps };
