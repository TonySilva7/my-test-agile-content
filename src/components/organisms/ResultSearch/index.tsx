import { useAppDispatch, useAppSelector } from '@APP/app/hooks';
import { ATM, MOL } from '@APP/components';
import { Button } from '@APP/components/atoms';
import { FEAT } from '@APP/features';
import { VALID } from '@APP/hooks';
import { ROUTES } from '@APP/routes/routes';
import { TEXTS } from '@APP/utils/default-texts';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grip, Search, X } from 'lucide-react';
import { ComponentProps, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { IDataCard } from './types';

type ResultSearchProps = ComponentProps<'div'>;
type ISearch = {
  valueSearch: string;
};

function ResultSearch({ ...props }: ResultSearchProps) {
  const dispatch = useAppDispatch();
  const { avatar_url } = useAppSelector(FEAT.USERS.selectUsers);
  const { animals, status, requestError } = useAppSelector(
    FEAT.ANIMAL.selectAnimals,
  );
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
    navigate(`${ROUTES.ResultPage}/search?q=${data.valueSearch}`);
    setDataCard(null);
    dispatch(FEAT.ANIMAL.handleGetAnimalsByName(data.valueSearch));
  };

  const [dataCard, setDataCard] = useState<IDataCard | null>(null);

  const handleClickItem = (id: number) => {
    const animal = animals.find((animal) => animal.id === id);
    if (animal) {
      setDataCard({
        title: animal.title,
        description: animal.description,
        imageUrl: animal.image,
        url: animal.url,
      });
    }
  };

  const handleClearSearch = () => {
    setValue('valueSearch', '');
    dispatch(FEAT.ANIMAL.handleResetAnimals());
    setDataCard(null);
  };

  return (
    <div className="flex flex-col items-center" {...props}>
      <MOL.Header>
        <span className="flex h-min w-full items-center gap-3">
          <Button variant="link" onClick={() => navigate(ROUTES.Home)}>
            <ATM.LogoGoogle width={80} />
          </Button>
          <MOL.Form onSubmit={handleSubmit(submit)} variant="secondary">
            <ATM.Input.Root variant="slim">
              <ATM.Input.Prefix
                type="submit"
                data-testid="button-search-result"
              >
                <Search size={14} stroke="#555" />
              </ATM.Input.Prefix>
              <ATM.Input.Control
                placeholder=""
                data-testid="input-search-result"
                {...register('valueSearch')}
              />
              {watch('valueSearch') && (
                <ATM.Input.Sufixe type="button" onClick={handleClearSearch}>
                  <X size={14} stroke="#555" />
                </ATM.Input.Sufixe>
              )}
            </ATM.Input.Root>
          </MOL.Form>
        </span>

        <div className="hidden items-center gap-3 text-zinc-800 lg:flex">
          <ATM.Button variant="ghost">
            <Grip className="font-medium text-zinc-600" />
          </ATM.Button>
          <ATM.Avatar avatarUrl={avatar_url} />
        </div>
      </MOL.Header>

      <MOL.MainContent variant="secondary">
        <section className="w-full">
          {status === 'pending' ? (
            <div className="flex w-full flex-col gap-y-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <ATM.SkeletonLoading key={index} />
              ))}
            </div>
          ) : requestError ? (
            <span>
              <MOL.NoResult term={[`${requestError} `, `'${term}'` ?? '']} />
              <MOL.NoResult
                term={['Try looking for: ', TEXTS.defaultTextNoResult]}
              />
            </span>
          ) : errors.valueSearch?.message ? (
            <MOL.NoResult
              term={[
                errors.valueSearch?.message ?? '',
                TEXTS.defaultTextNoResult,
              ]}
            />
          ) : (
            <MOL.List>
              {animals.map((animal) => (
                <MOL.ListItem
                  key={animal.id}
                  onClick={() => handleClickItem(animal.id)}
                  url={animal.url}
                  title={animal.title}
                  text={animal.description}
                />
              ))}
            </MOL.List>
          )}
        </section>

        {dataCard && (
          <MOL.AnimalCard
            title={dataCard.title}
            description={dataCard.description}
            imageUrl={dataCard.imageUrl}
            url={dataCard.url}
            onClick={() => setDataCard(null)}
          />
        )}
      </MOL.MainContent>

      <MOL.Footer />
    </div>
  );
}

export { ResultSearch, type ResultSearchProps };
