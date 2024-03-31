import { Skeleton } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { OwnersTableRow } from "./OwnersTableRow";

const LoadingOwnersRow = () => {
  return (
    <OwnersTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
<<<<<<< HEAD
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
    </OwnersTableRow>
  );
};

export default LoadingOwnersRow;
