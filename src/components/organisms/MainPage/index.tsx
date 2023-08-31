import { ComponentProps } from 'react';

type MainPageProps = ComponentProps<'div'>;

function MainPage({ title = 'MainPage :)' }: MainPageProps) {
  return (
    <div>
      <h1> Hello {title}</h1>
    </div>
  );
}

export { MainPage, type MainPageProps };
