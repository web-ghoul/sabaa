import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const PrimaryIconButton = styled(LoadingButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "4px",
  padding: "4px",
  border: "2px solid transparent",
  minWidth: "auto !important",
  boxShadow: theme.shadows[1],
  "& svg": {
    fontSize: "20px",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("lg")]: {
    borderRadius: "3px",
    padding: "3px",
    "& svg": {
      fontSize: "18px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& svg": {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "2px",
    padding: "2px",
    "& svg": {
      fontSize: "15px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    "& svg": {
      fontSize: "14px",
    },
  },
}));
