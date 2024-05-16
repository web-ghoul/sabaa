import { Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const EditEmployee = () => {
  const { pageContainerClasses } = useContext(AppContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
          >
            <Typography variant="h6">Employees</Typography>
          </Link>
          <Typography variant="h6" key="2">
            Edit Employee
          </Typography>
        </BreadCrumbs>
        <Forms type={"editEmployee"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EditEmployee;
