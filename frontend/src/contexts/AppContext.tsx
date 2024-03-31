import { MouseEvent, createContext, useState } from "react";
import { AppContextProps } from "../types/contexts.types";

export const AppContext = createContext<AppContextProps>({
  openUserMenu: null,
  handleCloseUserMenu: () => {},
  handleOpenUserMenu: () => {},
  openTableMenu: null,
  handleCloseTableMenu: () => {},
  handleOpenTableMenu: () => {},
  defaultAvatar: "",
  defaultCompany: "",
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultAvatar = "/images/default_avatar.png";

  const defaultCompany = "/images/default_company.png";

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

  const values = {
    defaultAvatar,
    defaultCompany,
    openUserMenu,
    handleCloseUserMenu,
    handleOpenUserMenu,
    openTableMenu,
    handleCloseTableMenu,
    handleOpenTableMenu,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
