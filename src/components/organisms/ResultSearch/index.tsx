import { ATM, MOL } from '@APP/components';
import { Grip, Search, X } from 'lucide-react';
import { ComponentProps } from 'react';

type ResultSearchProps = ComponentProps<'div'>;

function ResultSearch({ ...props }: ResultSearchProps) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ border: 'solid 1px green' }}
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
      <main
        className="mt-6 flex w-full flex-col items-center gap-y-6 px-6 lg:grid lg:grid-cols-resultSearch lg:items-start lg:gap-x-6"
        style={{ border: 'solid 1px red' }}
      >
        <ul className="w-full space-y-4">
          <li>
            <ATM.SkeletonLoading />
          </li>
          <li>
            <ATM.SkeletonLoading />
          </li>
          <li>
            <ATM.SkeletonLoading />
          </li>
          <li>
            <ATM.SkeletonLoading />
          </li>
          <li>
            <ATM.SkeletonLoading />
          </li>
          <li>
            <ATM.SkeletonLoading />
          </li>
          <li>
            <ATM.SkeletonLoading />
          </li>
        </ul>

        <div className="fixed top-0 z-50 flex h-screen w-screen items-center bg-slate-700/50 lg:static lg:items-start lg:bg-transparent">
          <img
            src="https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="animal"
            className="h-60 w-full object-cover"
          />
        </div>
        {/* )} */}
      </main>
    </div>
  );
}

export { ResultSearch, type ResultSearchProps };
