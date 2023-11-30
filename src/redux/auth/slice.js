import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  update,
  setFavoriteNotice,
} from './operation';

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
      state.profilePic = action.payload.profilePic;
      state.isloading = false;
      state.favoriteNoties = action.payload.favoriteNoties;
    },
    [logout.fulfilled](state, action) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.profilePic = null;
    },
    [logout.rejected](state, action) {
      state.username = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.profilePic = null;
    },
    [update.pending](state, action) {
      state.isLoading = true;
    },
    [update.fulfilled](state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profilePic = action.payload.profilePic;
      state.isLoading = false;
    },
    [setFavoriteNotice.fulfilled](state, action) {
      state.favoriteNoties = action.payload.favoriteNoties;
    },
  },
});

export const authReducer = authSlice.reducer;
