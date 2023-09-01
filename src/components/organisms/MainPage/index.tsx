import { ATM, MOL } from '@APP/components';
import { Search } from 'lucide-react';
import { ComponentProps } from 'react';

type MainPageProps = ComponentProps<'div'>;

function MainPage({ ...props }: MainPageProps) {
  return (
    <div
      className="flex h-screen flex-col items-center justify-between"
      {...props}
    >
      <MOL.Header />
      <main className="flex w-full flex-col items-center gap-y-6 px-3 lg:w-1/3">
        <ATM.LogoGoogle width={250} />

        <ATM.Input.Root>
          <ATM.Input.Prefix>
            <Search size={14} />
          </ATM.Input.Prefix>
          <ATM.Input.Control placeholder="" type="search" />
        </ATM.Input.Root>

        <ATM.Button>Buscar</ATM.Button>
      </main>
      <MOL.Footer />
    </div>
  );
}

export { MainPage, type MainPageProps };
