import { Skeleton, useMediaQuery } from "@mui/material";
import { PrimaryTableCell } from "../PrimaryTableCell";
import { SponsorsTableRow } from "./SponsorsTableRow";

const LoadingSponsorsRow = () => {
  const smScreen = useMediaQuery("(max-width:768px)");
  const mdScreen = useMediaQuery("(max-width:992px)");
  return (
    <SponsorsTableRow>
      <PrimaryTableCell component="th" scope="row">
        <Skeleton variant="rounded" />
      </PrimaryTableCell>
      {!mdScreen && (
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
    </SponsorsTableRow>
  );
};

export default LoadingSponsorsRow;
