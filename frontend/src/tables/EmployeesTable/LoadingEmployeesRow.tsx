import { Skeleton, useMediaQuery } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { EmployeesTableRow } from "./EmployeesTableRow";

const LoadingEmployeesRow = () => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  return (
    <EmployeesTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      {!smScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!lgScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!mdScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
    </EmployeesTableRow>
  );
};

export default LoadingEmployeesRow;
