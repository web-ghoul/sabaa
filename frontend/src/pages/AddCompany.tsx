import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
const AddCompany = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-center gap-6`}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_COMPANIES_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            Companies
          </Link>
          <Typography key="2">Add Company</Typography>
        </BreadCrumbs>
        <Forms type={"addCompany"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default AddCompany;
