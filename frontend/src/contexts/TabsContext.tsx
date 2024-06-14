import { createContext, useState } from "react";
import { TabsContextProps } from "../types/contexts.types";

export const TabsContext = createContext<TabsContextProps>({
  userTabsValue: 0,
  setUserTabsValue: () => {},
  ownerTabsValue: 0,
  setOwnerTabsValue: () => {},
  proTabsValue: 0,
  setProTabsValue: () => {},
  employeeTabsValue: 0,
  setEmployeeTabsValue: () => {},
  customerTabsValue: 0,
  setCustomerTabsValue: () => {},
  companyTabsValue: 0,
  setCompanyTabsValue: () => {},
});

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  //Users Tabs
  const [userTabsValue, setUserTabsValue] = useState<number>(0);

  //Owners Tabs
  const [ownerTabsValue, setOwnerTabsValue] = useState<number>(0);

  //Pros Tabs
  const [proTabsValue, setProTabsValue] = useState<number>(0);

  //Employees Tabs
  const [employeeTabsValue, setEmployeeTabsValue] = useState<number>(0);

  //Customers Tabs
  const [customerTabsValue, setCustomerTabsValue] = useState<number>(0);

  //Companies Tabs
  const [companyTabsValue, setCompanyTabsValue] = useState<number>(0);

  const values = {
    userTabsValue,
    setUserTabsValue,
    ownerTabsValue,
    setOwnerTabsValue,
    companyTabsValue,
    setCompanyTabsValue,
    employeeTabsValue,
    setEmployeeTabsValue,
    customerTabsValue,
    setCustomerTabsValue,
    proTabsValue,
    setProTabsValue,
  };
  return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
