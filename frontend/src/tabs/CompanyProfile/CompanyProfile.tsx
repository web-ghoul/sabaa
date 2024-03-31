import { Box, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProfileActivities from "../../components/ProfileActivities/ProfileActivities";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { CompanyProfileProps, TabPanelProps } from "../../types/tabs.types";
import { CompanyTypes } from "../../types/store.types";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CompanyProfile = ({ company, isLoading }: CompanyProfileProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      className={`grid justify-stretch items-start grid-cols-[25%,1fr] gap-8`}
    >
      <Paper
        className={`w-full p-4 !rounded-xl`}
        sx={{
          borderBottom: 2,
          borderColor: "divider",
          "& button": {
            width: "100%",
            alignItems: "flex-start",
            color: "#111",
          },
          "& >div>div>div": { gap: "20px" },
        }}
      >
        <Tabs
          value={value}
          orientation="vertical"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal Info" {...a11yProps(0)} />
          <Tab label="Owners" {...a11yProps(1)} />
          <Tab label="PROs" {...a11yProps(2)} />
          <Tab label="Transactions" {...a11yProps(3)} />
          <Tab label="Documents" {...a11yProps(4)} />
        </Tabs>
      </Paper>
      <CustomTabPanel value={value} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"company"}
          data={company as CompanyTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProfileActivities />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
    </Box>
  );
};

export default CompanyProfile;
