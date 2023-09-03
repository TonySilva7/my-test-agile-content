import { useAppDispatch, useAppSelector } from '@APP/app/hooks';
import { ATM, MOL } from '@APP/components';
import { FEAT } from '@APP/features';
import { VALID } from '@APP/hooks';
import { ROUTES } from '@APP/routes/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grip, Search, X } from 'lucide-react';
import { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type MainPageProps = ComponentProps<'div'>;
type ISearch = {
  valueSearch: string;
};

function MainPage({ ...props }: MainPageProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { avatar_url } = useAppSelector(FEAT.USERS.selectUsers);
  const validationSchema = VALID.useSearchSchema();
  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<ISearch>({
      resolver: yupResolver(validationSchema),
    });

  const submit = (data: ISearch) => {
    dispatch(FEAT.ANIMAL.handleGetAnimalsByName(data.valueSearch));
    navigate(`${ROUTES.ResultPage}/search?q=${data.valueSearch}`);
  };

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

          <ATM.Avatar avatarUrl={avatar_url} />
        </div>
      </MOL.Header>

      <MOL.MainContent>
        <ATM.LogoGoogle width={250} />

        <MOL.Form onSubmit={handleSubmit(submit)}>
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
                data-testid="clear-input-home"
                onClick={() => setValue('valueSearch', '')}
              >
                <X size={16} stroke="#555" />
              </ATM.Input.Sufixe>
            )}
          </ATM.Input.Root>

          <ATM.Button
            type="submit"
            data-testid="button-home"
            disabled={!getValues('valueSearch')}
          >
            Buscar
          </ATM.Button>
        </MOL.Form>
      </MOL.MainContent>

      <MOL.Footer />
    </div>
  );
}

// const MainPage = React.memo(Page);

export { MainPage, type MainPageProps };
