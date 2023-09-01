import { ATM } from '@APP/components';
import { ComponentProps } from 'react';

type ListItemProps = ComponentProps<'li'> & {
  url: string;
  title: string;
  text: string;
};

function ListItem({ url, title, text, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <ATM.Button variant="link">
        <small className="text-zinc-700">{url}</small>
        <h1 className="py-1 font-medium text-indigo-700">{title}</h1>
      </ATM.Button>
      <p className="text-left text-sm text-zinc-700">{text}</p>
    </li>
  );
}

export { ListItem, type ListItemProps };
