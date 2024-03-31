import { Container, styled } from "@mui/material";

export const PrimaryContainer = styled(Container)(({ theme }) => ({
  paddingLeft: "40px !important",
  paddingRight: "40px !important",
  display: "grid",
  margin: "0px",
  maxWidth: "100% !important",
  height: "100% !important",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "75px !important",
    paddingRight: "75px !important",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "60px  !important",
    paddingRight: "60px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "30px !important",
    paddingRight: "30px !important",
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
  },
}));
