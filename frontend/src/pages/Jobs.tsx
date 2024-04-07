import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getJobs } from "../store/jobsSlice";
import { AppDispatch, RootState } from "../store/store";
import JobsTable from "../tables/JobsTable/JobsTable";

const Jobs = () => {
  const { isLoading, jobs } = useSelector((state: RootState) => state.jobs);
  const { pageContainerClasses, setQueries } = useContext(AppContext);
  const { jobsCounter } = useSelector((state: RootState) => state.jobsCounter);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setQueries(allParams);
    dispatch(getJobs(allParams));
  }, []);
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

export default Jobs;
