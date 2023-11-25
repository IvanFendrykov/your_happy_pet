import axios from 'axios';

export const postMethod = async (endPoint, formData) => {
  try {
    const response = await axios.post(
      `https://happy-pets-rest-api.onrender.com/api/${endPoint}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    // Process the response or return it as needed
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('API Call Error:', error.message);
    throw error; // You can handle the error or rethrow it based on your requirements
  }
};
