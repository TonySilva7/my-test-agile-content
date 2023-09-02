import { TYPES } from '@APP/@types';
import { REPO } from '@APP/repository';
import { SERVICE } from '@APP/services';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TYPES.IAnimalsState = REPO.animalsModel;

export const handleGetAnimals = createAsyncThunk('animals/getAll', async () => {
  const response = await SERVICE.fakerAnimals.getAnimalsAsync();
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const animalSlice = createSlice({
  name: 'animals',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(handleGetAnimals.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(handleGetAnimals.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(handleGetAnimals.rejected, (state) => {
        state.status = 'error';
      });
  },
});

// export const { increment, decrement, incrementByAmount } = animalSlice.actions;

export const selectAnimals = (state: RootState): TYPES.IAnimalsState =>
  state.animals;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default animalSlice.reducer;
