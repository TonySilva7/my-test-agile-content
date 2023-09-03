import '@testing-library/jest-dom';

import App from '@APP/App';
import { setupStore } from '@APP/app/store';
import { FEAT } from '@APP/features';
import { renderWithProviders } from '@APP/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

describe('<ResultSearch />', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test('Should start init state of animals with length 0', () => {
    const store = setupStore();
    const { animals } = store.getState().animalReducer;

    expect(animals).toHaveLength(0);
  });

  test('Should change item length to more then 0', async () => {
    const store = setupStore();
    expect(store.getState().animalReducer.animals).toHaveLength(0);
    expect(store.getState().animalReducer.fakeItems).toHaveLength(1);

    await store.dispatch(FEAT.ANIMAL.handleGetAnimals()).unwrap();
    expect(store.getState().animalReducer.fakeItems).toHaveLength(100);

    const inputHome: HTMLInputElement = screen.getByTestId('search-home');
    fireEvent.change(inputHome, { target: { value: 'lion' } });

    await store
      .dispatch(FEAT.ANIMAL.handleGetAnimalsByName(inputHome.value))
      .unwrap();

    expect(store.getState().animalReducer.animals.length).toBeGreaterThan(0);
  });
});
