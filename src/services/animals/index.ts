import { TYPES } from '@APP/@types';

type IPayload = {
  searchTerm: string;
  data: TYPES.IAnimals[];
};

const animals = {
  /**
   * Function to get animals by name from repository layer, simulating an async request
   * @returns {Promise<TYPES.IAnimals[]>} Promise with animals
   * @param {string} searchTerm - Search term to filter animals
   * @returns {Promise<TYPES.IAnimals[]>} Promise with animals
   * @throws {string} No results found for
   */
  getAnimalsAsyncByName: ({
    searchTerm,
    data,
  }: IPayload): Promise<TYPES.IAnimals[]> => {
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
