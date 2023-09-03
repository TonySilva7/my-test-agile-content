import { TYPES } from '@APP/@types';

type IPayload = {
  searchTerm: string;
  data: TYPES.IAnimals[];
};

const animals = {
  getAnimalsAsyncByName: ({ searchTerm, data }: IPayload) => {
    return new Promise<TYPES.IAnimals[]>((resolve, rejected) => {
      setTimeout(() => {
        const filteredAnimals = data.filter((animal) =>
          animal.type.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        if (filteredAnimals.length === 0) rejected('No results found for');
        resolve(filteredAnimals);
      }, Math.random() * 2300);
    });
  },
};

export { animals };
