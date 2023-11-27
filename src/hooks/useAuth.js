import { useSelector } from 'react-redux';
import {
  selectAuth,
  selectIsLoggedIn,
  selectUser,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const token = useSelector(selectAuth);

  return {
    isLoggedIn,
    user,
    token,
  };
};
