import axios from 'axios';

export const postMethod = (endPoint, formData, token) => {
  const response = axios.post(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/${endPoint}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
