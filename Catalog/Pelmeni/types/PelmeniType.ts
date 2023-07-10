export type PelmeniType = {
  id: number;
  path: string;
  product_category: string;
  product_name: string;
  composition: string;
  image: string;
  price: number | string;
  weight: number | string;
};

export type PelmenId = PelmeniType['id'];
// export type PelmenId = {
//   id: number;
// };
