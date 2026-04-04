import { Box, Skeleton, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const EditPermission = () => {
  const { pageContainerClasses } = useContext(AppContext);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_SETTINGS_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
            key={1}
          >
            <Typography variant="h6">Settings</Typography>
          </Link>
          <Typography variant="h6" key="2">
            Permission
          </Typography>
        </BreadCrumbs>
        <Forms type={"editRole"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingEditPermission = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={150} height={24} />
      <Box className="grid gap-3">
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={40} />
        ))}
      </Box>
      <Skeleton variant="rounded" height={48} width={120} />
    </PrimaryContainer>
  </PrimaryBox>
);

export default EditPermission;
