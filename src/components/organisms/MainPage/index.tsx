import { useAppDispatch } from '@APP/app/hooks';
import { ATM, MOL } from '@APP/components';
import { FEAT } from '@APP/features';
import { VALID } from '@APP/hooks';
import { ROUTES } from '@APP/routes/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grip, Search, X } from 'lucide-react';
import React, { ComponentProps, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type MainPageProps = ComponentProps<'div'>;
type ISearch = {
  valueSearch: string;
};

function Page({ ...props }: MainPageProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const validationSchema = VALID.useSearchSchema();
  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<ISearch>({
      resolver: yupResolver(validationSchema),
    });

  const submit = (data: ISearch) => {
    dispatch(FEAT.ANIMAL.handleGetAnimalsByName(data.valueSearch));
    navigate(`${ROUTES.ResultPage}/search?q=${data.valueSearch}`);
  };

  const getAnimals = useCallback(() => {
    dispatch(FEAT.ANIMAL.handleGetAnimals());
  }, [dispatch]);

  useEffect(() => {
    getAnimals();
  }, [getAnimals]);

  return (
    <div
      className="flex h-screen flex-col items-center justify-between"
      {...props}
    >
      <MOL.Header>
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
      </MOL.Header>
      <main className="flex w-full flex-col items-center gap-y-6 px-3 lg:w-2/4">
        <ATM.LogoGoogle width={250} />

        <form
          onSubmit={handleSubmit(submit)}
          className="flex w-full flex-col items-center gap-2"
        >
          <ATM.Input.Root>
            <ATM.Input.Prefix type="submit">
              <Search size={14} stroke="#555" />
            </ATM.Input.Prefix>
            <ATM.Input.Control
              data-testid="search-home"
              placeholder=""
              {...register('valueSearch')}
            />
            {watch('valueSearch') && (
              <ATM.Input.Sufixe
                type="button"
                onClick={() => setValue('valueSearch', '')}
              >
                <X size={16} stroke="#555" />
              </ATM.Input.Sufixe>
            )}
          </ATM.Input.Root>

          <ATM.Button type="submit" disabled={!getValues('valueSearch')}>
            Buscar
          </ATM.Button>
        </form>
      </main>
      <MOL.Footer />
    </div>
  );
}

const MainPage = React.memo(Page);

export { MainPage, type MainPageProps };
