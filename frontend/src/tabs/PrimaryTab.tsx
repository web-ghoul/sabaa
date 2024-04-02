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
    userTabsValue,
    setUserTabsValue,
    companyTabsValue,
    setCompanyTabsValue,
    setOwnerTabsValue,
  } = useContext(TabsContext);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    if (variant === "owner") {
      setOwnerTabsValue(newValue);
    } else if (variant === "user") {
      setUserTabsValue(newValue);
    } else if (variant === "company") {
      setCompanyTabsValue(newValue);
    }
  };

  return (
    <Box
      className={`grid justify-stretch items-start grid-cols-[20%,1fr] gap-8`}
    >
      <Paper
        className={`w-full !rounded-lg !sticky top-[90px]`}
        sx={stylingPaper}
      >
        <Tabs
          value={
            variant === "owner"
              ? ownerTabsValue
              : variant === "user"
              ? userTabsValue
              : variant === "company" && companyTabsValue
          }
          orientation="vertical"
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
