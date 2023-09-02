import { TYPES } from '@APP/@types';
import { faker } from '@faker-js/faker';

const fakerAnimals = {
  getAnimals: (): TYPES.IAnimals[] => {
    const getImage = () => faker.image.urlLoremFlickr({ category: 'animals' });
    const getType = () => faker.animal.type();
    const getUrl = () => faker.internet.url();
    const getText = () => faker.lorem.sentences();
    const getTitle = (type: keyof typeof faker.animal) => faker.animal[type]();

    const data = [...new Array(100)].map((item, index) => {
      const type = getType();
      return {
        type,
        id: index + 1,
        url: getUrl(),
        title: getTitle(type as keyof typeof faker.animal),
        description: getText(),
        image: getImage(),
      };
    });

    return data;
  },
};

export { fakerAnimals };
