import { ATM, MOL } from '@APP/components';
import { Button } from '@APP/components/atoms';
import { VALID } from '@APP/hooks';
import { ROUTES } from '@APP/routes/routes';
import { faker } from '@faker-js/faker';
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

  const defaultTextNoResult =
    'insect, finish, horse, crocodilia, bear, cow, lion, rabbit, cat, snake, dog, bird.';

  const getImage = () => faker.image.urlLoremFlickr({ category: 'animals' });
  const getType = () => faker.animal.type();
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  const getTitle = (type: keyof typeof faker.animal) => faker.animal[type]();
  const data = [...new Array(100)].map((item, index) => {
    const type = getType();
    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type as keyof typeof faker.animal),
      description: getText(),
      image: getImage(),
    };
  });

  console.log(data);

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
            term={[errors.valueSearch?.message ?? '', defaultTextNoResult]}
          />
        ) : data.length === 0 ? (
          <span>
            <MOL.NoResult term={['No results found for ', `'${term}'` ?? '']} />
            <MOL.NoResult term={['Try looking for: ', defaultTextNoResult]} />
          </span>
        ) : (
          <ul className="w-full space-y-4">
            {data.map((animal) => (
              <MOL.ListItem
                key={animal.id}
                url={animal.url}
                title={animal.title}
                text={animal.description}
              />
            ))}
            <li>
              <ATM.SkeletonLoading />
            </li>
          </ul>
        )}
      </main>
      <MOL.Footer />
    </div>
  );
}

export { ResultSearch, type ResultSearchProps };
