import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, removeAuthToken, getAuthToken, registerUser } from '../services/authService';

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'ვერ მოხერხდა შესვლა');
    }
  }
);

export const userRegister = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUser(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'ვერ მოხერხდა რეგისტრაცია');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: !!getAuthToken(),
    token: getAuthToken(),
    user: null,
    status: 'idle',
    error: null,
  },
  
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      state.status = 'idle';
      state.error = null;
      removeAuthToken();
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.token = action.payload.access_token;
        state.user = action.payload.user || null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'შესვლა ვერ მოხერხდა';
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
      })
      .addCase(userRegister.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLoggedIn = true;
        state.token = action.payload.access_token;
        state.user = action.payload.user || null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'რეგისტრაცია ვერ მოხერხდა';
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;