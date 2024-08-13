import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import MdSidebar from "./components/Sidebar/MdSidebar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { AppContext } from "./contexts/AppContext.tsx";
import useSecureRoute from "./hooks/useSecureRoute.ts";
import CompanyModal from "./modals/CompanyModal.tsx";
import ConvertCustomerModal from "./modals/ConvertCustomerModal.tsx";
import CustomerModal from "./modals/CustomerModal.tsx";
import DeleteModal from "./modals/DeleteModal.tsx";
import DownloadExcelModal from "./modals/DownloadExcelModal.tsx";
import EChannelModal from "./modals/EChannelModal.tsx";
import EmployeeModal from "./modals/EmployeeModal.tsx";
import ForgotPasswordModal from "./modals/ForgotPasswordModal.tsx";
import JobModal from "./modals/JobModal.tsx";
import LinkToCompanyModal from "./modals/LinkToCompanyModal.tsx";
import NationalityModal from "./modals/NationalityModal.tsx";
import NatwasalModal from "./modals/NatwasalModal.jsx";
import NewLCModal from "./modals/NewLCModal.tsx";
import OwnerModal from "./modals/OwnerModal.tsx";
import ProModal from "./modals/ProModal.tsx";
import RoleModal from "./modals/RoleModal.tsx";
import SponsorModal from "./modals/SponsorModal.tsx";
import TasheelModal from "./modals/TasheelModal.tsx";
import TransactionModal from "./modals/TransactionModal.tsx";
import UploadEmployeesModal from "./modals/UploadEmployeesModal.tsx";
import UserModal from "./modals/UserModal.tsx";
import ViewSponsorModal from "./modals/ViewSponsorModal.tsx";

const App = () => {
  const { pathname } = useLocation();
  const [signed, setSigned] = useState(true);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const { setQueries, AuthRoutes } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const { handleSecureRoute } = useSecureRoute();

  useEffect(() => {
    setSigned(handleSecureRoute());
  }, [handleSecureRoute]);

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
      {/* Modals */}
      <JobModal />
      <OwnerModal />
      <UserModal />
      <CompanyModal />
      <ProModal />
      <SponsorModal />
      <ViewSponsorModal />
      <EmployeeModal />
      <EChannelModal />
      <TasheelModal />
      <NatwasalModal />
      <CustomerModal />
      <ConvertCustomerModal />
      <LinkToCompanyModal />
      <UploadEmployeesModal />
      <NationalityModal />
      <DownloadExcelModal />
      <TransactionModal />
      <NewLCModal />
      <RoleModal />
      <DeleteModal />
      {/* Modals */}
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
