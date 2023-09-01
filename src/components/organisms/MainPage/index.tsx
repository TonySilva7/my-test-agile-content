import { ATM, MOL } from '@APP/components';
import { Search } from 'lucide-react';
import { ComponentProps } from 'react';

type MainPageProps = ComponentProps<'div'>;

function MainPage({ title = 'Logo Google' }: MainPageProps) {
  return (
    <div className="flex h-screen flex-col items-stretch justify-between">
      <MOL.Header />
      <main className="flex">
        <h1> Logo Google</h1>
        <ATM.Input.Root>
          <ATM.Input.Prefix>
            <Search size={14} />
          </ATM.Input.Prefix>
          <ATM.Input.Control placeholder="" type="search" />
        </ATM.Input.Root>
      </main>
      <MOL.Footer />
    </div>
  );
}

export { MainPage, type MainPageProps };
