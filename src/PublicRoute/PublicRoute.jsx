import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth } from '../redux/auth/auth-selectors';
import VortexLoader from '../components/VortexLoader/VortexLoader';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <VortexLoader />;
  }

  if (isLoggedIn) {
    return <Navigate to="/user" />;
  }

  return <Outlet />;
};

export default PublicRoute;
