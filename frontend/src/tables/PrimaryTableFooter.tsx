import { Box, Pagination } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { FormsContext } from "../contexts/FormsContext";
import { getCompanies } from "../store/companiesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
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
    companiesPage,
    setCompaniesPage,
    usersPage,
    setUsersPage,
    nationalitiesPage,
    setNationalitiesPage,
    jobsPage,
    setJobsPage,
  } = useContext(AppContext);
  const [limit, setLimit] = useState<number>(10);
  const [searchParams] = useSearchParams();
  const {
    searchForJobs,
    searchForUsers,
    searchForCompanies,
    searchForNationalities,
    searchForOwners,
  } = useContext(FormsContext);

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    console.log(variant);

    if (variant === "owners") {
      setOwnersPage(value);
      console.log(searchForOwners);
      dispatch(
        getOwners({ page: value - 1, ...allParams, search: searchForOwners })
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
