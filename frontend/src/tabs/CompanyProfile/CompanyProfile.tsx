import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import OwnersTable from "../../tables/OwnersTable/OwnersTable";
import { CompanyTypes, OwnerTypes } from "../../types/store.types";
import { CompanyProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CompanyProfile = ({ company, isLoading }: CompanyProfileProps) => {
  const { companyTabsValue } = useContext(TabsContext);
  return (
    <PrimaryTab
      tabsTitles={[
        "Profile Info",
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
          title={`Profile Info`}
          variant={"company"}
          data={company as CompanyTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={companyTabsValue} index={1}>
        <OwnersTable
          count={company?.ownerId?.length || 0}
          data={company && (company.ownerId as OwnerTypes[])}
          isLoading={isLoading}
          noPagination={true}
        />
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
