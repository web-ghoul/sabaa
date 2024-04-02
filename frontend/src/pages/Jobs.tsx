import { Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { RootState } from "../store/store";
import JobsTable from "../tables/JobsTable/JobsTable";

const Jobs = () => {
  const { isLoading, jobs } = useSelector((state: RootState) => state.jobs);
  const { pageContainerClasses } = useContext(AppContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Jobs
          </Typography>
        </BreadCrumbs>
        <Forms type={"jobsOptions"} />
        <JobsTable data={jobs} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Jobs;
