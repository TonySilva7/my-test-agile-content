import { ATM, MOL } from '@APP/components';
import { Button } from '@APP/components/atoms';
import { VALID } from '@APP/hooks';
import { ROUTES } from '@APP/routes/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grip, Search, X } from 'lucide-react';
import { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

type ResultSearchProps = ComponentProps<'div'>;
type ISearch = {
  valueSearch: string;
};

function ResultSearch({ ...props }: ResultSearchProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const term = queryParams.get('q');

  const validationSchema = VALID.useSearchSchema();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ISearch>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      valueSearch: term ?? '',
    },
  });

  const submit = (data: ISearch) => {
    console.log(data);
  };

  const noResultMock = [];

  return (
    <div className="flex flex-col items-center" {...props}>
      <MOL.Header>
        <span className="flex h-min w-full items-center gap-3">
          <Button variant="link" onClick={() => navigate(ROUTES.Home)}>
            <ATM.LogoGoogle width={80} />
          </Button>
          <form onSubmit={handleSubmit(submit)} className="w-full">
            <ATM.Input.Root variant="slim">
              <ATM.Input.Prefix type="submit">
                <Search size={14} stroke="#555" />
              </ATM.Input.Prefix>
              <ATM.Input.Control placeholder="" {...register('valueSearch')} />
              {watch('valueSearch') && (
                <ATM.Input.Sufixe
                  type="button"
                  onClick={() => setValue('valueSearch', '')}
                >
                  <X size={14} stroke="#555" />
                </ATM.Input.Sufixe>
              )}
            </ATM.Input.Root>
          </form>
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

      <main className="mt-6 flex min-h-[calc(100vh-8rem)] w-full flex-col items-center gap-y-6 px-6 lg:grid lg:grid-cols-resultSearch lg:items-start lg:gap-x-6">
        {errors.valueSearch?.message ? (
          <MOL.NoResult
            term={[errors.valueSearch?.message ?? '', term ?? '']}
            isFullMessage={false}
          />
        ) : noResultMock.length === 0 ? (
          <MOL.NoResult term={['No results found for ', term ?? '']} />
        ) : (
          <ul className="w-full space-y-4">
            <MOL.ListItem
              title="Bonga shad"
              url="http://my-site.com"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt accusamus ex suscipit enim! Atque beatae commodi accusamus nostrum sit fugit ex, sunt, itaque neque culpa sapiente maiores mollitia ipsam."
            />
            <MOL.ListItem
              title="Bonga shad"
              url="http://my-site.com"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt accusamus ex suscipit enim! Atque beatae commodi accusamus nostrum sit fugit ex, sunt, itaque neque culpa sapiente maiores mollitia ipsam."
            />
            <MOL.ListItem
              title="Bonga shad"
              url="http://my-site.com"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt accusamus ex suscipit enim! Atque beatae commodi accusamus nostrum sit fugit ex, sunt, itaque neque culpa sapiente maiores mollitia ipsam."
            />
            <MOL.ListItem
              title="Bonga shad"
              url="http://my-site.com"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt accusamus ex suscipit enim! Atque beatae commodi accusamus nostrum sit fugit ex, sunt, itaque neque culpa sapiente maiores mollitia ipsam."
            />
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
        )}

        <div className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-700/50 lg:static lg:h-auto lg:w-auto lg:items-start lg:bg-transparent">
          <div className="flex w-80 flex-col rounded border bg-neutral-50 p-3">
            <img
              src="https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="animal"
              className="h-40 w-full object-cover"
            />
            <a
              className="pt-2 text-xs text-neutral-700"
              href="http://my-site.com"
            >
              http://my-site.com
            </a>
            <h2 className="py-1 font-semibold text-zinc-800">Bonga shad</h2>
            <p className="text-sm text-zinc-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              unde repellat voluptatibus!
            </p>
          </div>
        </div>
      </main>
      <MOL.Footer />
    </div>
  );
}

export { ResultSearch, type ResultSearchProps };
