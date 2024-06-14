import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  padding: "7px 16px",
  border: "2px solid transparent",
  boxShadow: theme.shadows[1],
  "& > span > span": {
    height: "20px !important",
    width: "20px !important",
  },
  "& svg": {
    fontSize: "14px",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("lg")]: {
    borderRadius: "3px",
    gap: "4px",
    padding: "6px 15px",
    "& > span > span": {
      height: "18px !important",
      width: "18px !important",
    },
    "& svg": {
      fontSize: "13px",
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px 14px",
    "& > span > span": {
      height: "16px !important",
      width: "16px !important",
    },
    "& svg": {
      fontSize: "12px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "2px",
    gap: "3px",
    padding: "5px 12px",
    "& > span > span": {
      height: "14px !important",
      width: "14px !important",
    },
    "& svg": {
      fontSize: "10px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    gap: "2px",
    padding: "4px 10px",
    "& > span > span": {
      height: "12px !important",
      width: "12px !important",
    },
  },
}));
