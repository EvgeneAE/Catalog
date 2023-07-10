export type Product = {
  id: number;
  path: string;
  product_category: string;
  product_name: string;
  composition: string;
  image: string;
  price: number | string;
  weight: number | string;
  count: number;
  score: number;
  onlyValuesOfDishues: number;
  children?: JSX.Element | JSX.Element[];
};
