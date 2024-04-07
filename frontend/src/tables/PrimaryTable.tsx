import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">{children}</Table>
      {searchParams.size === 0 &&
        !noPagination &&
        (count === 0 ? (
          <NoDataFound />
        ) : (
          <PrimaryTablePagination count={count} variant={variant} />
        ))}
    </TableContainer>
  );
};

export default PrimaryTable;
