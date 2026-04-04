import { Box, Skeleton, Typography } from "@mui/material";
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

export const LoadingSettings = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={150} height={24} />
      <Box className="flex gap-4 border-b">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} variant="text" width={80} height={40} />
        ))}
      </Box>
      <Box className="grid grid-cols-2 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={56} />
        ))}
      </Box>
    </PrimaryContainer>
  </PrimaryBox>
);

export default Settings;
