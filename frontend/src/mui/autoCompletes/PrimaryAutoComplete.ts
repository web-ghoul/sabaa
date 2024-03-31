import { Autocomplete, styled } from "@mui/material";

export const PrimaryAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "& > div > div": {
    padding: "0px !important",
  },
  "& span.MuiCircularProgress-root": {
    position: "absolute",
    right: "9px",
  },
  "& input": {
    padding: "15px !important",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows["2"],
    borderRadius: "4px",
  },
  "& svg": {
    fontSize: "20px",
  },
  [theme.breakpoints.down("lg")]: {
    "& input": {
      padding: "14px !important",
    },
    "& span.MuiCircularProgress-root": {
      position: "absolute",
      right: "8px",
    },
    "& svg": {
      fontSize: "18px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& input": {
      padding: "12px !important",
      boxShadow: theme.shadows["2"],
      borderRadius: "3px",
    },
    "& span.MuiCircularProgress-root": {
      position: "absolute",
      right: "6px",
    },
    "& svg": {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& input": {
      padding: "10px !important",
      borderRadius: "2px",
    },
    "& span.MuiCircularProgress-root": {
      position: "absolute",
      right: "4px",
    },
    "& svg": {
      fontSize: "14px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& svg": {
      fontSize: "12px",
    },
  },
}));
