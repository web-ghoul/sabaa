import { Box, Skeleton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import useQueries from "../hooks/useQueries";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getOwners } from "../store/ownersSlice";
import { AppDispatch, RootState } from "../store/store";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
const Owners = () => {
  const { owners, isLoading } = useSelector((state: RootState) => state.owners);
  const { pageContainerClasses } = useContext(AppContext);
  const { ownersCounter } = useSelector(
    (state: RootState) => state.ownersCounter,
  );

  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getOwners(handleGetQueries()));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Owners
          </Typography>
        </BreadCrumbs>
        <Forms type={"ownersOptions"} />
        <OwnersTable
          count={ownersCounter}
          data={owners}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingOwners = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={150} height={24} />
      <Box className="flex gap-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={40} sx={{ flex: 1 }} />
        ))}
      </Box>
      <Box>
        <Skeleton variant="rounded" height={40} sx={{ mb: 1 }} />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={32} sx={{ mb: 0.5 }} />
        ))}
      </Box>
    </PrimaryContainer>
  </PrimaryBox>
);

export default Owners;
