import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const mainVariant = tv({
  base: 'flex w-full flex-col items-center gap-y-6',
  variants: {
    variant: {
      primary: 'px-3 lg:w-2/4',
      secondary: [
        'mt-6 min-h-[calc(100vh-8rem)] px-6 ',
        'lg:grid lg:grid-cols-resultSearch lg:items-start lg:gap-x-6',
      ],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type MainContentProps = ComponentProps<'main'> &
  VariantProps<typeof mainVariant>;

function MainContent({ variant, ...props }: MainContentProps) {
  return <main className={mainVariant({ variant })} {...props} />;
}

export { MainContent, type MainContentProps };
