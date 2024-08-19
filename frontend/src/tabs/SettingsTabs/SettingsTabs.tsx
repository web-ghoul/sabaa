import { useContext } from "react";
import { TabsContext } from "../../contexts/TabsContext";
import Forms from "../../forms/Forms";
import RolesSection from "../../sections/RolesSection";
import SelectorsSection from "../../sections/SelectorsSection";
import CustomTabPanel from "../CustomTabPanel";
import PrimaryTab from "../PrimaryTab";

const SettingsTabs = () => {
  const { settingsTabsValue } = useContext(TabsContext);
  return (
    <PrimaryTab
      tabsTitles={["Company Info", "Select Controller", "Permissions"]}
      variant={"settings"}
    >
      <CustomTabPanel value={settingsTabsValue} index={0}>
        <Forms type={"editCompanyInfo"} />
      </CustomTabPanel>
      <CustomTabPanel value={settingsTabsValue} index={1}>
        <SelectorsSection />
      </CustomTabPanel>
      <CustomTabPanel value={settingsTabsValue} index={2}>
        <RolesSection />
      </CustomTabPanel>
    </PrimaryTab>
  );
};

export default SettingsTabs;
