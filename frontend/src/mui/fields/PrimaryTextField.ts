import { TextField, styled } from "@mui/material";

export const PrimaryTextField = styled(TextField)(({ theme }) => ({
  minWidth: "auto !important",
  width: "100% !important",
  "& input , & select": {
    padding: "8px !important",
    fontSize: "14px",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows["2"],
    borderRadius: "4px",
    width: "100% !important",
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
  "& input:not(:placeholder-shown)": {
    fontWeight: "600",
  },
  [theme.breakpoints.down("lg")]: {
    "& input , & select": {
      padding: "9px !important",
      fontSize: "14px",
      borderRadius: "3px",
    },
    "& label": {
      lineHeight: "0.7 !important",
      fontSize: "14px",
    },
    "& svg": {
      fontSize: "18px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& input , & select": {
      padding: "8px !important",
      fontSize: "13px",
      borderRadius: "2px",
    },
    "& label": {
      top: "-3px",
      lineHeight: "0.7 !important",
      fontSize: "13px",
    },
    "& svg": {
      fontSize: "17px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& input , & select": {
      padding: "7px !important",
      fontSize: "12px",
    },
    "& label": {
      top: "-3px",
      lineHeight: "0.7 !important",
      fontSize: "12px",
    },
    "& svg": {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& input , & select": {
      padding: "7px !important",
      fontSize: "10px",
    },
    "& label": {
      top: "-4px",
      lineHeight: "0.8 !important",
      fontSize: "10px",
    },
    "& svg": {
      fontSize: "14px",
    },
  },
  "& select": {
    title: "Select an option",
  },
}));
