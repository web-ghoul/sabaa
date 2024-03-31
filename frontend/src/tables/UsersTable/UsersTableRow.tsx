import { TableRow, styled } from "@mui/material";

export const UsersTableRow = styled(TableRow)(({ theme }) => ({
<<<<<<< HEAD
  "&:hover": {
    backgroundColor: `${theme.palette.grey["300"]} !important`,
    cursor: "pointer",
  },
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
