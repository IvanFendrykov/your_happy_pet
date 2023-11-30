import { useSelector } from 'react-redux';
import {
  getUserImage,
  selectAuth,
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const token = useSelector(selectAuth);
  const profilePic = useSelector(getUserImage);
  const isLoading = useSelector(selectIsLoading);
  return {
    isLoggedIn,
    user,
    token,
    profilePic,
    isLoading,
  };
};
