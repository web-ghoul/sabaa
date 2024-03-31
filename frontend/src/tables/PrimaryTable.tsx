import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";
import PrimaryTableFooter from "./PrimaryTableFooter";

const PrimaryTable = ({ children }: { children: ReactNode }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {children}
      </Table>
      <PrimaryTableFooter />
    </TableContainer>
  );
};

export default PrimaryTable;
