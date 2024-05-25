import { useContext, useEffect, useMemo, useState } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import SponsorsSection from "../../sections/SponsorsSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import ProsTable from "../../tables/ProsTable/ProsTable";
import { OwnerTypes, ProTypes, SponsorTypes } from "../../types/store.types";
import { OwnerProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const OwnerProfile = ({
  owner,
  isLoading,
  companies,
  activities,
}: OwnerProfileProps) => {
  const { ownerTabsValue } = useContext(TabsContext);
  const [pros, setPros] = useState<ProTypes[]>([]);

  useEffect(() => {
    if (companies && pros.length === 0) {
      companies.map((company) => {
        setPros((p) => [...p, ...(company.proCode as ProTypes[])]);
      });
    }
  }, [companies, pros.length]);

  useEffect(() => {
    const ids: string[] = [];
    const newPros: ProTypes[] = [];
    pros.map((pro) => {
      if (!ids.includes(pro._id as string)) {
        ids.push(pro._id as string);
        newPros.push(pro);
      }
    });
    setPros(() => [...newPros]);
  }, [pros]);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Companies",
        "Officers",
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
