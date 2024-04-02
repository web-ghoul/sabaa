import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ children }: { children: ReactNode }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextRounded fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link
        to="/"
        className={`text-black !font-[600] hover:text-primary`}
        key={1}
      >
        <Typography variant="h6">Dashboard</Typography>
      </Link>
      {children}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
