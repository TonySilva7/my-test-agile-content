import { http } from './config';

export async function getProducts() {
  const response = await http.get('/users');

  console.log('Fez a requisição!');

  return response.data;
}
