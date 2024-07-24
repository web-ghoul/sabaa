import { Box, Paper, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useContext } from "react";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryTabTypes } from "../types/tabs.types";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const stylingPaper = {
  borderBottom: 2,
  borderColor: "divider",
  "& button": {
    width: "100%",
    alignItems: "flex-start",
    color: "#000",
    fontSize: "16px",
  },
  "& >div>div>div": { gap: "0px" },
};

const PrimaryTab = ({ variant, tabsTitles, children }: PrimaryTabTypes) => {
  const {
    ownerTabsValue,
    proTabsValue,
    employeeTabsValue,
    customerTabsValue,
    userTabsValue,
    setUserTabsValue,
    companyTabsValue,
    setCompanyTabsValue,
    setOwnerTabsValue,
    setProTabsValue,
    setEmployeeTabsValue,
    setCustomerTabsValue,
    setSettingsTabsValue,
    settingsTabsValue,
  } = useContext(TabsContext);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    if (variant === "owner") {
      setOwnerTabsValue(newValue);
    } else if (variant === "user") {
      setUserTabsValue(newValue);
    } else if (variant === "company") {
      setCompanyTabsValue(newValue);
    } else if (variant === "officer") {
      setProTabsValue(newValue);
    } else if (variant === "employee") {
      setEmployeeTabsValue(newValue);
    } else if (variant === "customer") {
      setCustomerTabsValue(newValue);
    } else if (variant === "settings") {
      setSettingsTabsValue(newValue);
    }
  };

  return (
    <Box
      className={`grid justify-stretch items-start grid-cols-[20%,1fr] gap-4 md:gap-3 sm:!gap-2 md:grid-cols-1`}
    >
      <Paper
        className={`w-full !rounded-lg !sticky md:!relative top-[90px] md:top-0`}
        sx={stylingPaper}
      >
        <Tabs
          value={
            variant === "owner"
              ? ownerTabsValue
              : variant === "user"
              ? userTabsValue
              : variant === "company"
              ? companyTabsValue
              : variant === "officer"
              ? proTabsValue
              : variant === "employee"
              ? employeeTabsValue
              : variant === "customer"
              ? customerTabsValue
              : variant === "settings" && settingsTabsValue
          }
          orientation={"vertical"}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabsTitles.map((title: string, i: number) => (
            <Tab key={i} label={title} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Paper>
      {children}
    </Box>
  );
};

export default PrimaryTab;
