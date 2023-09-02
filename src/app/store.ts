import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import animalsReducer from '../features/animals';

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
