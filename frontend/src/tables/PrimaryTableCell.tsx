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
<<<<<<< HEAD
    padding: "10px 16px",
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  },
}));
