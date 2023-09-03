import { TYPES } from '@APP/@types';
import { REPO } from '@APP/repository';
import { SERVICE } from '@APP/services';
import {
  ActionReducerMapBuilder,
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../../app/store';

const initialState: TYPES.IAnimalsState = REPO.animalsModel;

export const handleGetAnimals = createAsyncThunk('animals/getAll', async () => {
  const response = await SERVICE.fakerAnimals.getAnimalsAsync();
  return response;
});

export const handleGetAnimalsByName = createAsyncThunk(
  'animals/getByName',
  async (searchTerm: string, { rejectWithValue, getState }) => {
    try {
      const currentData = getState() as RootState;
      const response = await SERVICE.animals.getAnimalsAsyncByName({
        data: currentData.animalReducer.fakeItems,
        searchTerm,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const animalSlice = createSlice({
  name: 'animals',
  initialState,

  reducers: {
    handleResetAnimals: (state) => {
      state.animals = [];
      state.requestError = undefined;
      state.status = 'idle';
    },
  },

  extraReducers: (builder: ActionReducerMapBuilder<TYPES.IAnimalsState>) => {
    builder
      .addCase(handleGetAnimals.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        handleGetAnimals.fulfilled,
        (state, action: PayloadAction<TYPES.IAnimals[]>) => {
          state.status = 'success';
          state.fakeItems = action.payload;
        },
      )
      .addCase(handleGetAnimals.rejected, (state) => {
        state.status = 'error';
      });

    builder
      .addCase(handleGetAnimalsByName.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        handleGetAnimalsByName.fulfilled,
        (state, action: PayloadAction<TYPES.IAnimals[]>) => {
          state.status = 'success';
          state.animals = action.payload;
        },
      )
      .addCase(handleGetAnimalsByName.rejected, (state, action: AnyAction) => {
        state.status = 'error';
        state.requestError = action.payload;
        state.animals = [];
      });
  },
});

export const { handleResetAnimals } = animalSlice.actions;

export const selectAnimals = (state: RootState): TYPES.IAnimalsState =>
  state.animalReducer;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default animalSlice.reducer;
