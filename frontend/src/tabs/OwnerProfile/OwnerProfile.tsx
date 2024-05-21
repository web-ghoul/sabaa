import { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import UnderDevelopment from "../../components/UnderDevelopment/UnderDevelopment";
import { TabsContext } from "../../contexts/TabsContext";
import ActivitiesSection from "../../sections/ActivitiesSection";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import ProsTable from "../../tables/ProsTable/ProsTable";
import { OwnerTypes, ProTypes } from "../../types/store.types";
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
        setPros([...pros, ...(company.proCode as ProTypes[])]);
      });
    }
  }, [companies, pros]);

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
        <ProsTable
          count={pros.length}
          data={pros}
          isLoading={isLoading}
          noPagination={true}
        />
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
        <UnderDevelopment />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default OwnerProfile;
