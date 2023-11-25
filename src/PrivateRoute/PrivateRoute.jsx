import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth } from '../redux/auth/auth-selectors';
import VortexLoader from '../components/VortexLoader/VortexLoader';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <VortexLoader />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
