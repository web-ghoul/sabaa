import { Skeleton } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { NationaltiesTableRow } from "./NationalitiesTableRow";

const LoadingNationalitiesRow = () => {
  return (
    <NationaltiesTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
    </NationaltiesTableRow>
  );
};

export default LoadingNationalitiesRow;
