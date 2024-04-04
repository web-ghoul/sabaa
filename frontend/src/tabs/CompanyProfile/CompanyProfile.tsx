import { useContext } from "react";
import ProfileActivities from "../../components/ProfileActivities/ProfileActivities";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import { CompanyTypes } from "../../types/store.types";
import { CompanyProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CompanyProfile = ({ company, isLoading }: CompanyProfileProps) => {
  const { companyTabsValue } = useContext(TabsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Owners",
        "PROs",
        "Employees",
        "Transactions",
        "Activities",
      ]}
      variant={"company"}
    >
      <CustomTabPanel value={companyTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"company"}
          data={company as CompanyTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={1}>
        <ProfileActivities />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={2}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={3}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={5}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default CompanyProfile;
