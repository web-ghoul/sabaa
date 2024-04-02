import { Container, styled } from "@mui/material";

export const PrimaryContainer = styled(Container)(({ theme }) => ({
  paddingLeft: "40px !important",
  paddingRight: "40px !important",
  display: "grid",
  margin: "0px",
  maxWidth: "100% !important",
  height: "100% !important",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "35px !important",
    paddingRight: "35px !important",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "30px  !important",
    paddingRight: "30px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "25px !important",
    paddingRight: "25px !important",
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
}));
