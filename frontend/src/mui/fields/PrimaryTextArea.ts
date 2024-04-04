import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/material";

export const PrimaryTextArea = styled(TextareaAutosize)(({ theme }) => ({
  padding: "10px !important",
  fontSize: "16px",
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows["2"],
  borderRadius: "4px",
  border: "1px solid #ddd",
  "&:focus": {
    border: `1px solid ${theme.palette.primary} !important`,
  },
  "& label": {
    fontSize: "16px",
    lineHeight: "1 !important",
    backgroundColor: "transparent !important",
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
