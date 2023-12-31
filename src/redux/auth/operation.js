// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import {toast} from 'react-hot-toast';
// axios.defaults.baseURL = 'https://happy-pets-rest-api.onrender.com/';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// let retry = false;

// export const register = createAsyncThunk(

//   'auth/register',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('api/auth/register', credentials);
//       // setAuthHeader(response.data.accessToken);
//       // localStorage.setItem('refreshToken', response.data.refreshToken);
//       return response.data;
//     } catch (error) {
//       const { code } = error.response.data;
//       if (code === 11000)
//         return rejectWithValue({
//           message: 'User with this email already exist',
//         });
//         toast.error('Email Already Exist! Please enter unique email')

//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {

//       const response = await axios.post('/api/auth/login', credentials);

//       setAuthHeader(response.data.accessToken);
//       localStorage.setItem('refreshToken', response.data.refreshToken);

//       if (response.status === 200) {
//         console.groupCollapsed('Login successful');
//         console.log('Login successful:', response);
//         console.groupEnd();
//       }

//       return response.data;
//     } catch (error) {
//       toast.error('Incorrect data. Check your input and try again.')
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   'auth/currentUser',
//   async (_, { rejectWithValue, getState }) => {
//     if (!retry) {
//       const state = getState();
//       const currentToken = state.auth.token;
//       setAuthHeader(currentToken);
//     }

//     try {
//       const response = await axios.get('api/auth/current');

//       const token = axios.defaults.headers.common.Authorization.split(' ')[1];
//       return { token, data: response.data };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('api/auth/logout');
//       clearAuthHeader();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

let retry = false;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/register', credentials);
      // setAuthHeader(response.data.accessToken);
      // localStorage.setItem('token', response.data.refreshToken);
      return response.data;
    } catch (error) {
      const { code } = error.response.data;
      if (code === 11000)
        return rejectWithValue({
          message: 'User with this email already exist',
        });
      toast.error('Email Already Exist! Please enter unique email');

      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/login', credentials);

      setAuthHeader(response.data.accessToken);


      return response.data;
    } catch (error) {
      toast.error('Incorrect data. Check your input and try again.');
      return rejectWithValue(error.message);
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue, getState }) => {
    if (!retry) {
      const state = getState();
      const currentToken = state.auth.token;
      setAuthHeader(currentToken);
    }

    try {
      const response = await axios.get('api/auth/current');

      const token = axios.defaults.headers.common.Authorization.split(' ')[1];
      return { token, data: response.data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (token, { rejectWithValue }) => {
    try {
      setAuthHeader(token);
      await axios.post('api/auth/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const update = createAsyncThunk(
  'auth/update',
  async ({ token, editedUserFormData }, { rejectWithValue }) => {
    try {
      setAuthHeader(token);
      const response = await axios.patch(
        'api/auth/current',
        editedUserFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const setFavoriteNotice = createAsyncThunk(
  'auth/notice',
  async ({ token, noticeId }, { rejectWithValue }) => {
    try {
      setAuthHeader(token);
      const response = await axios.patch(`api/notices/${noticeId}/favorite`);
      return response.data;
    } catch (error) {
      toast.error('Incorrect data. Check your input and try again.');
      return rejectWithValue(error.message);
    }
  },
);
