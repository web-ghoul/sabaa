import { createContext, useState } from "react";
import { TabsContextProps } from "../types/contexts.types";

export const TabsContext = createContext<TabsContextProps>({
  userTabsValue: 0,
  setUserTabsValue: () => {},
  ownerTabsValue: 0,
  setOwnerTabsValue: () => {},
  companyTabsValue: 0,
  setCompanyTabsValue: () => {},
});

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  //Users Tabs
  const [userTabsValue, setUserTabsValue] = useState<number>(0);

  //Owners Tabs
  const [ownerTabsValue, setOwnerTabsValue] = useState<number>(0);

  //Companies Tabs
  const [companyTabsValue, setCompanyTabsValue] = useState<number>(0);

  const values = {
    userTabsValue,
    setUserTabsValue,
    ownerTabsValue,
    setOwnerTabsValue,
    companyTabsValue,
    setCompanyTabsValue,
  };
  return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
