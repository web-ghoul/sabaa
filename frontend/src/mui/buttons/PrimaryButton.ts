import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  padding: "8px 20px",
  border: "2px solid transparent",
  boxShadow: theme.shadows[1],
  "& > span > span": {
    height: "30px !important",
    width: "30px !important",
  },
  "& svg": {
    fontSize: "18px",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("lg")]: {
    borderRadius: "7px",
    gap: "4px",
    padding: "7px 18px",
    "& svg": {
      fontSize: "17px",
    },
    "& > span > span": {
      height: "28px !important",
      width: "28px !important",
    },
  },
  [theme.breakpoints.down("md")]: {
    borderRadius: "6px",
    gap: "3px",
    padding: "6px 16px",
    "& svg": {
      fontSize: "16px",
    },
    "& > span > span": {
      height: "26px !important",
      width: "26px !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "5px",
    padding: "5px 14px",
    "& svg": {
      fontSize: "14px",
    },
    "& > span > span": {
      height: "24px !important",
      width: "24px !important",
    },
  },
  [theme.breakpoints.down("xs")]: {
    borderRadius: "4px",
    gap: "2px",
    padding: "4px 12px",
    "& svg": {
      fontSize: "12px",
    },
    "& > span > span": {
      height: "22px !important",
      width: "22px !important",
    },
  },
}));
