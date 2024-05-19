import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getEmployee } from "../store/employeeSlice";
import { AppDispatch, RootState } from "../store/store";
import EmployeeProfile from "../tabs/EmployeeProfile/EmployeeProfile";

const Employee = () => {
  const { employee, isLoading, activities } = useSelector(
    (state: RootState) => state.employee
  );

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const { setEmployeeTabsValue } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      dispatch(getEmployee({ id }));
    }
    setEmployeeTabsValue(0);
  }, [dispatch, id, setEmployeeTabsValue]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_EMPLOYEES_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Employees</Typography>
            </Link>
            <Typography variant="h6" key="2">
              {employee && employee.name}
            </Typography>
          </BreadCrumbs>
        </Box>
        <EmployeeProfile
          activities={activities}
          employee={employee}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Employee;
