import axios from 'axios';
import {useAuth} from '../../hooks/useAuth'

export const postMethod = async (endPoint, formData, token) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/${endPoint}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('API Call Error:', error.message);
    throw error;
  }
};

// `https://happy-pets-rest-api.onrender.com/api/${endPoint}`,
