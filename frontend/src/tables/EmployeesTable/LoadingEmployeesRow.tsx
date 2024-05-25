import { Skeleton, useMediaQuery } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";

const LoadingEmployeesRow = ({
  actions,
  recent,
}: {
  actions: boolean;
  recent?: boolean;
}) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");

  return (
    <PrimaryTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      {!lgScreen && !recent && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!recent && (
        <PrimaryTableCell align="right">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!smScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!recent && (
        <PrimaryTableCell align="right">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {(!mdScreen || !recent) && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {actions && (
        <PrimaryTableCell align="right">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
    </PrimaryTableRow>
  );
};

export default LoadingEmployeesRow;
