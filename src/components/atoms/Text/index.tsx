import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const textVariants = tv({
  base: 'text-sm text-zinc-700',
  variants: {
    variant: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

type TextProps = ComponentProps<'div'> & VariantProps<typeof textVariants>;

function Text({ variant, children, ...props }: TextProps) {
  return (
    <p className={textVariants({ variant })} {...props}>
      {children}
    </p>
  );
}

export { Text, type TextProps };
