import { ATM, MOL } from '@APP/components';
import { Grip, Search, X } from 'lucide-react';
import { ComponentProps } from 'react';

type ResultSearchProps = ComponentProps<'div'>;

function ResultSearch({ ...props }: ResultSearchProps) {
  return (
    <div
      className="flex h-screen flex-col items-center justify-between"
      {...props}
    >
      <MOL.Header>
        <span className="flex h-min w-full items-center gap-3">
          <ATM.LogoGoogle width={80} />
          <ATM.Input.Root variant="slim">
            <ATM.Input.Prefix>
              <Search size={14} stroke="#555" />
            </ATM.Input.Prefix>
            <ATM.Input.Control placeholder="" />
            <ATM.Input.Prefix>
              <X size={14} stroke="#555" />
            </ATM.Input.Prefix>
          </ATM.Input.Root>
        </span>

        <div className="flex items-center gap-3 text-zinc-800">
          <ATM.Button variant="ghost">
            <Grip className="font-medium text-zinc-600" />
          </ATM.Button>
          <img
            src="https://github.com/TonySilva7.png"
            alt="imagem perfil do usuário"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </MOL.Header>
      <main className="flex w-full flex-col items-center gap-y-6 px-3 lg:w-1/3">
        <ul>
          <li>LISTA DE RESULTADOS</li>

          <ATM.SkeletonLoading />
        </ul>
      </main>
    </div>
  );
}

export { ResultSearch, type ResultSearchProps };
