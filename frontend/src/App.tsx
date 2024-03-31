import { Box, CssBaseline } from "@mui/material";
import Cookies from "js-cookie";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import AddJobModal from "./modals/AddJobModal.tsx";
import AddNationalityModal from "./modals/AddNationalityModal.tsx";
<<<<<<< HEAD
import DeleteModal from "./modals/DeleteModa.tsx";
import EditCompanyModal from "./modals/EditCompanyModal.tsx";
import EditJobModal from "./modals/EditJobModal.tsx";
import EditNationalityModal from "./modals/EditNationalityModal.tsx";
import EditOwnerModal from "./modals/EditOwnerModal.tsx";
import ForgotPasswordModal from "./modals/ForgotPasswordModal.tsx";
import { getProfile, setAuth } from "./store/auth.ts";
=======
import EditJobModal from "./modals/EditJobModal.tsx";
import EditNationalityModal from "./modals/EditNationalityModal.tsx";
import ForgotPasswordModal from "./modals/ForgotPasswordModal.tsx";
import { setAuth } from "./store/auth.ts";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { AppDispatch } from "./store/store.ts";
EditJobModal;

const AuthRoutes = [
  `${import.meta.env.VITE_LOGIN_ROUTE}`,
  `${import.meta.env.VITE_RESET_PASSWORD_ROUTE}`,
];

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
<<<<<<< HEAD
  const [signed, setSigned] = useState(true);
=======
  // const [signed, setSigned] = useState(true);
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949

  useEffect(() => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_TITLE}`);
    const userId = Cookies.get(`${import.meta.env.VITE_USER_ID_TITLE}`);
<<<<<<< HEAD
    if (token && userId) {
      dispatch(setAuth({ token, userId }));
      dispatch(getProfile());
      setSigned(true);
=======
    if (!token && !userId) {
      dispatch(setAuth({ token, userId }));
      // setSigned(true);
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    } else {
      if (!AuthRoutes.includes(pathname)) {
        navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
      }
<<<<<<< HEAD
      setSigned(false);
    }
  }, [dispatch, navigate, pathname]);

  return signed && !AuthRoutes.includes(pathname) ? (
    <Box sx={{ display: "flex" }} className={`bg-bg`}>
=======
      // setSigned(false);
    }
  }, [dispatch, navigate, pathname]);

  return !AuthRoutes.includes(pathname) ? (
    <Box sx={{ display: "flex" }}>
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      <CssBaseline />
      <AddJobModal />
      <AddNationalityModal />
      <EditJobModal />
<<<<<<< HEAD
      <EditOwnerModal />
      <EditCompanyModal />
      <EditNationalityModal />
      <DeleteModal />
      <Toaster />
      <Header />
      <Sidebar />
      <Box
        component="main"
        className={`min-h-[100vh] grid justify-stretch items-center content-between w-full pt-[70px]`}
      >
=======
      <EditNationalityModal />
      <Toaster />
      <Header />
      <Sidebar />
      <Box component="main" className={`bg-bg min-h-[100vh] w-full pt-[70px]`}>
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
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
}
