import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, removeAuthToken, getAuthToken, registerUser, getCurrentUser, updateUser, changePassword } from '../services/authService';

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

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      return rejectWithValue(error.message || 'მომხმარებლის მონაცემების მიღება ვერ მოხერხდა');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUser',
  async (updatedData, { rejectWithValue }) => {
    try {
      const user = await updateUser(updatedData);
      return user;
    } catch (error) {
      return rejectWithValue(error.message || 'მომხმარებლის მონაცემების განახლება ვერ მოხერხდა');
    }
  }
);

export const changeUserPassword = createAsyncThunk(
  'auth/changePassword',
  async (passwordData, { rejectWithValue }) => {
    try {
      await changePassword(passwordData);
      return 'პაროლი წარმატებით შეიცვალა';
    } catch (error) {
      return rejectWithValue(error.message || 'პაროლის შეცვლა ვერ მოხერხდა');
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
        state.token = action.payload.access_token || state.token;
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
        state.token = action.payload.access_token || state.token;
        state.user = action.payload.user || null;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'რეგისტრაცია ვერ მოხერხდა';
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'მომხმარებლის მონაცემების მიღება ვერ მოხერხდა';
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'მონაცემების განახლება ვერ მოხერხდა';
      })
      .addCase(changeUserPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changeUserPassword.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(changeUserPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'პაროლის განახლება ვერ მოხერხდა';
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export default authSlice.reducer;