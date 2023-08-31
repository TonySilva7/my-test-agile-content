import { MOL } from '@APP/components';
import { ComponentProps } from 'react';

type MainPageProps = ComponentProps<'div'>;

function MainPage({ title = 'MainPage :)' }: MainPageProps) {
  return (
    <>
      <MOL.Header />
      <h1> Hello {title}</h1>
    </>
  );
}

export { MainPage, type MainPageProps };
