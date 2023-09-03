import { IStatusRequest } from '../request';

type IAnimals = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

type IAnimalsState = IStatusRequest & {
  fakeItems: IAnimals[];
  animals: IAnimals[];
  requestError?: string;
};

export type { IAnimals, IAnimalsState };
