import { MouseEvent, createContext, useState } from "react";
import { AppContextProps } from "../types/contexts.types";

export const AppContext = createContext<AppContextProps>({
  AuthRoutes: [],
  pageContainerClasses: "",
  openUserMenu: null,
  handleCloseUserMenu: () => {},
  handleOpenUserMenu: () => {},
  openTableMenu: null,
  handleCloseTableMenu: () => {},
  handleOpenTableMenu: () => {},
  defaultAvatar: "",
  defaultCompany: "",
  defaultLogo: "",
  ownersPage: 1,
  setOwnersPage: () => {},
  prosPage: 1,
  setProsPage: () => {},
  employeesPage: 1,
  setEmployeesPage: () => {},
  customersPage: 1,
  setCustomersPage: () => {},
  jobsPage: 1,
  setJobsPage: () => {},
  companiesPage: 1,
  setCompaniesPage: () => {},
  nationalitiesPage: 1,
  setNationalitiesPage: () => {},
  usersPage: 1,
  setUsersPage: () => {},
  queries: {},
  setQueries: () => {},
  handleAddQuery: () => {},
  handleRemoveQuery: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const AuthRoutes = [
    `${import.meta.env.VITE_LOGIN_ROUTE}`,
    `${import.meta.env.VITE_RESET_PASSWORD_ROUTE}`,
    `${import.meta.env.VITE_OTP_ROUTE}`,
  ];

  const defaultAvatar = "/images/default_avatar.png";

  const defaultCompany = "/images/default_company.png";

  const defaultLogo = "/images/icon_fit.png";

  const pageContainerClasses = `grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3`;

  //Pagination
  const [ownersPage, setOwnersPage] = useState<number>(1);
  const [prosPage, setProsPage] = useState<number>(1);
  const [employeesPage, setEmployeesPage] = useState<number>(1);
  const [customersPage, setCustomersPage] = useState<number>(1);
  const [companiesPage, setCompaniesPage] = useState<number>(1);
  const [jobsPage, setJobsPage] = useState<number>(1);
  const [nationalitiesPage, setNationalitiesPage] = useState<number>(1);
  const [usersPage, setUsersPage] = useState<number>(1);

  //User Menu
  const [openUserMenu, setOpenUserMenu] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = () => {
    setOpenUserMenu(null);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenUserMenu(event.currentTarget);
  };

  //Table Menu
  const [openTableMenu, setOpenTableMenu] = useState<null | HTMLElement>(null);

  const handleCloseTableMenu = () => {
    setOpenTableMenu(null);
  };

  const handleOpenTableMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenTableMenu(event.currentTarget);
  };

  //Queries
  const [queries, setQueries] = useState<{ [key: string]: string }>({});

  const handleAddQuery = (query: { [key: string]: string }) => {
    setQueries({ ...queries, ...query });
  };

  const handleRemoveQuery = (queryName: string) => {
    const q: { [key: string]: string } = { ...queries };
    delete q[queryName];
    setQueries(q);
  };

  const values = {
    AuthRoutes,
    defaultAvatar,
    defaultCompany,
    openUserMenu,
    handleCloseUserMenu,
    handleOpenUserMenu,
    openTableMenu,
    handleCloseTableMenu,
    handleOpenTableMenu,
    pageContainerClasses,
    ownersPage,
    setOwnersPage,
    companiesPage,
    setCompaniesPage,
    usersPage,
    setUsersPage,
    nationalitiesPage,
    setNationalitiesPage,
    jobsPage,
    setJobsPage,
    queries,
    setQueries,
    handleAddQuery,
    handleRemoveQuery,
    prosPage,
    setProsPage,
    employeesPage,
    setEmployeesPage,
    customersPage,
    setCustomersPage,
    defaultLogo,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
