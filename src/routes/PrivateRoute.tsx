import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  const auth = true;

  if (!auth) alert('Você não tem permissão para acessar essa página!');

  return auth ? <Outlet /> : <Navigate to="/" />;
}
