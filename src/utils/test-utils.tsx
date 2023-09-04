// As a basic setup, import your same slice reducers
import animalSlice from '@APP/features/animals';
import userSlice from '@APP/features/users';
import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../app/store';

/**
 * This type interface extends the default options for render from RTL, as well
 * as allows the user to specify other things such as initialState, store.
 */
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

/**
 * as allows the user to specify other things such as initialState, store.
 */
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { animalReducer: animalSlice, userReducer: userSlice },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  /**
   *  Return an object with the store and all of RTL's query functions
   */
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
