import { Skeleton, useMediaQuery } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { CustomersTableRow } from "./CustomersTableRow";

const LoadingCustomersRow = () => {
  const smScreen = useMediaQuery("(max-width:768px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  const lgScreen = useMediaQuery("(max-width:1200px)");
  return (
    <CustomersTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      {!mdScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!lgScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!smScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
    </CustomersTableRow>
  );
};

export default LoadingCustomersRow;
