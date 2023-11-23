import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-hot-toast';
axios.defaults.baseURL = 'https://happy-pets-rest-api.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};




export const register = createAsyncThunk(

  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/register', credentials);
      // setAuthHeader(response.data.accessToken);
      // localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    } catch (error) {
      const { code } = error.response.data;
      if (code === 11000)
        return rejectWithValue({
          message: 'User with this email already exist',
        });
        toast.error('Email Already Exist! Plase enter unique email')
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', credentials);
      setAuthHeader(response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      
      if (response.status === 200) {
        console.groupCollapsed('Login successful');
        console.log('Login successful:', response);
        console.groupEnd();
      }
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

