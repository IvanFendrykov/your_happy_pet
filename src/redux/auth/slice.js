import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, update } from './operation';

const initialState = {
  username: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isloading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [register.pending](state, action) {
      state.isloading = true;
    },
    [register.rejected](state, action) {
      state.isloading = false;
      state.error = action.payload;
    },
    [login.fulfilled](state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [update.fulfilled](state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const authReducer = authSlice.reducer;
