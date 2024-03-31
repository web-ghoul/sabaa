<<<<<<< HEAD
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Forms from "../forms/Forms";
=======
import UnderDevelopment from "../components/UnderDevelopment/UnderDevelopment";
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
const EditOwner = () => {
  return (
    <PrimaryBox>
<<<<<<< HEAD
      <PrimaryContainer className={`grid justify-stretch items-center gap-6`}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_OWNERS_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            Owners
          </Link>
          <Typography key="2">Edit Owner</Typography>
        </BreadCrumbs>
        <Forms type={"editOwner"} />
=======
      <PrimaryContainer>
        <UnderDevelopment />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EditOwner;
