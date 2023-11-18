const BASE_URL = 'https://api.ahsabshfbahsfhbasfhbasfnan.org/3';

export async function fetchOurFriendsApi() {
  const url = `${BASE_URL}/ourfriends/`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data.results;
  } catch (error) {
    throw new Error(error.message);
  }
};

