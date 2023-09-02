import { http } from './config';

export async function getProducts() {
  const response = await http.get('/users');

  return response.data;
}
