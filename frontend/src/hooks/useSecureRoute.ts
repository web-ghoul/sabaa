import Cookies from "js-cookie";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { getProfile, setAuth } from "../store/auth";
import { AppDispatch } from "../store/store";

const useSecureRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { AuthRoutes } = useContext(AppContext);
  const { pathname } = useLocation();

  const handleSecureRoute = () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const userId = Cookies.get(`${import.meta.env.VITE_USER_ID_TITLE}`);
    if (token && userId) {
      dispatch(setAuth({ token, userId }));
      dispatch(getProfile());
      return true;
    } else {
      if (!AuthRoutes.includes(pathname)) {
        navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
      }
      return false;
    }
  };
  return { handleSecureRoute };
};

export default useSecureRoute;
