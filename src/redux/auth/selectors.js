export const selectAuth = state => {
    const { token } = state.auth;
    return { token };
  };
  
  export const selectUser = state => state.auth.user;