import '@testing-library/jest-dom';

import App from '@APP/App';
import { setupStore } from '@APP/app/store';
import { FEAT } from '@APP/features';
import { ResultPage } from '@APP/pages';
import { renderWithProviders } from '@APP/utils/test-utils';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

    await act(async () => {
      await store.dispatch(FEAT.ANIMAL.handleGetAnimals()).unwrap();
      expect(store.getState().animalReducer.fakeItems).toHaveLength(100);

      const inputHome: HTMLInputElement = screen.getByTestId('search-home');
      fireEvent.change(inputHome, { target: { value: 'lion' } });

      await store
        .dispatch(FEAT.ANIMAL.handleGetAnimalsByName(inputHome.value))
        .unwrap();
    });

    expect(store.getState().animalReducer.animals.length).toBeGreaterThan(0);
  });
});

describe('<ResultSearch />', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <ResultPage />
      </BrowserRouter>,
    );
  });

  test('Should show message error when input is empty', async () => {
    const buttonResult = screen.getByTestId('button-search-result');
    fireEvent.click(buttonResult);

    await waitFor(() => {
      expect(screen.getByText('Try looking for:')).toBeInTheDocument();
    });
  });

  test('Should show message error when no result search term', async () => {
    const inputElement: HTMLInputElement = screen.getByTestId(
      'input-search-result',
    );
    fireEvent.change(inputElement, { target: { value: 'xxx' } });

    const buttonResult = screen.getByTestId('button-search-result');
    fireEvent.click(buttonResult);

    await waitFor(
      () => {
        return expect(
          screen.getByText('No results found for'),
        ).toBeInTheDocument();
      },
      { timeout: 2500 },
    );
  });
});
