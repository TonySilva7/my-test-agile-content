import React, { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

type PrefixProps = ComponentProps<'button'>;
type SufixeProps = ComponentProps<'button'>;
type RootProps = ComponentProps<'div'> & VariantProps<typeof inputVariant>;
type ControlProps = ComponentProps<'input'>;

const inputVariant = tv({
  base: [
    'flex w-full items-center gap-2 rounded-3xl border border-zinc-200 p-3 shadow-sm',
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

function TextArea(
  { ...rest }: ControlProps,
  ref: React.LegacyRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className="flex-1 resize-none border-0 bg-transparent p-0 text-zinc-800 outline-none placeholder:text-zinc-600"
      {...rest}
    />
  );
}

const Control = React.forwardRef(TextArea);

function Root({ variant, ...rest }: RootProps) {
  return <div className={inputVariant({ variant })} {...rest} />;
}

export { Control, Prefix, Root, Sufixe };
