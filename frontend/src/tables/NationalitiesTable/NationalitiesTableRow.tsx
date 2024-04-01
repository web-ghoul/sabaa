import { TableRow, styled } from "@mui/material";

export const NationaltiesTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
