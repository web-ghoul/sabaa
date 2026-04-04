import { Box, Skeleton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import useQueries from "../hooks/useQueries";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getJobs } from "../store/jobsSlice";
import { AppDispatch, RootState } from "../store/store";
import JobsTable from "../tables/JobsTable/JobsTable";

const Jobs = () => {
  const { isLoading, jobs } = useSelector((state: RootState) => state.jobs);
  const { pageContainerClasses } = useContext(AppContext);
  const { jobsCounter } = useSelector((state: RootState) => state.jobsCounter);

  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getJobs(handleGetQueries()));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Jobs
          </Typography>
        </BreadCrumbs>
        <Forms type={"jobsOptions"} />
        <JobsTable data={jobs} isLoading={isLoading} count={jobsCounter} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingJobs = () => (
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

export default Jobs;
