import { useContext, useEffect, useMemo, useState } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import SponsorsSection from "../../sections/SponsorsSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import ProsTable from "../../tables/ProsTable/ProsTable";
import {
  EChannelTypes,
  NatwasalTypes,
  OwnerTypes,
  ProTypes,
  SponsorTypes,
  TasheelTypes,
} from "../../types/store.types";
import { OwnerProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const OwnerProfile = ({
  owner,
  isLoading,
  companies,
  eChannel,
  natwasal,
  tasheel,
  activities,
}: OwnerProfileProps) => {
  const { ownerTabsValue } = useContext(TabsContext);
  const [pros, setPros] = useState<ProTypes[]>([]);

  useEffect(() => {
    if (companies && pros.length === 0) {
      const allPros: ProTypes[] = [];
      const ids: string[] = [];
      companies.map((company) => {
        company.proCode.map((pro) => {
          const p: ProTypes = pro as ProTypes;
          if (!ids.includes(p._id as string)) {
            ids.push(p._id as string);
            allPros.push(p);
          }
        });
      });
      setPros(() => [...allPros]);
    }
  }, [companies, pros]);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Companies",
        "Public Relation Officers",
        "Transactions",
        "Activities",
        "Documents",
        "Sponsored Persons",
      ]}
      variant={"owner"}
    >
      <CustomTabPanel value={ownerTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"owner"}
          data={owner as OwnerTypes}
          eChannel={eChannel as EChannelTypes}
          tasheel={tasheel as TasheelTypes}
          natwasal={natwasal as NatwasalTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={1}>
        <CompaniesTable
          count={companies ? companies.length : 0}
          data={companies}
          isLoading={isLoading}
          unLink={true}
          noPagination={true}
        />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={2}>
        {useMemo(
          () => (
            <ProsTable
              count={pros.length}
              data={pros}
              isLoading={isLoading}
              noPagination={true}
            />
          ),
          [isLoading, pros]
        )}
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={3}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={4}>
        <ActivitiesSection data={activities} isLoading={isLoading} />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={5}>
        <UnderDevelopment />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={6}>
        <SponsorsSection
          data={owner && (owner.sponsors as SponsorTypes[])}
          isLoading={isLoading}
        />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default OwnerProfile;
