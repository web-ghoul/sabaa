import { Skeleton } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { JobsTableRow } from "./JobsTableRow";

const LoadingJobsRow = () => {
  return (
    <JobsTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
<<<<<<< HEAD
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    </JobsTableRow>
  );
};

export default LoadingJobsRow;
