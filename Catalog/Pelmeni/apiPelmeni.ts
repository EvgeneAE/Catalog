import { PelmeniType } from './types/PelmeniType';

export const getPelmeni = async (): Promise<PelmeniType[]> => {
  const res = await fetch('/pelmeni/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
  //
};
export const deletePelmen = async (pelId: number): Promise<PelmeniType> => {
  const res = await fetch(`/pelmeni/${pelId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};

//доп как можно
// try {
//     const res = await fetch('/pelmeni');
//     if (!res.ok) {
//       throw new Error(await res.json());
//     } else {
//       return await res.json();
//     }
//   } catch (error: any) {
//     throw new Error(
//       error ? error.message : 'Ошибка сервера, попробуйте позже.'
//     );
//   }
