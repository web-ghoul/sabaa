import { Autocomplete, styled } from "@mui/material";

export const PrimaryAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "& > div > div": {
    padding: "0px !important",
  },
  "& span.MuiCircularProgress-root": {
    position: "absolute",
    right: "9px",
  },
  "& svg": {
    fontSize: "20px",
  },
  [theme.breakpoints.down("lg")]: {
    "& span.MuiCircularProgress-root": {
      position: "absolute",
      right: "8px",
    },
    "& svg": {
      fontSize: "18px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& span.MuiCircularProgress-root": {
      position: "absolute",
      right: "6px",
    },
    "& svg": {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.down("sm")]: {
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
