import { request } from '.';

export async function getProducts() {
  const response = await request.get('/users');

  console.log('Fez a requisição!');

  return response.data;
}
