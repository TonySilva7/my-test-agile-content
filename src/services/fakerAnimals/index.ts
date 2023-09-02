import { TYPES } from '@APP/@types';
import { REPO } from '@APP/repository';

const fakerAnimals = {
  getAnimalsAsync: () => {
    return new Promise<TYPES.IAnimals[]>((resolve) => {
      setTimeout(() => {
        resolve(REPO.fakerAnimals.getAnimals());
      }, Math.random() * 3000);
    });
  },
};

export { fakerAnimals };
