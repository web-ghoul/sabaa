import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import SponsorsSection from "../../sections/SponsorsSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import {
  CompanyTypes,
  EChannelTypes,
  EmployeeTypes,
  NatwasalTypes,
  SponsorTypes,
  TasheelTypes,
} from "../../types/store.types";
import { EmployeeProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const EmployeeProfile = ({
  employee,
  isLoading,
  eChannel,
  natwasal,
  tasheel,
  activities,
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
      variant={"employee"}
    >
      <CustomTabPanel value={employeeTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"employee"}
          data={employee as EmployeeTypes}
          eChannel={eChannel as EChannelTypes}
          tasheel={tasheel as TasheelTypes}
          natwasal={natwasal as NatwasalTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={1}>
        <CompaniesTable
          count={employee?.companyId?.length || 0}
          data={employee && (employee.companyId as CompanyTypes[])}
          isLoading={isLoading}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={2}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={3}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={4}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={employeeTabsValue} index={5}>
        <SponsorsSection
          data={employee && (employee.sponsors as SponsorTypes[])}
          isLoading={isLoading}
        />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default EmployeeProfile;
