import { Outlet, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
import axios from 'axios';
const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['']);
  async function getUser(id) {
    const userInfo = await axios.get(`/user/${id}`);
    dispatch(login(userInfo.data));
  }
  const isAuth = () => {
    if (cookies.login) {
      getUser(cookies.login);
      return true;
    }
    return false;
  };

  let location = useLocation();
  return isAuth() ? (
    <Outlet />
  ) : (
    <Navigate to="/isticmaale/galid" state={{ from: location }} />
  );
};

export default ProtectedRoute;
