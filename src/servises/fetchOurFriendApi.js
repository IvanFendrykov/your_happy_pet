const BASE_URL = 'https://happy-pets-rest-api.onrender.com';

export async function fetchOurFriendsApi() {
  const url = `${BASE_URL}/api/ourfriends/`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Status code: ${response.status}. Status message: ${response.statusText}`
      );
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

