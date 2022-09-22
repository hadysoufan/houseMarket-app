import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../Hooks/useAuthStatus.hooks';
import Spinner from './Spinner.component';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
