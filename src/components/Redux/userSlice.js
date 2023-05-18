import { createSlice } from '@reduxjs/toolkit';
import { fetchgetUsers, fetchupdateUsers } from './option';

const UserSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },
  reducers: {
    users: (state, action) => [...state, action.payload],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchgetUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchgetUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchgetUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })      
      .addCase(fetchupdateUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.error = null;
      })
      .addCase(fetchupdateUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { users } = UserSlice.actions;
export const usersReducer = UserSlice.reducer;