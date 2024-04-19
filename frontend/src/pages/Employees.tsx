import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getEmployees } from "../store/employeesSlice";
import { AppDispatch, RootState } from "../store/store";
import OwnersTable from "../tables/OwnersTable/OwnersTable";
const Employees = () => {
  const { isLoading } = useSelector((state: RootState) => state.employees);
  const { pageContainerClasses } = useContext(AppContext);
  const { queries } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getEmployees(queries));
  }, []);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Employees
          </Typography>
        </BreadCrumbs>
        <Forms type={"employeesOptions"} />
        <OwnersTable count={0} data={[]} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Employees;
