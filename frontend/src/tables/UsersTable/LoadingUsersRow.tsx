import { Skeleton, useMediaQuery } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { PrimaryTableRow } from "../PrimaryTableRow";

const LoadingUsersRow = () => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  return (
    <PrimaryTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>

      {!mdScreen && (
        <PrimaryTableCell align="center">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      {!smScreen && (
        <PrimaryTableCell component="th" scope="row">
          <Skeleton variant="rounded" />
        </PrimaryTableCell>
      )}
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="center">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      <PrimaryTableCell align="right">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
    </PrimaryTableRow>
  );
};

export default LoadingUsersRow;
