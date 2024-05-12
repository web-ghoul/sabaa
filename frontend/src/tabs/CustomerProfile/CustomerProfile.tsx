import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import { CustomerTypes } from "../../types/store.types";
import { CustomerProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CustomerProfile = ({
  customer,
  isLoading,
  companies,
}: CustomerProfileProps) => {
  const { customerTabsValue } = useContext(TabsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Companies",
        "Transactions",
        "Activities",
        "Documents",
        "Sponsored Persons",
      ]}
      variant={"owner"}
    >
      <CustomTabPanel value={customerTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"customer"}
          data={customer as CustomerTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={1}>
        <CompaniesTable
          count={companies ? companies.length : 0}
          data={companies}
          isLoading={isLoading}
          unLink={true}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={2}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={3}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={5}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default CustomerProfile;
