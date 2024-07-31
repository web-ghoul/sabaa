import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getOwner } from "../store/ownerSlice";
import { AppDispatch } from "../store/store";
import SettingsTabs from "../tabs/SettingsTabs/SettingsTabs";

const Settings = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const { setOwnerTabsValue } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      dispatch(getOwner({ id }));
    }
    setOwnerTabsValue(0);
  }, [dispatch, id, setOwnerTabsValue]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Typography variant="h6" key="2">
              Settings
            </Typography>
          </BreadCrumbs>
        </Box>
        <SettingsTabs />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Settings;
