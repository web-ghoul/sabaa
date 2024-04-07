import { TablePagination } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { getCompanies } from "../store/companiesSlice";
import { getJobs } from "../store/jobsSlice";
import { getNationalities } from "../store/nationalitiesSlice";
import { getOwners } from "../store/ownersSlice";
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

  const handleChangePage = (_: unknown, newPage: number) => {
    handleAddQuery({ page: `${newPage}` });
    setSearchParams({ ...queries, page: `${newPage}` });
    setPage(newPage);
    if (variant === "owners") {
      dispatch(getOwners({ ...queries, page: newPage }));
    } else if (variant === "companies") {
      dispatch(getCompanies({ ...queries, page: newPage }));
    } else if (variant === "nationalities") {
      dispatch(getNationalities({ ...queries, page: newPage }));
    } else if (variant === "users") {
      dispatch(getUsers({ ...queries, page: newPage }));
    } else if (variant === "jobs") {
      dispatch(getJobs({ ...queries, page: newPage }));
    }
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value, 10);
    handleAddQuery({ limit: `${val}` });
    setSearchParams({ ...queries, limit: `${val}` });
    if (variant === "owners") {
      dispatch(getOwners({ ...queries, limit: val }));
    } else if (variant === "companies") {
      dispatch(getCompanies({ ...queries, limit: val }));
    } else if (variant === "nationalities") {
      dispatch(getNationalities({ ...queries, limit: val }));
    } else if (variant === "users") {
      dispatch(getUsers({ ...queries, limit: val }));
    } else if (variant === "jobs") {
      dispatch(getJobs({ ...queries, limit: val }));
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
