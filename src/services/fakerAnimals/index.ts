import { TYPES } from '@APP/@types';
import { REPO } from '@APP/repository';

/**
 * Function to get animals from repository layer, simulating an async request
 * @returns {Promise<TYPES.IAnimals[]>} Promise with animals
 */
const fakerAnimals = {
  getAnimalsAsync: () => {
    return new Promise<TYPES.IAnimals[]>((resolve) => {
      setTimeout(() => {
        const animals = REPO.fakerAnimals.getAnimals();
        resolve(animals);
      }, Math.random() * 120);
    });
  },
};

export { fakerAnimals };
