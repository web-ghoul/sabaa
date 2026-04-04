import { Box, Skeleton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getAlerts } from "../store/alertsSlice";
import { AppDispatch } from "../store/store";

const Alerts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);

  useEffect(() => {
    dispatch(getAlerts());
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Alerts
          </Typography>
        </BreadCrumbs>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingAlerts = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={150} height={24} />
      <Box className="grid gap-3">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={80} />
        ))}
      </Box>
    </PrimaryContainer>
  </PrimaryBox>
);

export default Alerts;
