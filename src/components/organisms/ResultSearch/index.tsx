import { ATM, MOL } from '@APP/components';
import { Grip, Search } from 'lucide-react';
import { ComponentProps } from 'react';

type ResultSearchProps = ComponentProps<'div'>;

function ResultSearch({ ...props }: ResultSearchProps) {
  return (
    <div
      className="flex h-screen flex-col items-center justify-between"
      {...props}
    >
      <MOL.Header>
        <ATM.LogoGoogle width={80} />
        <ATM.Input.Root>
          <ATM.Input.Prefix>
            <Search size={14} stroke="#555" />
          </ATM.Input.Prefix>
          <ATM.Input.Control placeholder="" />
        </ATM.Input.Root>
      </MOL.Header>
      <main className="flex w-full flex-col items-center gap-y-6 px-3 lg:w-1/3">
        <ul>
          <li>LISTA DE RESULTADOS</li>
        </ul>
      </main>
    </div>
  );
}

export { ResultSearch, type ResultSearchProps };
