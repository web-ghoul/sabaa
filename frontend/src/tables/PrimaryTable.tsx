import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";
import NoDataFound from "./NoDataFound";
import PrimaryTablePagination from "./PrimaryTablePagination";

const PrimaryTable = ({
  children,
  count,
  variant,
  noPagination,
}: {
  children: ReactNode;
  count: number;
  variant: string;
  noPagination?: boolean;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">{children}</Table>
      {count === 0 ? (
        <NoDataFound />
      ) : (
        !noPagination &&
        count >= 10 && (
          <PrimaryTablePagination count={count} variant={variant} />
        )
      )}
    </TableContainer>
  );
};

export default PrimaryTable;
