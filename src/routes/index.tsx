import * as PAGE from '@APP/pages';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from './routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.Home} element={<PAGE.Home />} />
      <Route path={ROUTES.ResultPage} element={<PAGE.ResultPage />} />
      <Route path="/secret" element={<PrivateRoute />}>
        <Route path="" element={<h1>Private</h1>} />
      </Route>
    </Routes>
  );
};
