type IAnimals = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

type IAnimalsState = {
  fakeItems: IAnimals[];
  animals: IAnimals[];
  requestError?: string;
  status: 'idle' | 'pending' | 'success' | 'error';
};

export type { IAnimals, IAnimalsState };
