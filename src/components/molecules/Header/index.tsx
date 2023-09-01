import { ATM } from '@APP/components';
import { Grip } from 'lucide-react';
import { ComponentProps } from 'react';

type HeaderProps = ComponentProps<'div'>;

function Header({ ...props }: HeaderProps) {
  return (
    <div
      className=" flex h-14 w-full items-center justify-between border-b px-4"
      {...props}
    >
      <span className="flex gap-3">
        <ATM.Text variant="bold"> Agile Content </ATM.Text>
        <ATM.Text> Frontend test </ATM.Text>
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
    </div>
  );
}

export { Header, type HeaderProps };
