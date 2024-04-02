import { useContext } from "react";
import ProfileActivities from "../../components/ProfileActivities/ProfileActivities";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import { OwnerTypes } from "../../types/store.types";
import { OwnerProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const OwnerProfile = ({ owner, isLoading }: OwnerProfileProps) => {
  const { ownerTabsValue } = useContext(TabsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Companies",
        "Transactions",
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
        <ProfileActivities />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={2}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={3}>
        <ProfileSetting />
      </CustomTabPanel>
      <CustomTabPanel value={ownerTabsValue} index={4}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default OwnerProfile;
