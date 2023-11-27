export const selectAuth = (state) => {
  const auth = state.auth;
  return auth;
};




export const selectUser = state => state.auth.username;


export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

export const getUser = (state) => state.auth.user.name;

export const selectRegistrationSuccessful = ({ auth }) =>
  auth.registrationSuccessful;

export const selectlogoutSuccessful = ({ auth }) => auth.logoutSuccessful;

export const userInfo = (state) => state.auth;

export const getFavorite = ({ auth }) => auth.user.favorite;

export const getUserId = ({ auth }) => auth.user._id;

export const getAllFavoriteNotices = ({ auth }) => auth.user.itemsFavorite;
export const userMyPets = (state) => {
  const { pets } = state.auth;
  return pets;
};
