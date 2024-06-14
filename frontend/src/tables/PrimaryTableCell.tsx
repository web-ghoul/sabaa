import { TableCell, styled, tableCellClasses } from "@mui/material";

export const PrimaryTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 14,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    fontWeight: "700",
    color: theme.palette.common.black,
    padding: "10px 16px",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "6px 16px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 13,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 11,
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: 10,
  },
}));
