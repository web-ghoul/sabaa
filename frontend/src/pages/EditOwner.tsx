import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
const EditOwner = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-center gap-6`}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_OWNERS_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            <Typography variant="h6">Owners</Typography>
          </Link>
          <Typography variant="h6" key="2">
            Edit Owner
          </Typography>
        </BreadCrumbs>
        <Forms type={"editOwner"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EditOwner;
