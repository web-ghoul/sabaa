import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import SponsorsSection from "../../sections/SponsorsSection";
import { CustomerTypes, SponsorTypes } from "../../types/store.types";
import { CustomerProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const CustomerProfile = ({
  customer,
  isLoading,
  activities,
}: CustomerProfileProps) => {
  const { customerTabsValue } = useContext(TabsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
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
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={2}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={3}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={customerTabsValue} index={4}>
        <SponsorsSection
          data={customer && (customer.sponsors as SponsorTypes[])}
          isLoading={isLoading}
        />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default CustomerProfile;
