import { useEffect, useState } from 'react';

import { IUsers } from '../@types/user';
import Counter from '../components/Counter';
import { getProducts } from '../services/products';

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function foo(): Promise<void> {
      const data = await getProducts();
      setUsers(data);
    }

    foo();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid 1px red',
        flexDirection: 'column',
      }}
    >
      <h1>Ready to code!</h1>
      <Counter />
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user: IUsers) => (
          <li key={user.id}>
            {user.name} | {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
