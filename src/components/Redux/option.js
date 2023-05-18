import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUsers } from 'components/Fetch/updateUsers';
import { getUsers } from 'components/Fetch/getUsers';

export const fetchgetUsers = createAsyncThunk(
  'users/fetchgetUsers',
  async (_, thunkAPI) => {
    try {
      const response = await getUsers();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchupdateUsers = createAsyncThunk(
  'users/fetchupdateUsers',
  async (data, thunkAPI) => {
    try {
      const response = await updateUsers(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);