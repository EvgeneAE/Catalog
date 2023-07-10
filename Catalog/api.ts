import { Product } from './types/ProductType';

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('/products/:path', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return data;
};
