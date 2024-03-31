import { TextField, styled } from "@mui/material";

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
  "& input , & select": {
    padding: "15px",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows["2"],
    borderRadius: "4px",
  },
  "& svg": {
    fontSize: "30px",
  },
  [theme.breakpoints.down("lg")]: {
    "& input , & select": {
      padding: "14px",
    },
    "& svg": {
      fontSize: "28px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& input , & select": {
      padding: "12px",
    },
    "& label": {
      lineHeight: "1rem",
    },
    "& svg": {
      fontSize: "26px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& input , & select": {
      padding: "10px",
    },
    "& svg": {
      fontSize: "24px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& svg": {
      fontSize: "22px",
    },
  },
<<<<<<< HEAD
  "& select": {
    title: "Select an option",
  },
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
}));
