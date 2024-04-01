import { TextField, styled } from "@mui/material";

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
  "& input , & select": {
    padding: "10px !important",
    fontSize: "16px",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows["2"],
    borderRadius: "4px",
  },
  "& label": {
    fontSize: "14px",
    lineHeight: "1 !important",
  },
  "& label[data-shrink=true]": {
    lineHeight: "1.4375em !important",
    backgroundColor: "#fff",
  },
  "& svg": {
    fontSize: "20px",
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
      fontSize: "24px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& input , & select": {
      padding: "10px",
    },
    "& svg": {
      fontSize: "22px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& svg": {
      fontSize: "20px",
    },
  },
  "& select": {
    title: "Select an option",
  },
}));
