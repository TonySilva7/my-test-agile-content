import '@testing-library/jest-dom';

import App from '@APP/App';
import { setupStore } from '@APP/app/store';
import { FEAT } from '@APP/features';
import { renderWithProviders } from '@APP/utils/test-utils';
import { waitFor } from '@testing-library/react';
import { describe, expect } from 'vitest';

describe('<MainPage />', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test('Should start init state with length 1', () => {
    const store = setupStore();
    const items = store.getState().animalReducer.fakeItems;

    expect(items).toHaveLength(1);
  });

  test('Should change item length to 100', async () => {
    const store = setupStore();
    store.dispatch(FEAT.ANIMAL.handleGetAnimals());
    const items = store.getState().animalReducer.fakeItems;

    waitFor(
      () => {
        expect(items).toHaveLength(100);
      },
      {
        timeout: 2000,
      },
    );
  });
});
