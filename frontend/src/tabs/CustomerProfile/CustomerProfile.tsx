import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import SponsorsSection from "../../sections/SponsorsSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import { CustomerTypes, SponsorTypes } from "../../types/store.types";
import { CustomerProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CustomerProfile = ({
  customer,
  isLoading,
  companies,
  activities,
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
      variant={"customer"}
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
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={3}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={4}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={5}>
        <SponsorsSection
          data={customer && (customer.sponsors as SponsorTypes[])}
          isLoading={isLoading}
        />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default CustomerProfile;
