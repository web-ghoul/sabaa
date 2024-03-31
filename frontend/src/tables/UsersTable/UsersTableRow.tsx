import { TableRow, styled } from "@mui/material";

export const UsersTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: `${theme.palette.grey["300"]} !important`,
    cursor: "pointer",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
