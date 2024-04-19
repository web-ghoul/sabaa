import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import MdSidebar from "./components/Sidebar/MdSidebar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { AppContext } from "./contexts/AppContext.tsx";
import CompanyModal from "./modals/CompanyModal.tsx";
import DeleteModal from "./modals/DeleteModa.tsx";
import ForgotPasswordModal from "./modals/ForgotPasswordModal.tsx";
import JobModal from "./modals/JobModal.tsx";
import NationalityModal from "./modals/NationalityModal.tsx";
import OwnerModal from "./modals/OwnerModal.tsx";
import UserModal from "./modals/UserModal.tsx";
import { getProfile, setAuth } from "./store/auth.ts";
import { AppDispatch } from "./store/store.ts";

const AuthRoutes = [
  `${import.meta.env.VITE_LOGIN_ROUTE}`,
  `${import.meta.env.VITE_RESET_PASSWORD_ROUTE}`,
];

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [signed, setSigned] = useState(true);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const { setQueries } = useContext(AppContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const userId = Cookies.get(`${import.meta.env.VITE_USER_ID_TITLE}`);
    if (token && userId) {
      dispatch(setAuth({ token, userId }));
      dispatch(getProfile());
      setSigned(true);
    } else {
      if (!AuthRoutes.includes(pathname)) {
        navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
      }
      setSigned(false);
    }
  }, [dispatch, navigate, pathname]);

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setQueries(allParams);
  }, [searchParams, setQueries]);

  return signed && !AuthRoutes.includes(pathname) ? (
    <Box sx={{ display: "flex" }} className={`bg-bg relative`}>
      <CssBaseline />
      <JobModal />
      <OwnerModal />
      <UserModal />
      <CompanyModal />
      <NationalityModal />
      <DeleteModal />
      <Toaster />
      <Header />
      {mdScreen ? <MdSidebar /> : <Sidebar />}
      <Box
        component="main"
        className={`min-h-[100vh] grid justify-stretch items-center content-between w-full pt-[70px] md:pt-[60px] sm:!pt-[50px]`}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  ) : (
    <Box
      component={"main"}
      className={`bg-bg min-h-[100vh] w-full grid justify-stretch items-stretch`}
    >
      <ForgotPasswordModal />
      <Outlet />
      <Toaster />
    </Box>
  );
};

export default App;
