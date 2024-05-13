import { TablePagination } from "@mui/material";
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

const PrimaryTablePagination = ({
  count,
  variant,
}: {
  count: number;
  variant: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { queries, handleAddQuery } = useContext(AppContext);
  const [, setSearchParams] = useSearchParams();
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

  const handleChangePage = (_: unknown, newPage: number) => {
    handleAddQuery({ page: `${newPage}` });
    setSearchParams({ ...queries, page: `${newPage}` });
    setPage(newPage);
    if (variant === "owners") {
      dispatch(
        getOwners({ ...queries, page: newPage, search: searchForOwners })
      );
    } else if (variant === "pros") {
      dispatch(getPros({ ...queries, page: newPage, search: searchForPros }));
    } else if (variant === "employees") {
      dispatch(
        getEmployees({ ...queries, page: newPage, search: searchForEmployees })
      );
    } else if (variant === "customers") {
      dispatch(
        getCustomers({ ...queries, page: newPage, search: searchForCustomers })
      );
    } else if (variant === "companies") {
      dispatch(
        getCompanies({ ...queries, page: newPage, search: searchForCompanies })
      );
    } else if (variant === "nationalities") {
      dispatch(
        getNationalities({
          ...queries,
          page: newPage,
          search: searchForNationalities,
        })
      );
    } else if (variant === "users") {
      dispatch(getUsers({ ...queries, page: newPage, search: searchForUsers }));
    } else if (variant === "jobs") {
      dispatch(getJobs({ ...queries, page: newPage, search: searchForJobs }));
    }
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value, 10);
    handleAddQuery({ limit: `${val}` });
    setSearchParams({ ...queries, limit: `${val}` });
    if (variant === "owners") {
      dispatch(getOwners({ ...queries, limit: val, search: searchForOwners }));
    } else if (variant === "pros") {
      dispatch(getPros({ ...queries, limit: val, search: searchForPros }));
    } else if (variant === "employees") {
      dispatch(
        getEmployees({ ...queries, limit: val, search: searchForEmployees })
      );
    } else if (variant === "customers") {
      dispatch(
        getCustomers({ ...queries, limit: val, search: searchForCustomers })
      );
    } else if (variant === "companies") {
      dispatch(
        getCompanies({ ...queries, limit: val, search: searchForCompanies })
      );
    } else if (variant === "nationalities") {
      dispatch(
        getNationalities({
          ...queries,
          limit: val,
          search: searchForNationalities,
        })
      );
    } else if (variant === "users") {
      dispatch(getUsers({ ...queries, limit: val, search: searchForUsers }));
    } else if (variant === "jobs") {
      dispatch(getJobs({ ...queries, limit: val, search: searchForJobs }));
    }
    setRowsPerPage(val);
    setPage(0);
  };

  useEffect(() => {
    if (queries) {
      setPage(+queries?.page || 0);
      setRowsPerPage(+queries?.limit || 10);
    }
  }, [queries]);

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default PrimaryTablePagination;
