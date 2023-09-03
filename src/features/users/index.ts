import { TYPES } from '@APP/@types';
import { RootState } from '@APP/app/store';
import { REPO } from '@APP/repository';
import { SERVICE } from '@APP/services';
import {
  ActionReducerMapBuilder,
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

const initialState: TYPES.IUserState = REPO.userModel;

export const handleGetUserByName = createAsyncThunk(
  'users/getByName',
  async (name: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await SERVICE.users.getUserByName({
        name,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {},

  extraReducers: (builder: ActionReducerMapBuilder<TYPES.IUserState>) => {
    builder
      .addCase(handleGetUserByName.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        handleGetUserByName.fulfilled,
        (state, action: PayloadAction<TYPES.IUserState>) => {
          state.status = 'success';
          state.avatar_url = action.payload.avatar_url;
          state.id = action.payload.id;
        },
      )
      .addCase(handleGetUserByName.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const selectUsers = (state: RootState): TYPES.IUserState =>
  state.userReducer;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default userSlice.reducer;
