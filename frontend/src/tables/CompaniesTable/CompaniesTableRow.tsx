import { TableRow, styled } from "@mui/material";

export const CompaniesTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: `${theme.palette.action.hover} !important`,
    cursor: "pointer",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
