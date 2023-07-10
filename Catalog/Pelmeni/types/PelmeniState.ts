import { PelmeniType } from './PelmeniType';

export type PelmeniState = {
  pelmeni: PelmeniType[];
  error: string | undefined;
  message: string | undefined;
};
