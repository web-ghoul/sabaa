import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";
import PrimaryTableFooter from "./PrimaryTableFooter";

const PrimaryTable = ({
  children,
  count,
  variant,
}: {
  children: ReactNode;
  count: number;
  variant: string;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">{children}</Table>
      <PrimaryTableFooter count={count} variant={variant} />
    </TableContainer>
  );
};

export default PrimaryTable;
