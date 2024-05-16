import { Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const EditCompany = () => {
  const { pageContainerClasses } = useContext(AppContext);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_COMPANIES_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            <Typography variant="h6">Companies</Typography>
          </Link>
          <Typography variant="h6" key="2">
            Edit Company
          </Typography>
        </BreadCrumbs>
        <Forms type={"editCompany"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EditCompany;
