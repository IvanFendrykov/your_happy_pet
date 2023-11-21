import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://happy-pets-rest-api.onrender.com/';
import * as toastifyMessage from '../../components/Toastify/reactToastifyMessage';

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
        const {code} = error.response.data;
        if(code === 11000) 
          return rejectWithValue({
            message: 'User with this email already exist',
          });
          toastifyMessage.toastError('User with this email already exist')
          return rejectWithValue(error.message);
        } 
        
      }

  );

