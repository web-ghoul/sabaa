import { createContext, useState } from "react";
import { SidebarsContextProps } from "../types/contexts.types";

export const SidebarContext = createContext<SidebarsContextProps>({
  openSidebar: false,
  handleCloseSidebar: () => {},
  handleOpenSidebar: () => {},
  sidebarWidth: "70px",
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  //SideBar
  const [openSidebar, setOpenSidebar] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("70px");

  const handleCloseSidebar = () => {
    console.log(1);
    setOpenSidebar(false);
    setSidebarWidth("70px");
  };

  const handleOpenSidebar = () => {
    console.log(2);
    setOpenSidebar(true);
    setSidebarWidth("260px");
  };

  const values = {
    openSidebar,
    handleCloseSidebar,
    handleOpenSidebar,
    sidebarWidth,
  };
  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
