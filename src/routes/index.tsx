import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secret" element={<PrivateRoute />}>
        <Route path="" element={<h1>Private</h1>} />
      </Route>
    </Routes>
  );
};
