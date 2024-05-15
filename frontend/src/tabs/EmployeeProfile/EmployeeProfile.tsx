import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import { EmployeeTypes } from "../../types/store.types";
import { EmployeeProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const EmployeeProfile = ({
  employee,
  isLoading,
  companies,
}: EmployeeProfileProps) => {
  const { employeeTabsValue } = useContext(TabsContext);

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
      <CustomTabPanel value={employeeTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"employee"}
          data={employee as EmployeeTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={1}>
        <CompaniesTable
          count={companies ? companies.length : 0}
          data={companies}
          isLoading={isLoading}
          unLink={true}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={2}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={3}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={5}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default EmployeeProfile;
