import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

type PrefixProps = ComponentProps<'button'>;
type SufixeProps = ComponentProps<'button'>;
type RootProps = ComponentProps<'div'> & VariantProps<typeof inputVariant>;
type ControlProps = ComponentProps<'textarea'>;

const inputVariant = tv({
  base: [
    'flex w-full items-center gap-2 rounded-3xl border border-zinc-200 px-3 py-2 shadow-sm',
    'focus-within:border-zinc-300 focus-within:ring-4 focus-within:ring-zinc-50',
  ],
  variants: {
    variant: {
      normal: 'h-auto',
      slim: 'h-8 lg:w-1/4',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

function Prefix({ ...rest }: PrefixProps) {
  return <button {...rest} />;
}

function Sufixe({ ...rest }: SufixeProps) {
  return <button {...rest} />;
}

function Control({ ...rest }: ControlProps) {
  return (
    <textarea
      rows={1}
      className="flex-1 resize-none border-0 bg-transparent p-0 text-zinc-800 outline-none placeholder:text-zinc-600"
      {...rest}
    />
  );
}

function Root({ variant, ...rest }: RootProps) {
  return <div className={inputVariant({ variant })} {...rest} />;
}

export { Control, Prefix, Root, Sufixe };
