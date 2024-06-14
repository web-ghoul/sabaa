import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getEmployees } from "../store/employeesSlice";
import { AppDispatch, RootState } from "../store/store";
import EmployeesTable from "../tables/EmployeesTable/EmployeesTable";
const Employees = () => {
  const { employees, isLoading } = useSelector(
    (state: RootState) => state.employees
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { employeesCounter } = useSelector(
    (state: RootState) => state.employeesCounter
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    dispatch(getEmployees(allParams));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Employees
          </Typography>
        </BreadCrumbs>
        <Forms type={"employeesOptions"} />
        <EmployeesTable
          count={employeesCounter}
          data={employees}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Employees;
