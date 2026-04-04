import { Box, Skeleton, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
const AddEmployee = () => {
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
            Add Employee
          </Typography>
        </BreadCrumbs>
        <Forms type={"addEmployee"} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingAddEmployee = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={150} height={24} />
      <Box className="grid grid-cols-2 gap-4">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={56} />
        ))}
      </Box>
      <Skeleton variant="rounded" height={48} width={120} />
    </PrimaryContainer>
  </PrimaryBox>
);

export default AddEmployee;
