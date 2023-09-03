import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const formVariant = tv({
  base: 'w-full',
  variants: {
    variant: {
      primary: 'flex flex-col items-center gap-2',
      secondary: 'flex',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type FormProps = ComponentProps<'form'> & VariantProps<typeof formVariant>;

function Form({ variant, ...props }: FormProps) {
  return <form className={formVariant({ variant })} {...props} />;
}

export { Form, type FormProps };
