import { Skeleton } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";

const LoadingNationalitiesRow = () => {
  return (
    <PrimaryTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
    </PrimaryTableRow>
  );
};

export default LoadingNationalitiesRow;
