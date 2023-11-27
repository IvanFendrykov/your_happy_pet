import axios from 'axios';

export const postMethod = async (endPoint, formData, token) => {
  try {
    const response = await axios.post(
      `https://happy-pets-rest-api.onrender.com/api/${endPoint}`,
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
