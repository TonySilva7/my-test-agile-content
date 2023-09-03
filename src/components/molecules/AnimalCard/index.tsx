import { ComponentProps } from 'react';

type AnimalCardProps = ComponentProps<'div'> & {
  imageUrl: string;
  url: string;
  title: string;
  description: string;
};

function AnimalCard({
  imageUrl,
  url,
  title,
  description,
  ...props
}: AnimalCardProps) {
  return (
    <article
      className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-700/50 lg:static lg:h-auto lg:w-auto lg:items-start lg:bg-transparent"
      {...props}
    >
      <div className="flex w-80 flex-col rounded border bg-neutral-50 p-3">
        <img src={imageUrl} alt="animal" className="h-40 w-full object-cover" />
        <a className="pt-2 text-xs text-neutral-700" href={url}>
          {url}
        </a>
        <h2 className="py-1 font-semibold text-zinc-800">{title}</h2>
        <p className="text-sm text-zinc-800">{description}</p>
      </div>
    </article>
  );
}

export { AnimalCard, type AnimalCardProps };
