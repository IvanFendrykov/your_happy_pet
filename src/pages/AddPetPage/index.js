import axios from 'axios';

export const postMethod = async (endPoint, formData, token) => {
  const response = await axios.post(
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
