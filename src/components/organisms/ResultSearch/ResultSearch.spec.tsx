import '@testing-library/jest-dom';

import App from '@APP/App';
import { setupStore } from '@APP/app/store';
import { renderWithProviders } from '@APP/utils/test-utils';
import { describe, expect } from 'vitest';

describe('<ResultSearch />', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test('Sets up initial state state with actions', () => {
    const store = setupStore();
    const items = store.getState().animalReducer.fakeItems;

    expect(items).toHaveLength(1);
  });
});
