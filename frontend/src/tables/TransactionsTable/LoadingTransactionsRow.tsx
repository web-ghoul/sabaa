import { Skeleton } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";

const LoadingTransactionsRow = ({
  actions = true,
  type,
}: {
  actions: boolean;
  recent?: boolean;
  type: string;
}) => {
  // const smScreen = useMediaQuery("(max-width:768px)");
  // const mdScreen = useMediaQuery("(max-width:992px)");
  // const lgScreen = useMediaQuery("(max-width:1200px)");
  return (
    <PrimaryTableRow>
      {type === "all" && (
        <>
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
          <PrimaryTableCell align="center">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
        </>
      )}
      {type === "pre" && (
        <>
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
        </>
      )}
      {(type === "new" || type === "renew") && (
        <>
          <PrimaryTableCell component="th" scope="row">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
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
          <PrimaryTableCell align="center">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
          <PrimaryTableCell align="center">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
          <PrimaryTableCell align="right">
            <Skeleton variant="rounded" />
          </PrimaryTableCell>
        </>
      )}
      {actions && (
        <PrimaryTableCell align="right">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
    </PrimaryTableRow>
  );
};

export default LoadingTransactionsRow;
