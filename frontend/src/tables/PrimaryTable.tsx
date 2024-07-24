import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";
import { EntitiesType } from "../types/app.types";
import NoDataFound from "./NoDataFound";
import PrimaryTablePagination from "./PrimaryTablePagination";

const PrimaryTable = ({
  children,
  count,
  variant,
  noPagination,
  loading,
}: {
  children: ReactNode;
  count: number;
  variant: EntitiesType;
  noPagination?: boolean;
  loading?: boolean;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">{children}</Table>
      {!loading &&
        (count === 0 ? (
          <NoDataFound />
        ) : (
          !noPagination &&
          count >= 10 && (
            <PrimaryTablePagination count={count} variant={variant} />
          )
        ))}
    </TableContainer>
  );
};

export default PrimaryTable;
