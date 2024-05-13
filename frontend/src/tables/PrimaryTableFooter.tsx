import { Box, Pagination } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { FormsContext } from "../contexts/FormsContext";
import { getCompanies } from "../store/companiesSlice";
import { getCustomers } from "../store/customersSlice";
import { getEmployees } from "../store/employeesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
import { getPros } from "../store/prosSlice";
import { AppDispatch } from "../store/store";
import { getUsers } from "../store/usersSlice";
import NoDataFound from "./NoDataFound";

const PrimaryTableFooter = ({
  count,
  variant,
}: {
  count: number;
  variant: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    ownersPage,
    setOwnersPage,
    customersPage,
    setCustomersPage,
    employeesPage,
    setEmployeesPage,
    companiesPage,
    setCompaniesPage,
    usersPage,
    setUsersPage,
    nationalitiesPage,
    setNationalitiesPage,
    jobsPage,
    setJobsPage,
    prosPage,
    setProsPage,
  } = useContext(AppContext);
  const [limit, setLimit] = useState<number>(10);
  const [searchParams] = useSearchParams();
  const {
    searchForJobs,
    searchForUsers,
    searchForCompanies,
    searchForNationalities,
    searchForOwners,
    searchForPros,
    searchForCustomers,
    searchForEmployees,
  } = useContext(FormsContext);

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    if (variant === "owners") {
      setOwnersPage(value);
      dispatch(
        getOwners({ page: value - 1, ...allParams, search: searchForOwners })
      );
    } else if (variant === "pros") {
      setProsPage(value);
      dispatch(
        getPros({ page: value - 1, ...allParams, search: searchForPros })
      );
    } else if (variant === "employees") {
      setEmployeesPage(value);
      dispatch(
        getEmployees({
          page: value - 1,
          ...allParams,
          search: searchForEmployees,
        })
      );
    } else if (variant === "customers") {
      setCustomersPage(value);
      dispatch(
        getCustomers({
          page: value - 1,
          ...allParams,
          search: searchForCustomers,
        })
      );
    } else if (variant === "companies") {
      setCompaniesPage(value);
      dispatch(
        getCompanies({
          page: value - 1,
          ...allParams,
          search: searchForCompanies,
        })
      );
    } else if (variant === "users") {
      setUsersPage(value);
      dispatch(
        getUsers({ page: value - 1, ...allParams, search: searchForUsers })
      );
    } else if (variant === "jobs") {
      setJobsPage(value);
      dispatch(
        getJobs({ page: value - 1, ...allParams, search: searchForJobs })
      );
    } else if (variant === "nationalities") {
      setNationalitiesPage(value);
      dispatch(
        getNationalities({
          page: value - 1,
          ...allParams,
          search: searchForNationalities,
        })
      );
    }
  };

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setLimit(+allParams?.limit || 10);
  }, [searchParams]);

  return Math.ceil(count / limit) > 1 ? (
    <Box className={`!grid justify-stretch items-center w-full p-4`}>
      <Pagination
        count={Math.ceil(count / limit)}
        variant="outlined"
        color="primary"
        page={
          variant === "owners"
            ? ownersPage
            : variant === "pros"
            ? prosPage
            : variant === "employees"
            ? employeesPage
            : variant === "customers"
            ? customersPage
            : variant === "companies"
            ? companiesPage
            : variant === "jobs"
            ? jobsPage
            : variant === "nationalities"
            ? nationalitiesPage
            : variant === "users"
            ? usersPage
            : 1
        }
        onChange={handleChange}
      />
    </Box>
  ) : (
    count === 0 && <NoDataFound />
  );
};

export default PrimaryTableFooter;
