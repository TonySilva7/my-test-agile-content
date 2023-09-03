import { FEAT } from '@APP/features';
import { AppRoutes } from '@APP/routes';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FEAT.USERS.handleGetUserByName('TonySilva7'));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
