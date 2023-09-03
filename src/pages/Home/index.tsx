import { ORG } from '@APP/components';
import React, { ComponentProps } from 'react';

type IHome = React.MemoExoticComponent<
  ({ ...props }: ORG.MainPageProps) => JSX.Element
>;

type HomeProps = ComponentProps<IHome>;

function Home({ ...props }: HomeProps) {
  return <ORG.MainPage {...props} />;
}

export { Home, type HomeProps };
