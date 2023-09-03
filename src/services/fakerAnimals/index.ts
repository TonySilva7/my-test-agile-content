import { TYPES } from '@APP/@types';
import { REPO } from '@APP/repository';

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
