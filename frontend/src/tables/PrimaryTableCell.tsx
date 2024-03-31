import { TableCell, styled, tableCellClasses } from "@mui/material";

export const PrimaryTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: "700",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "10px 16px",
  },
}));
