import { createAsyncThunk } from '@reduxjs/toolkit';
import { authenticateUser } from '../services/authService';
import { loginStart, loginSuccess, loginFailure } from './authSlice';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      dispatch(loginStart());
      const user = await authenticateUser(credentials);
      if (user) {
        dispatch(loginSuccess(user));
        return user;
      } else {
        dispatch(loginFailure('Credenciales incorrectas'));
        return rejectWithValue('Credenciales incorrectas');
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      return rejectWithValue(error.message);
    }
  }
);