import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import SponsorsSection from "../../sections/SponsorsSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import {
  EChannelTypes,
  NatwasalTypes,
  ProTypes,
  SponsorTypes,
  TasheelTypes,
} from "../../types/store.types";
import { ProProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const ProProfile = ({
  pro,
  isLoading,
  companies,
  eChannel,
  natwasal,
  tasheel,
  activities,
}: ProProfileProps) => {
  const { proTabsValue } = useContext(TabsContext);

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
      variant={"officer"}
    >
      <CustomTabPanel value={proTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"officer"}
          eChannel={eChannel as EChannelTypes}
          tasheel={tasheel as TasheelTypes}
          natwasal={natwasal as NatwasalTypes}
          data={pro as ProTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={1}>
        <CompaniesTable
          count={companies ? companies.length : 0}
          data={companies}
          isLoading={isLoading}
          unLink={true}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={2}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={3}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={4}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={5}>
        <SponsorsSection
          data={pro && (pro.sponsors as SponsorTypes[])}
          isLoading={isLoading}
        />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default ProProfile;
