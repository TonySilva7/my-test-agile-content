import { TYPES } from '@APP/@types';

const animalsModel: TYPES.IAnimalsState = {
  fakeItems: [
    {
      type: '',
      id: 0,
      description: '',
      image: '',
      title: '',
      url: '',
    },
  ],
  animals: [],
  status: 'idle',
};

export { animalsModel };
