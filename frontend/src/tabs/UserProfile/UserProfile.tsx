import { useContext } from "react";
import ProfileActivities from "../../components/ProfileActivities/ProfileActivities";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ProfileSetting from "../../components/ProfileSetting/ProfileSetting";
import { TabsContext } from "../../contexts/TabsContext";
import { UserTypes } from "../../types/store.types";
import { UserProfileProps } from "../../types/tabs.types";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const UserProfile = ({ user, isLoading }: UserProfileProps) => {
  const { userTabsValue } = useContext(TabsContext);

  return (
    <PrimaryTab
      tabsTitles={[
        "Personal Info",
        "Activities",
        "Privilages",
        "Change Password",
      ]}
      variant={"user"}
    >
      <CustomTabPanel value={userTabsValue} index={0}>
        <ProfileDetails
          title={`Personal Info`}
          variant={"user"}
          data={user as UserTypes}
          isLoading={isLoading}
        />
      </CustomTabPanel>
      <CustomTabPanel value={userTabsValue} index={1}>
        <ProfileActivities />
      </CustomTabPanel>
      <CustomTabPanel value={userTabsValue} index={2}>
        <ProfileSetting />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default UserProfile;
