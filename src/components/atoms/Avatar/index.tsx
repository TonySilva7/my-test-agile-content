import { ComponentProps } from 'react';

type AvatarProps = ComponentProps<'img'> & {
  avatarUrl: string;
};

function Avatar({ avatarUrl, ...props }: AvatarProps) {
  return (
    <img
      src={avatarUrl}
      alt="imagem perfil do usuário"
      className="h-8 w-8 rounded-full"
      {...props}
    />
  );
}

export { Avatar, type AvatarProps };
