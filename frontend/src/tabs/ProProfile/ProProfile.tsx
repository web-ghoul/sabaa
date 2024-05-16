import { useContext } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import CompaniesTable from "../../tables/CompaniesTable/CompaniesTable";
import { ProTypes } from "../../types/store.types";
import { ProProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const ProProfile = ({ pro, isLoading, companies }: ProProfileProps) => {
  const { proTabsValue } = useContext(TabsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Companies",
        "Transactions",
        "Activities",
        "Documents",
      ]}
      variant={"pro"}
    >
      <CustomTabPanel value={proTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"officer"}
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
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={3}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={proTabsValue} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default ProProfile;
